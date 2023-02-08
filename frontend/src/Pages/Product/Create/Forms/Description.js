import React, { Component } from 'react';
 
 
class Description extends Component{
 
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
                    <h1>Write Description</h1> 
                    <input class="form-control" type="textarea" name="description" value={this.props.inputValues.description} onChange={this.props.handleChange}/>
                    <Button class="btn btn-primary" onClick={this.back}>Back</Button>{' '}
                    <Button class="btn btn-primary" onClick={this.saveAndContinue}>Next</Button>
                </Form>
            </div>
        );
    }
}
 
export default Description;