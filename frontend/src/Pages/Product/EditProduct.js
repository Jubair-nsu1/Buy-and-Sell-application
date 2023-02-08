import React, { useState } from "react";
import { UPDATE_PRODUCT } from "../GraphQL/Mutation";
import { useMutation } from "@apollo/client";

const [values, setValues] = useState({
    title: '',
    categories: '',
    description: '',
    price: '',
    rent: ''
});

const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
}

const [ updateProduct, { loading } ] = useMutation(UPDATE_PRODUCT, {
    variables: values
});

const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();
}

const EditProduct = ({title,price,rent,rentype,description}) => {
    return (
        <div class="container mt-3" style="width: 50rem;">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label>Title</label>
                    <input class="form-control" type="text" name="password" value={values.title} onChange={onChange}/>
                </div>
                <div class="mb-3">
                    <label>Description</label>
                    <input class="form-control" type="textarea" name="password" value={values.description} onChange={onChange}/>
                </div> 
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <label>Price</label>
                            <input class="form-control" type="number" name="price" value={values.price} onChange={onChange}/>
                        </div>
                        <div class="col">
                            <label>Rent</label>
                            <input class="form-control" type="number" name="rent" value={values.rent} onChange={onChange}/>
                        </div>
                    </div>
                </div> 
                <button class="btn btn-primary mb-2" type="submit">Edit Product</button>
            </form>
        </div>
    )
}

export default EditProduct