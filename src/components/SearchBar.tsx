"use client"
// @ts-nocheck
// @ts-ignore: Unreachable code error
import React from "react";
import InputField from "@/components/ui/InputField";
import Button from "@/ui/Button";
import {Field,reduxForm} from "redux-form";

 
class SearchBar extends React.Component{
    renderInput({input}){
        return (
            <InputField 
                variant={'search'} 
                className="rounded-none" 
                placeHolder="Search Music..."
                {...input}
            />
        )
    }

    onSubmit(formValues){
        console.log(formValues)
    }
    render(){
        return ( 
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="searchInput" component={this.renderInput}/>
                <Button className="m-0 rounded-none">Search</Button>
            </form>
        
        );
    }
}

const validate = (formValues)=>{
    const errors = {};
    if(!formValues.searchInput){
        errors.searchInput = "you have to enter the values" 
    }
    return errors;
}
 

export default reduxForm({
    form:"search",
    validate
})(SearchBar);