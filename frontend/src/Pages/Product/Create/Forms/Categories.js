import React, { Component } from 'react';
import Select from 'react-select'
 
 
class Categories extends Component{
 
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
 
    render() {
        const options = [
            { value: 'Electronics', label: 'ELECTRONICS' },
            { value: 'Furniture', label: 'FURNITURE' },
            { value: 'Home Appliances', label: 'HOME APPLIANCES' },
            { value: 'Sporting Goods', label: 'SPORTING GOODS' },
            { value: 'Outdoor', label: 'OUTDOOR' },
            { value: 'Toys', label: 'TOYS' }
        ]

        return( 
            <div class="container" style={{width:'50rem'}}>
                <Form>
                    <h1>Select categories</h1> 
                    <Select options={options} value={this.props.inputValues.options} onChange={this.props.handleChange}/>
                    
                    <Button class="btn btn-primary" onClick={this.back}>Back</Button>{' '}
                    <Button class="btn btn-primary" onClick={this.saveAndContinue}>Next</Button>
                </Form>
            </div>
        );
    }
}
 
export default Categories;