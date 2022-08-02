function Next() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className="container">
            <div className="next-button" onClick={refreshPage}>
                <h1 className="next-quest">Nächste Frage</h1>
            </div>
        </div>
    );
}

export default Next