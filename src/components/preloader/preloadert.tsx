import './style.css'

const Preloader = () => {
    return(
        <div className="loader">
            <div className="spinner-block">
                <div className="spinner">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Preloader;