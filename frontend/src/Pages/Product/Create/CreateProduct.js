import React, { Component } from 'react';
import Title from "./Forms/Title"
import Categories from "./Forms/Categories"
import Description from "./Forms/Description"
import Price from "./Forms/Price"
import Summary from "./Forms/Summary"

class CreateProduct extends Component {
    state = {
        step: 1,
        title: '',
        categories: '',
        description: '',
        price: '',
        rent: '',
        rentType: ''
    };
    
    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
        step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
        step: step - 1
        });
    };

    // Handle fields change
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { step } = this.state;
        const { title,categories,description,price,rent,rentType } = this.state;
        const values = { title,categories,description,price,rent,rentType };
        switch(step) {
        case 1:
            return <Title
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
        case 2:
            return <Categories
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
        case 3:
            return <Description
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
        case 4:
            return <Price
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
        case 4:
            return <Summary
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />                          
        }
    }
}

export default CreateProduct;