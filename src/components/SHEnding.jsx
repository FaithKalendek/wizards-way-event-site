import { useEffect, useState } from "react";

// Capture finish time and submit participant info to a Google Form
// Google Form prefill: put your form's prefilled URL in `base` and map entry IDs in `fields`.
const GOOGLE_FORM_PREFILL = {
    base: "https://docs.google.com/forms/d/e/1FAIpQLSc8HoFW7GupuQeacCwfuEvX2_Y4vpkwoxvGIM6CFPy8CE_hZw/viewform?usp=pp_url&entry.1447650116=Name&entry.1407243913=Email&entry.162734577=123-456-7891&entry.969608818=00%3A00%3A00",
    fields: {
        name: "entry.1447650116",
        email: "entry.1407243913",
        phoneNumber: "entry.162734577",
        timeSeconds: "entry.969608818"
    }
};

const buildFormPrefillUrl = (payload) => {
    if (!GOOGLE_FORM_PREFILL.base || GOOGLE_FORM_PREFILL.base.includes("<YOUR_GOOGLE_FORM_PREFILL_URL_HERE>")) return null;
    try {
        const url = new URL(GOOGLE_FORM_PREFILL.base);
        // Remove any existing entry.* params from the base (may contain sample values)
        const params = new URLSearchParams(url.search);
        for (const k of Array.from(params.keys())) {
            if (k.startsWith('entry.')) params.delete(k);
        }

        // Set the desired entry fields from the payload
        Object.entries({
            name: "entry.1447650116",
            email: "entry.1407243913",
            phoneNumber: "entry.162734577",
            timeSeconds: "entry.969608818"
        }).forEach(([key, entry]) => {
            if (!entry) return;
            const value = payload[key] !== undefined ? payload[key] : "";
            params.set(entry, String(value));
        });
        url.search = params.toString();
        return url.toString();
    } catch (err) {
        console.error('Invalid GOOGLE_FORM_PREFILL.base URL', err);
        return null;
    }
};

