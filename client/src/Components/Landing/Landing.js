import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className="landing">
            <h1>Welcome to the best place for all your pet needs</h1><br/>
            <button>
                <Link to="/home">START</Link>
            </button>
        </div>
    )
}

export default Landing