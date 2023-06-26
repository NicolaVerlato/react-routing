import { Link } from "react-router-dom";

function Home(params) {
    return(
        <div>
            ciao<br/>
            <Link to="/products">prodotti</Link>
        </div>
    )
}

export default Home;