const SHEnding = ({ userInfo, currentTime, setTimeTaken, timeTaken }) => {

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitResult, setSubmitResult] = useState(null); // 'ok' | 'fallback' | 'failed'
    const [submitLink, setSubmitLink] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmName, setConfirmName] = useState((userInfo && userInfo.name) || "");
    const [confirmEmail, setConfirmEmail] = useState((userInfo && userInfo.email) || "");
    const [confirmPhone, setConfirmPhone] = useState((userInfo && userInfo.phoneNumber) || "");
    const [confirmOptIn, setConfirmOptIn] = useState((userInfo && userInfo.canPutInDrawing) || false);

    // Freeze finish time: capture the first available currentTime (or timeTaken) and keep it.
    const [finalTimeCaptured, setFinalTimeCaptured] = useState(null);
    useEffect(() => {
        if (finalTimeCaptured !== null) {
            if (sessionStorage.getItem('huntFormSubmitted')) setSubmitted(true);
            return;
        }

        // Prefer an authoritative elapsed time if huntStart exists in sessionStorage.
        const start = sessionStorage.getItem('huntStart');
        if (start) {
            const elapsed = Math.floor((Date.now() - Number(start)) / 1000);
            setFinalTimeCaptured(elapsed);
            try { setTimeTaken(elapsed); } catch (e) { }
            if (sessionStorage.getItem('huntFormSubmitted')) setSubmitted(true);
            return;
        }

        // No huntStart available yet; fall back to parent's values if they are positive.
        if (typeof currentTime === 'number' && currentTime > 0) {
            setFinalTimeCaptured(currentTime);
            try { setTimeTaken(currentTime); } catch (e) { }
            return;
        }

        if (typeof timeTaken === 'number' && timeTaken > 0) {
            setFinalTimeCaptured(timeTaken);
            try { setTimeTaken(timeTaken); } catch (e) { }
            return;
        }

        // otherwise leave as null until something meaningful appears
    }, [currentTime, timeTaken, setTimeTaken, finalTimeCaptured]);

    // Keep the confirm fields in sync if userInfo changes
    useEffect(() => {
        if (userInfo) {
            setConfirmName(userInfo.name || "");
            setConfirmEmail(userInfo.email || "");
            setConfirmPhone(userInfo.phoneNumber || "");
        }
    }, [userInfo]);

    // Keep opt-in checkbox in sync with userInfo
    useEffect(() => {
        if (userInfo) {
            setConfirmOptIn(!!userInfo.canPutInDrawing);
        }
    }, [userInfo]);

    // If the parent didn't pass userInfo (direct visit), try restoring it from sessionStorage
    const effectiveUser = (() => {
        if (userInfo) return userInfo;
        try {
            const raw = sessionStorage.getItem('huntUserInfo');
            if (raw) return JSON.parse(raw);
        } catch (e) { }
        return null;
    })();

    // Ensure confirm fields are initialized from effectiveUser when available
    useEffect(() => {
        if (effectiveUser) {
            setConfirmName(effectiveUser.name || "");
            setConfirmEmail(effectiveUser.email || "");
            setConfirmPhone(effectiveUser.phoneNumber || "");
            setConfirmOptIn(!!effectiveUser.canPutInDrawing);
        }
    }, [effectiveUser]);

    // Helper: programmatically submit a Google Form by building a hidden <form> with
    // entry.* inputs and submitting it to the formResponse endpoint into an invisible iframe.
    // Submit to Google Form programmatically using a hidden form + iframe.
    // Returns a Promise that resolves true on (likely) success, false on failure.
    const submitToGoogleForm = (payload) => {
        return new Promise((resolve) => {
            if (!GOOGLE_FORM_PREFILL.base || GOOGLE_FORM_PREFILL.base.includes("<YOUR_GOOGLE_FORM_PREFILL_URL_HERE>")) {
                console.info('Google Form prefill not configured.');
                return resolve(false);
            }

            try {
                const baseUrl = new URL(GOOGLE_FORM_PREFILL.base);
                // Build formResponse endpoint without carrying over any query params from the base (avoid leftover sample values)
                const formAction = baseUrl.origin + baseUrl.pathname.replace('/viewform', '/formResponse');

                const iframeName = 'google-form-target';
                let iframe = document.getElementById('_google_form_iframe_');
                let createdIframe = false;
                if (!iframe) {
                    iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.id = '_google_form_iframe_';
                    iframe.name = iframeName;
                    document.body.appendChild(iframe);
                    createdIframe = true;
                }

                // Create form
                const form = document.createElement('form');
                form.action = formAction;
                form.method = 'POST';
                form.target = iframeName;
                form.style.display = 'none';

                Object.entries(GOOGLE_FORM_PREFILL.fields).forEach(([key, entry]) => {
                    if (!entry) return;
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = entry;
                    input.value = (payload[key] !== undefined && payload[key] !== null) ? String(payload[key]) : '';
                    form.appendChild(input);
                });

                // Append and submit
                document.body.appendChild(form);

                let handled = false;

                const cleanup = () => {
                    try { document.body.removeChild(form); } catch (e) { }
                    if (createdIframe) {
                        try { document.body.removeChild(iframe); } catch (e) { }
                    }
                };

                // Wait for iframe load event or timeout
                const onLoad = () => {
                    if (handled) return;
                    handled = true;
                    // mark session after load as opened/submitted
                    try {
                        sessionStorage.setItem('huntFormOpened', '1');
                        sessionStorage.setItem('huntFormSubmitted', '1');
                    } catch (e) { }
                    cleanup();
                    resolve(true);
                };

                const onTimeout = () => {
                    if (handled) return;
                    handled = true;
                    cleanup();
                    resolve(false);
                };

                // attach load listener
                try {
                    iframe.addEventListener('load', onLoad, { once: true });
                } catch (e) {
                    // ignore
                }

                // Submit and wait up to 6s for the iframe to load the response
                form.submit();
                const timer = setTimeout(() => {
                    onTimeout();
                }, 6000);

            } catch (err) {
                console.error('Failed to submit form programmatically', err);
                return resolve(false);
            }
        });
    };

    return (
        <section className="sh-step sh-ending">
            { /* Display certificate with user's name and time taken */ }
            <h2>Congratulations, {(effectiveUser && effectiveUser.name) || 'Player'}!</h2>
            <p>You have completed the scavenger hunt!</p>
            <p>Your time: {Math.floor((finalTimeCaptured ?? 0) / 60).toString().padStart(2, '0')}:{((finalTimeCaptured ?? 0) % 60).toString().padStart(2, '0')}</p>
            <p>Thank you for participating!</p>
            { effectiveUser && effectiveUser.canPutInDrawing && submitted &&
                <p>You have been entered into the prize drawing!</p>
            }

            { submitting && <p>Saving your result&hellip;</p> }

            { /* Consolidated submission feedback: show a clear success message after submission, and concise error when not submitted */ }
            { submitted ? (
                submitResult === 'ok' ? (
                    <p className="success">Your time has been recorded. Thank you!</p>
                ) : submitResult === 'fallback' ? (
                    <div className="success">
                        <p>Your time has been recorded. We opened the prefilled Google Form in a new tab so you can complete submission — thank you.</p>
                        { submitLink && <p><a href={submitLink} target="_blank" rel="noreferrer">Open prefilled Google Form (manual)</a></p> }
                    </div>
                ) : submitResult === 'opted-out' ? (
                    <p className="muted">You chose not to enter the prize drawing.</p>
                ) : submitResult === 'failed' ? (
                    <div className="error">
                        <p>{submitError || 'Automatic submission failed.'}</p>
                        { submitLink ? (
                            <p><a href={submitLink} target="_blank" rel="noreferrer">Open prefilled Google Form</a></p>
                        ) : (
                            <p>If the problem persists, please contact the event organizer.</p>
                        ) }
                    </div>
                ) : null
            ) : (
                submitError && (
                    <div className="error">
                        <p>Could not save your result: {submitError}</p>
                        <p>If the problem persists, please contact the event organizer.</p>
                    </div>
                )
            )}

            { /* If Apps Script is not configured and the form is configured, show a confirmation UI that lets the user verify contact info and submit to the drawing. The client will submit the form programmatically so the finish time cannot be edited. */ }
            { GOOGLE_FORM_PREFILL.base && !sessionStorage.getItem('huntFormSubmitted') && !submitting && !submitted && (
                <div className="form-confirm">
                    {!showConfirm ? (
                        <>
                            <p>To enter the drawing, please confirm or enter your contact info below.</p>
                            <button onClick={() => setShowConfirm(true)}>Confirm info to enter drawing</button>
                            <p className="muted">If you didn't opt in earlier you can still choose to join the drawing here.</p>
                        </>
                    ) : (
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            // reset submit state
                            setSubmitting(true);
                            setSubmitError(null);
                            setSubmitResult(null);
                            setSubmitLink(null);
                            setShowConfirm(false);

                            const finalTime = (typeof finalTimeCaptured === 'number') ? finalTimeCaptured : ((typeof currentTime === 'number') ? currentTime : 0);
                            const formattedTime = `${Math.floor(finalTime/60).toString().padStart(2,'0')}:${(finalTime%60).toString().padStart(2,'0')}`;
                            const payload = {
                                name: confirmName,
                                email: confirmEmail,
                                phoneNumber: confirmPhone,
                                timeSeconds: formattedTime
                            };

                            if (confirmOptIn) {
                                try {
                                    const prefillUrl = buildFormPrefillUrl({ ...payload, timeSeconds: formattedTime });
                                    let ok = await submitToGoogleForm(payload);
                                    // submitToGoogleForm may return false if it times out even though the
                                    // form POST completed (iframe load handler sets sessionStorage).
                                    // If that session flag is present after the attempt, treat as success.
                                    try {
                                        if (!ok && sessionStorage.getItem('huntFormSubmitted')) {
                                            ok = true;
                                        }
                                    } catch (e) {}

                                    if (ok) {
                                        try { sessionStorage.setItem('huntFormSubmitted', '1'); } catch (e) {}
                                        setSubmitted(true);
                                        setSubmitResult('ok');
                                        setSubmitError(null);
                                    } else {
                                        const url = prefillUrl || buildFormPrefillUrl(payload);
                                        if (url) {
                                            let opened = null;
                                            try { opened = window.open(url, '_blank'); } catch (e) { opened = null; }
                                            if (opened) {
                                                try { sessionStorage.setItem('huntFormSubmitted', '1'); } catch (e) {}
                                                setSubmitted(true);
                                                setSubmitResult('fallback');
                                                setSubmitLink(url);
                                                setSubmitError(null);
                                            } else {
                                                setSubmitError('Could not open the Google Form automatically (popup blocked). Please click the link below to open the prefilled form.');
                                                setSubmitLink(url);
                                                setSubmitResult('failed');
                                            }
                                        } else {
                                            setSubmitError('Could not submit form programmatically and no prefill URL is available.');
                                            setSubmitResult('failed');
                                        }
                                    }
                                } catch (err) {
                                    console.error('Error submitting form', err);
                                    setSubmitError(String(err));
                                    setSubmitResult('failed');
                                }
                            } else {
                                // User explicitly chose not to enter the drawing
                                try { sessionStorage.setItem('huntFormSubmitted', '1'); } catch (e) {}
                                setSubmitted(true);
                                setSubmitResult('opted-out');
                            }

                            setSubmitting(false);
                        }}>
                            <label>
                                Name
                                <input value={confirmName} onChange={(e) => setConfirmName(e.target.value)} required />
                            </label>
                            <label>
                                Email
                                <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
                            </label>
                            <label>
                                Phone
                                <input value={confirmPhone} onChange={(e) => setConfirmPhone(e.target.value)} />
                            </label>
                            <label>
                                <input type="checkbox" checked={confirmOptIn} onChange={(e) => setConfirmOptIn(e.target.checked)} />
                                I agree to have my contact info entered into a drawing for a prize.
                            </label>
                            <p className="muted">Finish time will be recorded automatically and is not editable.</p>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setShowConfirm(false)}>Cancel</button>
                        </form>
                    )}
                </div>
            )}
            {/* Previously we hid form when participant info was missing or opt-in was false. The form now shows regardless so users can enter/confirm info here. */}
        </section>
    );
};

export default SHEnding;