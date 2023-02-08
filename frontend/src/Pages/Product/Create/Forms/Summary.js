import React, { Component } from 'react';
 
class Summary extends Component{
 
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
 
    render(){
        const {inputValues: { title,categories,description,price,rent,rentType }} = this.props;
 
        return(
            <div class="container" style={{width:'50rem'}}>
                <h1 class="mb-3">Summary</h1>
                <p>Title: {title}</p>
                <p>Categories: {categories}</p>
                <p>Description: {description}</p>
                <p>Price: {price}, To Rent: {rent} {rentType}</p>

                <button class="btn btn-primary" onClick={this.back}>Back</button>{' '}
                <button class="btn btn-primary">Submit</button>
            </div>
        )
    }
}
 
export default Summary;