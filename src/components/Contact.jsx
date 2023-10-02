import React from 'react'

function Contact() {
    return (
        <>
            <h4>FAQs:</h4>
            <div className='contact'>
                <form>
                    <input type='text' name='names' placeholder='Full Names...' />
                    <input type='email' name='names' placeholder='Example@mail.com...' />
                    <textarea placeholder='Your Message...'></textarea> <br />
                    <button type='submit'>Send</button>
                </form>

            </div>
        </>
    )
}

export default Contact
