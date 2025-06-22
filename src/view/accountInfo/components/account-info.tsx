"use client"
import { Formik, Form, FormikProps } from 'formik';

import React from 'react'

export default function AccountInfo() {
    return (

        <Formik
            initialValues={{
                email: "",
                password: "",
                firstname: "",
                lastname: "",

            }}
            // validationSchema={signUpSchema}
            onSubmit={async (values) => {
                try {
                    // await signUpService(values);
                    // Notification("SignUp success","success")

                    // Swal.fire({
                    //     icon: "success",
                    //     title: "Signup Success",
                    //     showConfirmButton: false,
                    //     timer: 2000
                    // })
                } catch (err) {
                    const error = err as any;
                    //  Notification(error.message,"error")
                    //  enqueueSnackbar(error.message,{
                    //     variant:"error",
                    //     anchorOrigin:{
                    //         horizontal:"right",
                    //         vertical:"top"}
                    //  })

                    // Swal.fire({ 
                    //     icon: "error",
                    //  title: error.message,
                    //  showConfirmButton: false, 
                    //  timer: 2000, 
                    // })
                }
                console.log(values)
            }}

        >
            {(props) => {
                const { values, errors, touched, handleChange } = props;

                return (
                   <div className='grid lg:grid-cols-1 sm:grid-cols-3'>
                     <Form>
                        <h1 className=' mt-10 px-10 text-red-400 font-bold lg:text-[45px] text-2xl '>Account Information
                        </h1>
                        <hr className="border-red-400" />
                        <div className='mt-10 ml-10'>

                            <div className='flex  gap-5  grid lg:grid-cols-3 grid-cols-1'>
                                <div>
                                    <label>Email  :</label>
                                   <div className='mt-1'>
                                    <input
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        className="px-20 border border-red-300 p-2 rounded"
                                    />
                                    {touched.email && errors.email ? (
                                        <div className='text-red-500'>{errors.email}</div>
                                    ) : null}
                                    </div>
                                </div>





                                <div>
                                    <label>Password  :</label>
                                   <div className='mt-1'>
                                    <input
                                        type="type"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        className="px-20 border border-red-300 p-2 rounded"
                                    />

                                    {touched.password && errors.password ? (
                                        <div className='text-red-500'>{errors.password}</div>
                                    ) : null}
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className='flex gap-5 grid lg:grid-cols-3 grid-cols-1'>
                            <div>
                                <label>FirstName  :</label>
                            <div className='mt-1'>

                            <input
                                type="text"
                                name="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                className="px-20 border border-red-300 p-2 rounded"

                            />

                            {touched.firstname && errors.firstname ? (
                                <div className='text-red-500'>{errors.firstname}</div>
                            ) : null}
                            </div>
                            </div>




                           <div>
                             <label>LastName : </label>
                          <div className='mt-1'>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    name="lastname"
                                    onChange={handleChange}
                                    value={values.lastname}
                                    className="px-20 border border-red-300 p-2 rounded"
                                />
                                {touched.lastname && errors.lastname ? (
                                    <div className='text-red-500'>{errors.lastname}</div>
                                ) : null}
                                </div>
                            </div>
                           </div>
                           </div>
                           <br />

                           <div className='flex gap-5 grid lg:grid-cols-3 grid-cols-1'>
                            <div>
                                <label>Address  :</label>
                            <div className='mt-1'>

                            <input
                                type="text"
                                name="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                className="px-20 border border-red-300 p-2 rounded"

                            />

                            {touched.firstname && errors.firstname ? (
                                <div className='text-red-500'>{errors.firstname}</div>
                            ) : null}
                            </div>
                            </div>




                           <div>
                             <label>Cell Phone : </label>
                          <div className='mt-1'>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    name="lastname"
                                    onChange={handleChange}
                                    value={values.lastname}
                                    className="px-20 border border-red-300 p-2 rounded"
                                />
                                {touched.lastname && errors.lastname ? (
                                    <div className='text-red-500'>{errors.lastname}</div>
                                ) : null}
                                </div>
                            </div>
                           </div>
                           </div>
                           <br />
                           <div className='flex gap-5 grid lg:grid-cols-3 grid-cols-1'>
                            <div>
                                <label>City  :</label>
                            <div className='mt-1'>

                            <input
                                type="text"
                                name="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                className="px-20 border border-red-300 p-2 rounded"

                            />

                            {touched.firstname && errors.firstname ? (
                                <div className='text-red-500'>{errors.firstname}</div>
                            ) : null}
                            </div>
                            </div>




                           <div>
                             <label>Country : </label>
                          <div className='mt-1'>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    name="lastname"
                                    onChange={handleChange}
                                    value={values.lastname}
                                    className="px-20 border border-red-300 p-2 rounded"
                                />
                                {touched.lastname && errors.lastname ? (
                                    <div className='text-red-500'>{errors.lastname}</div>
                                ) : null}
                                </div> 
                           </div>
                           </div>
                           <br />


{/* <div className='flex gap-5 grid lg:grid-cols-3 grid-cols-1'>
                            <div>
                                <label>Company/Organisation  :</label>
                            <div className='mt-1'>

                            <input
                                type="text"
                                name="firstname"
                                onChange={handleChange}
                                value={values.firstname}
                                className="px-20 border border-red-300 p-2 rounded"

                            />

                            {touched.firstname && errors.firstname ? (
                                <div className='text-red-500'>{errors.firstname}</div>
                            ) : null}
                            </div>
                            </div>




                           <div>
                             <label>Website : </label>
                          <div className='mt-1'>
                            <div className='mt-1'>
                                <input
                                    type="text"
                                    name="lastname"
                                    onChange={handleChange}
                                    value={values.lastname}
                                    className="px-20 border border-red-300 p-2 rounded"
                                />
                                {touched.lastname && errors.lastname ? (
                                    <div className='text-red-500'>{errors.lastname}</div>
                                ) : null}
                                </div>
                            </div>
                           </div>g
                           </div> */}
                               </div>
                            <br /><br />
                            <button className=' mt-5 px-5 py-1 bg-red-400 text-white rounded text-[16px]' type="submit">Signup</button>


                    
                        </div>
                    </Form>
                   </div>
                );
            }}


        </Formik>
    )
}

