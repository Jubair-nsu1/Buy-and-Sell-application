import { Link } from "react-router-dom";
import {Cards} from "./../../Components/Cards"


const MyProduct = ({productID}) => {
    return (
        <div class="container">
            <h1>MY PRODUCTS</h1>
            <Cards id={productID}/>
            <Link to="./Create/CreateProduct">
                <button class="btn btn-primary">Add Product</button>
            </Link>
        </div>
    )
}

export default MyProduct