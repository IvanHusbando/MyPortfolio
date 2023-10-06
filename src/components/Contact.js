import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import contact data
import { contact } from '../data'

const Contact = () => {
    const form = useRef();

    const sendEmail =  async (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bqx1tih', 'template_3ouit7p', form.current, 'n_jLIkf-UvlH5dnR4')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
      }, (error) => {
          console.log(error.text);
      });

  };

  const handleButtonClick = () => {
    // Get the values of the form fields
    const fieldValue1 = document.getElementById('user_name').value; 
    const fieldValue2 = document.getElementById('user_email').value;
    const fieldValue3 = document.getElementById('subject').value;
    const fieldValue4 = document.getElementById('message').value;
  
    // Check that the fields are filled in
    if (fieldValue1 && fieldValue2 && fieldValue3 && fieldValue4) {
      // Call the function to send the notification
      notify();
    } else {
      toast.error('Please fill in all fields before submitting the form.');
    }
  };
  
  const notify = () => {
    toast("Message sent!"); //Show notification
  };
  
  return (
    <section className='section bg-primary' id='contact'>

        <div className='container mx-auto'>
            {/* section title */}
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title 
                before:content-contact relative 
                before:absolute before:opacity-40 
                before:-top-7 before:-left-40 before:hidden 
                before:lg:block'>
                    Contact me
                </h2>
                <p className='subtitle'>I'm willing to work with you</p>
            </div>

            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                {/*info */}
                <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
                    {contact.map((item, index)=>{
                        const {icon, title, subtitle, description} = item;
                        return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                            <div className='text-accent rounded-sm w-14 h-14 flex items-start
                            justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                {icon}
                            </div>
                            <div>
                                <h4 className='font-body text-xl mb-1'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='text-accent'>{description}</p>
                            </div>
                        </div>
                    })}
                </div>

                {/* form */}
                <form ref={form} onSubmit={sendEmail} className='space-y-8 w-full max-w-[780px]'>
                    <div className='flex gap-8'>
                        <input className='input' name="user_name" type='text' placeholder='Your Name' id="user_name" required/>
                        <input className='input' name="user_email" type='email' placeholder='Your email' id="user_email"required/>
                    </div>
                    <input name="subject" id="subject" type='input' className='input' placeholder='Subject' required/>
                    <textarea name="message" id="message" className='textarea' placeholder='Your Message'required
                    ></textarea>
                    <button onClick={handleButtonClick} type="submit" value="Send" className='btn btn-lg bg-accent hover:bg-accent-hover'>Send Message</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact