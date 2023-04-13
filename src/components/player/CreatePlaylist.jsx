'use client'
import CustomCard from "@/components/ui/CustomCard";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { Field,reduxForm } from "redux-form";
import React  from "react";


class CreatePlaylist extends React.Component{
    renderInput({input}){
        return (
            <InputField variant={'ghost'} className="w-60" placeHolder="Name" {...input}>
            </InputField>
        );
    }

    onSubmit(event){
        event.preventDefault()
    }

    render() {
        return ( 
            <CustomCard header="Create Library">
                <form >
                    <Field name={'name'} component={this.renderInput}/>
                    <InputField variant={'ghost'} className="w-60" placeHolder="Info">
                    </InputField>
                    <Button size={'lg'} variant={'sassy'} >
                    Add
                    </Button>
                </form>
            </CustomCard> 
        );
    }
}
 
export default reduxForm({
    form:"add-playlist"
})(CreatePlaylist);