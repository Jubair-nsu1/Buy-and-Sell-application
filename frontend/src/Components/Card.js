import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useNavigate } from "react";
import { DELETE_PRODUCT } from "../GraphQL/Mutation";
import { Mutation } from "react-apollo";
import {EditProduct} from "./../Pages/Product/EditProduct"

const navigate = useNavigate();

// When card is clicked, user will be redirected to Edit Product Page
const navigateEdit = () => {
    navigate(EditProduct);
};

const Card = ({productID,title,categories,price,rent,rentype,description}) => {
    return (
        <div class="container mt-3">
            <div class="card shadow p-2 mb-4 bg-body-tertiary rounded" style="width: 50rem; cursor: pointer" onClick={() => {navigateEdit}}>
                <div class="card-body">
                    <div>
                        <h1>{title}</h1>
                        <a class="mb-3">{categories}</a>
                        <p style={{fontweight:bold}}>Price: {price}  |  Rent: {rent}/{rentype}</p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <Mutation mutation={DELETE_PRODUCT}>
                            {mutation => (
                                <faTrash
                                    style={{ color: 'red', cursor: 'pointer' }}
                                    onClick={() => mutation({ variables: { id: productID } })}
                                />
                            )}
                        </Mutation>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card