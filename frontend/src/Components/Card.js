import { FaTimes } from 'react-icons/fa'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Product = ({productID, title,price,rent,rentype,description,onDelete,onUpdate}) => {
    return (
        <div class="container mt-3">
            <div class="card shadow p-2 mb-4 bg-body-tertiary rounded" style="width: 50rem; cursor: pointer" onClick={() => onUpdate(productID)}>
                <div class="card-body">
                    <div>
                        <h1>{title}</h1>
                        <p style="font-weight:bold">Price: {price}  |  Rent: {rent}/{rentype}</p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <faTimes
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => onDelete(productID)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product