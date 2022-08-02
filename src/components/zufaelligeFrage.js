import { Link } from "react-router-dom";

function ZufaelligeFrage() {
    return (   
        <div className="container">
             <div className="zufaellige-frage-container">
                <Link to="/frage"><h1 className="zufaellige-frage-text">Zufällige Frage</h1></Link>
            </div>
        </div>
      
    );
}

export default ZufaelligeFrage