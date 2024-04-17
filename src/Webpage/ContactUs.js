import React, { useState } from 'react'

import './ContactUs.css'

const ContactUs = () => {
    const [values, setValues] = useState({})

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        console.log(values)
    }

    return (
        <div id='contactus' className='contact-container'>
            <div className='left-container'>
                <div className='contact-word1'>
                    get in <span className='stroke-text'>touch</span> with us
                </div>
                <div className='contact-word2'>
                    Please feel free to contact us by phone or email. Or
                    alternatively fill in the form below, and We will get back
                    to you as soon as we can.
                </div>
            </div>
            <div className='right-container'>
                <div className='input-section'>
                    <label htmlFor=''>Full Name</label>
                    <input
                        type='text'
                        name='fullName'
                        onChange={handleChange}
                        value={values.fullName || ''}
                        required
                    />
                </div>
                <div className='input-section'>
                    <label htmlFor=''>Email</label>
                    <input
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={values.email || ''}
                    />
                </div>
                <div className='input-section'>
                    <label htmlFor=''>Phone No.</label>
                    <input
                        type='number'
                        name='phoneNo'
                        onChange={handleChange}
                        value={values.phoneNo || ''}
                    />
                </div>
                <div className='input-section'>
                    <label htmlFor=''>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='3'
                        onChange={handleChange}
                        value={values.message || ''}
                    />
                </div>
                <div className='submit-btn'>
                    <button onClick={() => handleSubmit()}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
