'use client'
import { Field,reduxForm } from "redux-form";
import { useRouter, useSearchParams } from "next/navigation";
import React,{useState}  from "react";
import { useDispatch } from 'react-redux';
import CustomCard from "@/components/ui/CustomCard";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import {setShowLibraryModal} from '@/redux/features/playerSlice';
import { toast } from "@/ui/Toast";


const CreatePlaylist = (props)=>{
    const dispatch = useDispatch();
    const {handleSubmit} = props;
    const handleLibModal = (showModal = false)=>{
        dispatch(setShowLibraryModal(showModal))
    }

    const fetchLibrary = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
    };

    const { data, isLoading } = useSWR(
        `/api/librarys`,
        fetchLibrary,
        { revalidateOnFocus: false }
    );

    const renderError = ({error,touched})=>{
        if(error&&touched){
            toast({
                title:error,
                message:"please add name to your library",
                type:"error",

            })
        }
    } 
    const renderInput = ({input,placeHolder,meta})=>{
        return (
            <div>
                <InputField 
                    variant={'ghost'} 
                    className="w-60" 
                    {...input} 
                    placeHolder={placeHolder}
                >
                </InputField>
                {renderError(meta)}
            </div>
        );
    }
    
    const onSubmit = (value)=>{
        console.log(data);
    }
    
    return ( 
        <CustomCard header="Create Library">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field name={'name'} placeHolder="Name" component={renderInput}/>
                <Button size={'lg'} variant={'accept'}>
                    Add
                </Button>
            </form>
            <Button 
                    size={'lg'} 
                    variant={'err'} 
                    onClick={()=>handleLibModal(false)}
            >
                Decline
            </Button>
        </CustomCard>
    );
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