import { Link } from "react-router-dom";

function Start() {
    return (
        <>
            <h1 className="header">5 Minuten Fragen</h1>
            <div className="container">
                <div>
                <Link to="/frage#deepTalk"><h1 className="zufaellige-frage-text">Deep Talk</h1></Link>
                </div>
                <div>
                    <Link to="/frage#casual"><h1 className="casual-frage-text">Casual</h1></Link>
                </div>
            </div>

        </>
    );
}

export default Start