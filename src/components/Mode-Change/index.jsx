import {useState} from 'react'

import "./styles.css"

export default function ModeChange() {
    const [changeMood, setChangeMood] = useState(false);

    function handleClick() {
        setChangeMood((prevMood) => !prevMood);
        // Dynamically update background color
        document.documentElement.style.setProperty(
            "--background-color",
            changeMood ? "#fff" : "#000"
        );
    }

    return (
        <div className="container">
            <button
                className={changeMood ? "toggle-button-black" : "toggle-button-white"}
                onClick={handleClick}
            >
                Change Mood
            </button>
        </div>
    );
}


// export default function MoodChnage(){

//     return()
// }