// ScavengerHuntPage.jsx -- wrapper page that dynamically displays content based on entered scavenger hunt step id in url

import { useParams } from "react-router-dom";
import "./ScavengerHuntPage.css"

const ScavengerHuntPage = () => {

    const { stepId } = useParams();

    /*
    initial qr code scan on goblet of fire --> google form for scoreboard name/contact info --> redirect to page with first clue and start timer (counting up so they can see how long it took them -- have option to hide if it stresses them out) first clue == dragon --> look for dragons to find next qrcode --> next clue is a gif of moaning myrtle "password please" with slot to enter password, answer is "pine fresh", hint for password is "go ask a prefect", also have a note wih password from twins on back of maurauders map --> egg riddle -- play clip from movie --> go to black lake for next qr code --> piece of sheet music with notes highlighted spelling word "BAG" --> go to Hogwarts express luggage --> on victor krumm's suitcase --> list of couples at yule ball and locations --> go to only location with couple actually at yule ball -- quidditch pitch --> poem --> go to joke shop --> flyer for self scrambling id cards, solve anagram --> madam Maxine, get last qr code, links to moody audio clip --> final qr code hidden on moody's flask, certificate generator (make a certificate with entered name, record time) 
    */

    return (
        <div>Scavenger Hunt Step: {stepId}</div>
    );

}

export default ScavengerHuntPage;
