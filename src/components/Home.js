import { useNavigate } from "react-router-dom";

function Home(params) {
    const navigate = useNavigate();
    function navigateHandler(params) {
        navigate('/products')
    }
    return(
        <>
            <h1>
                HomePage
            </h1>
            <button onClick={navigateHandler}>Prodotti</button>
        </>
    )
}

export default Home;