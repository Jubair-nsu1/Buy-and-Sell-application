import React, { Component } from 'react';
 
 
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
        return( 
            <div class="container" style={{width:'50rem'}}>
                <Form>
                    <h1>Select categories</h1> 
                    <input class="form-control" type="text" name="title" value={this.props.inputValues.title} onChange={this.props.handleChange}/>
                    <Button class="btn btn-primary" onClick={this.back}>Back</Button>{' '}
                    <Button class="btn btn-primary" onClick={this.saveAndContinue}>Next</Button>
                </Form>
            </div>
        );
    }
}
 
export default Categories;