import React from 'react'
import { useForm } from 'react-hook-form';
import {createUser} from "../services/opretions/userApi"

const CartForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data, e) => {
        // e.preventDefault();

        // const formData = new FormData();
        // formData.append("FirstName", data.FirstName)
        // formData.append("LastName", data.LastName)
        // formData.append("Address", data.Address)
        // formData.append("County", data.County)
        // formData.append("Postcode", data.Postcode)
        // formData.append("Phone", data.Phone)
        // formData.append("Email", data.email)
        // formData.append("Notes", data.Notes)

        // console.log("formData : ", data);
        
        
        const formData = getValues();
        console.log("formData : ", data);
        const result = await createUser(formData);

        console.log("Result in CartForm : ", result);

        // e.target.reset();
    }
    return (

        <div>
            <form action="" className=' flex flex-col gap-5'>
                <div className=' flex justify-between gap-10'>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='FirstName'><span>First Name</span><sup>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='FirstName' {...register("FirstName", { required: true })} />
                    </div>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='LastName'><span>Last Name</span><sup>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='LastName' {...register("LastName", { required: true })} />
                    </div>
                </div>
                <div className=' w-full flex flex-col'>
                    <label htmlFor='Address'><span>Street Address</span><sup>*</sup> </label>
                    <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Address' {...register("Address", { required: true })} />
                </div>
                <div className=' w-full flex flex-col'>
                    <label htmlFor='County'><span>County (optional)</span> </label>
                    <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='County' {...register("County")} />
                </div>
                <div className=' flex justify-between gap-10'>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='Postcode'><span>Postcode</span><sup>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Postcode' {...register("Postcode", { required: true })} />
                    </div>
                    <div className=' w-full flex flex-col'>
                        <label htmlFor='Phone'><span>Phone </span><sup>*</sup> </label>
                        <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Phone' {...register("Phone", { required: true })} />
                    </div>
                </div>
                <div className=' w-full flex flex-col'>
                    <label htmlFor='Email'><span>Email Address </span><sup>*</sup> </label>
                    <input className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Email' {...register("Email", { required: true })} />
                </div>
                <div className=' w-full flex flex-col'>
                    <label htmlFor='Notes'><span>Order notes (optional) </span> </label>
                    <textarea className=' w-[100%] bg-gray-200 text-gray-600 h-9' id='Notes' {...register("Notes")} />
                </div>



                <div className=' flex justify-center'>
                    <button onClick={handleSubmit(onSubmit)} className=' bg-blue-500 text-gray-100 font-semibold px-3 py-1 rounded'>
                        Buy Know
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CartForm
