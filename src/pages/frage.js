import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import data from './Fragen.json'

function Frage() {

    const [fragen, setFragen] = useState([]);
    const [buttonClick, setButtonClick] = useState(0);
    const [displayText, setDisplayText] = useState('');

    function random() {
        const item = Math.floor(Math.random() * data.length)
        return item
    }

    const location = useLocation();
    const type = location.hash.substring(1); // this will remove the "#" at the start of the hash

    const buttonStyle = type === "deepTalk" ? { backgroundColor: "#8c5383" } : {backgroundColor: "#55917f" };

    useEffect(() => {
        if (fragen.frage) { // Ensure fragen.frage exists before using it
            const fullText = fragen.frage;
            let currentLength = 0;
            const interval = setInterval(() => {
                currentLength++;
                setDisplayText(fullText.substring(0, currentLength));
                if (currentLength === fullText.length) {
                    clearInterval(interval);
                }
            }, 50);
        }
    }, [fragen]);

    function handleNextQuestionClick() {
        setButtonClick(buttonClick + 1);
        setDisplayText('');
    }

    useEffect(() => {
        setFragen(data[random()])
    }, [buttonClick])

    return (
        <>
            <h1 className="header">5 Minuten Fragen</h1>
            <div className="container">
                <div className="frage-container">
                    <h1 className="frage">{displayText}</h1>
            </div>
            </div>
            <div className="container" onClick={handleNextQuestionClick}>
                <div className="next-button" style={buttonStyle}>
                    <h1 className="next-quest">Nächste Frage</h1>
                </div>
            </div>
        </>
    )
}

export default Frage
