import React, { Component } from 'react';
 
 
class Price extends Component{
 
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
 
    render() {
        return( 
            <div class="container" style={{width:'50rem'}}>
                <Form>
                    <h1>Select Price</h1> 
                    <div class="mb-3">
                        <input class="form-control" type="number" name="price" value={this.props.inputValues.price} onChange={this.props.handleChange}/>
                    </div>
                     
                    <div class="mb-3">
                        <div class="row">
                            <div class="col">
                                <h3>Rent</h3>
                                <input class="form-control" type="number" name="rent" value={this.props.inputValues.rent} onChange={this.props.handleChange}/>
                            </div>
                            <div class="col">
                                
                            </div>
                        </div>
                        
                    </div>
                    <Button class="btn btn-primary" onClick={this.back}>Back</Button>{' '}
                    <Button class="btn btn-primary" onClick={this.saveAndContinue}>Next</Button>
                </Form>
            </div>
        );
    }
}
 
export default Price;