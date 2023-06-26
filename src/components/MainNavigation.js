import { Link } from "react-router-dom";
import './MainNavigation.module.css'

function MainNavigation(params) {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default MainNavigation;