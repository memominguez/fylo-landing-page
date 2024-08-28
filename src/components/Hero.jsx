import { useState } from "react";
import illustration1 from "../assets/images/illustration-1.svg";

export function Hero() {
  // const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);  

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      setError("Email is required");
      setSuccess("")
      handleErrorTimeout();
      return
    } else if (!emailRegex.test(email)) {
      setError("Invalid email address");
      setSuccess("");
      handleErrorTimeout();
      return
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    if (!error) {     
      setSuccess("Please check your email");
      setTimeout(() => {
        setSuccess("");
        setEmail("");
      }, 3000);
     
    } else {
      setSuccess("")
      return
     //handleErrorTimeout()      
    }
  }; 

  const handleErrorTimeout = () => {   
    setTimeout(() => {
      setError("");        
    }, 3000);
  };


  return (
    <section className="w-[327px] h-fit mx-auto mt-24 flex flex-col 2xl:w-[1280px] 2xl:flex-row-reverse 2xl:h-[474px]">
      <div className="w-[304px] h-[225px] mx-auto 2xl:w-[50%]">
        <img
          src={illustration1}
          alt="Illustration-1"
          className="w-full object-cover"
        />
      </div>

      <div className="2xl:w-[50%]">
        <h1 className="w-[320px] mx-auto text-2xl font-raleway font-bold text-slate-700 text-center mt-8 2xl:w-[627px] 2xl:mx-0 2xl:mt-16 2xl:text-[40px] 2xl:text-left 2xl:leading-[52px]">
          All your files in one secure location, accessible anywhere
        </h1>
        <p className="w-[296px] mx-auto text-sm font-opensans text-center mt-6 2xl:w-[585px] 2xl:mx-0 2xl:text-base 2xl:text-left">
          Fylo stores yoour most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[304px] h-[40px] mx-auto border border-gray-700 mt-5 ps-2 2xl:w-[320px] 2xl:h-[45px] 2xl:mr-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />        

          <button className="w-[304px] h-[40px] mx-auto mt-4 bg-br-blue hover:bg-blue-500 text-white font-raleway text-sm font-bold 2xl:w-[200px] 2xl:h-[45px]">
            Get Started
          </button>
        </form>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && !error && <p className="text-green-500 text-sm">{success}</p>}
      </div>
    </section>
  );
}

export default Hero;
