'use client'
import CustomCard from "@/components/ui/CustomCard";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { Field,reduxForm } from "redux-form";
import React  from "react";
import { toast } from "@/ui/Toast";

class CreatePlaylist extends React.Component{
    renderError({error,touched}){
        if(error&&touched){
            toast({
                title:error,
                message:"please add name to your library",
                type:"error",
                
            })
        }
    }

    renderInput = ({input,placeHolder,meta})=>{
        return (
            <div>
                <InputField 
                    variant={'ghost'} 
                    className="w-60" 
                    {...input} 
                    placeHolder={placeHolder}
                >
                </InputField>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues){
        
    }

    render() {
        return ( 
            <>
                <CustomCard header="Create Library">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name={'name'} placeHolder="Name" component={this.renderInput}/>
                        <Field name={'info'} placeHolder="Info" component={this.renderInput}/>
                        <Button size={'lg'} variant={'sassy'} >
                            Add
                        </Button>
                    </form>
                </CustomCard>
               
            </> 

        );
    }
}
 
const validate = (formValues)=>{
    const errors = {};
    if(!formValues.name){
        errors.name = "you have to name your library";
       
    }
    return errors;
}

export default reduxForm({
    form:"add-playlist",
    validate
})(CreatePlaylist);