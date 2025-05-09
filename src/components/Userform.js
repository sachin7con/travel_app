import React from 'react';

const Userform = () => {
    return (<div>
        <form>
            <h1>Plan Your Journey, Your Way!</h1>
            <h4>Lets create your personalised experience</h4>

            <p>Where would you like to go?</p>
            <input type="text" placeholder="Enter Destination" /><br /><br />

            <p>How long will you stay?</p>
            <select type="date" value="Select Duration" >
                <option>Select Duration</option>
                <option>1 day</option>
                <option>2 Days</option>
                <option>3 Days</option>
                <option>4 Days</option>
                <option>5 Days</option>
                <option>6 Days</option>
                <option>7 Days</option>
                <option>8 Days</option>
                <option>9 Days</option>
                <option>10 Days</option>

                </select><br /><br />

            <p>Who are you travelling with ?</p>
            <input type="button" value="Solo" /><br />

            <button type="submit">Continue</button>
        </form>
    </div>)
}

export default Userform;