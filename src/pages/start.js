import { Link } from "react-router-dom";

function Start() {
    return (
        <>
            <h1 className="header">5 Minuten Fragen</h1>
            <div className="container">
                <div className="zufaellige-frage-container">
                    <Link to="/frage"><h1 className="zufaellige-frage-text">Deep Talk</h1></Link>
                </div>
                <div className="casual-frage-container">
                    <Link to="/frage"><h1 className="casual-frage-text">Casual</h1></Link>
                </div>
            </div>

        </>
    );
}

export default Start