import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import "../Contact.css";
function Contact(){
    const [rating,setRating]=useState(0)
    function Clicking(){
        alert("Thank you for your Feedback!")
    }

    return(
        <div className="contact-container">
        <>
    
        <div className="con-folw">

            <h1>Contact Us</h1><br></br>
            <Link to="/phone"><MdAddCall id="phn-icon" size={27} color="darkgreen"/></Link>
            <p id="phn-num">+91 9353103950</p><br></br>

            <Link to="/email"><MdOutlineEmail id="email-icon"size={27} color="darkgreen"/></Link>
            <p id="email-id">trekkarnataka258@gmail.com</p><br></br>

            <h4>Follow Us</h4><br></br>     
            <div className="follow-us">
            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer" ><FaInstagramSquare className="iyf-icon" size={35} color="darkgreen"/></a>
            <a href="https://www.youtube.com/" target="_balnk" rel="noopener noreferrer"><FaYoutube className="iyf-icon" size={35} color="darkgreen" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopner noreferrer"><FaFacebookSquare  className="iyf-icon" size={35} color="darkgreen" /></a>
            </div>
        </div>

        <div classsName="feedback-form">
            <h4>Feedback</h4><br></br>
            <form id="form">
                <label>Name</label>
                <input type="name" className="placeholder" placeholder=" Enter your name"></input><br></br>

                <label>Email</label>
                <input type="email" className="placeholder" placeholder=" Enetr your email"></input><br></br>
                
                <label>Phone Number</label>
                <input type="number" className="placeholder" placeholder=" Enter your Phone number"></input><br></br>
                <label>Rating</label>
                <div>
                    {
                        [1,2,3,4,5].map((star)=>(
                            <button type="button" key={star} onClick={()=>setRating(star)}>
                            {star<=rating ? <RiStarSFill />:<RiStarSLine />} 
                            </button>

                        ))
                    }
                </div><br></br>
            
                
                <label>Message</label>
                <textarea rows="4" cols="20" className="placeholder" placeholder=" Write your feedback"></textarea><br></br>

                <button type="submit" id="btn"onClick={Clicking}>Submit</button>&nbsp;&nbsp;
                <button type="reset" id="rst">Reset</button>



            </form>
        </div>  
        
        

        </>
        </div>

    )
}
export default Contact;