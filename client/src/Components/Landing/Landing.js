import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className="landing">
            <button>
                <Link to="/home">START</Link>
            </button>
        </div>
    )
}

export default Landing