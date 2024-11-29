import { use } from 'framer-motion/m';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "54e6b37a-32d0-4ab7-8cee-eab3d942820e");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("");
          toast.success("Form Submitted Successfully")
          event.target.reset();
          navigate('/')
        } else {
          console.log("Error", data);
          toast.error(data.message)
          setResult("");
        }
       
      };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-orange-300' id='Contact'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'><Link to='/'>Contact </Link> <span
        className='underline underline-offset-4 decoration-1 under font-light'>with us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.</p>


        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>Your Name
                <input type="text" name="name" id="name" placeholder='name' required
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2'/>
                </div>

                <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                <input type="email" name="email" id="name" placeholder='Email' required
                className='w-full border border-gray-300 rounded py-3 px-4 mt-2'/>
                </div>
            </div>
            <div>
                Message 
                <textarea name="message" id="message" placeholder='message' required className='
                w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48'></textarea>
            </div>
            <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{
                result ? result : "Send Message"}</button>
        </form>
    </div>
  )
}

export default Contact