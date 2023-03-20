import Header from "../components/header"
import { useEffect, useState } from 'react'
import data from './Fragen.json'

function Frage() {

    const [fragen, setFragen] = useState([]);
    const [buttonClick, setButtonClick] = useState(0);
    const [displayText, setDisplayText] = useState('');

    function random() {
        const item = Math.floor(Math.random() * data.length)
        return item
    }

    useEffect(() => {
        const fullText = fragen.frage;
        let currentLength = 0;
        const interval = setInterval(() => {
            currentLength++;
            setDisplayText(fullText.substring(0, currentLength));
            if (currentLength === fullText.length) {
                clearInterval(interval);
            }
        }, 50);
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
            <head>
                <title>5 Minuten Fragen</title>
            </head>
            <Header></Header>
            <div className="container">
                <div className="frage-container">
                    <h1 className="frage">{displayText}</h1>
                </div>
            </div>
            <div className="container" onClick={handleNextQuestionClick}>
                <div className="next-button">
                    <h1 className="next-quest">Nächste Frage</h1>
                </div>
            </div>
        </>
    )
}

export default Frage
