import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
    const [mood, setMood] = useState('alright');

    const handleWinLooto = () => {
        setMood('ecstatic')
    }

    const handleRunningLate = () => {
        let newMood = 'stressed'
        if (mood === 'stressed') newMood = 'Really stressed'
        else if (mood === 'Really stressed') newMood = 'giving up';

        setMood(newMood)
    }

    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}

            <button onClick={() => setMood('tired')}>
                Stay up Late
                </button>

                {/* <button onClick={setMood('tired')}>Stay Up Late</button> - Do not Use*/}

                <button onClick={() => setMood('hungry')}>
                Skip Lunch
                </button>

                
                <button onClick={() => setMood('optimistic')}>
                Got good sleep
                </button>

                <button onClick={handleRunningLate}>Running Late</button>
                <button onClick={handleWinLooto}>Win Lotto</button>
        </div>
)}

export default MoodChanger;