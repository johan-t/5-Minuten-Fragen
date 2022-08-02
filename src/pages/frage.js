import Header from "../components/header"
import Next from "../components/next"
import {useEffect, useState} from 'react'
import data from './Fragen.json'

function Frage() {

    const [fragen, setFragen] = useState([]);

    function random() {
        var item = Math.floor(Math.random() * data.length)

        return item
    }
    //var item =  Math.floor(Math.random() * data.length)

    useEffect(() => {
        setFragen(data[random()])
    })


    return (
        <>
            <head>
                <title>5 Minuten Fragen</title>
            </head>
            <Header></Header>
            <div className="container">
                <div className="frage-container">
                    <h1 className="frage">{fragen.frage}</h1>
                </div>
            </div>
            <Next></Next>
        </>
    )
}

export default Frage