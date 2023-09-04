import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav">
            <button>
                <Link to="/home">Home</Link>
            </button>
            <button>
                <Link to="/about">About</Link>
            </button>
            <button>
                <Link to="/form">Agregar juego</Link>
            </button>
        </div>
    )
}

export default Nav
