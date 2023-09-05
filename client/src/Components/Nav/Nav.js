import { Link, useLocation} from "react-router-dom";

const Nav = () => {
    const location = useLocation();

    const miLocation = location.pathname === "/";

    if(miLocation){
      return null;
    }
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
    
    
