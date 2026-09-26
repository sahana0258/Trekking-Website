import Kudre from "../assets/kudre.jpg"
import "../Pages.css"
function Kudremukh(){

    return(
        <>
        <div className="page-container">
        <div className="trek-details">
            <img src={Kudre} alt="kudremukh-img" width={100} height={100}></img>
            <h5 className="trek-name">Kudremukh Trek</h5>
            <p>1.Kudremukh is one of the popular Western Ghats trekking destinations.</p>
            <p>2.The trail passes through forest, grasslands and streams before reaching the scenic Kudremukh Peak.</p>
            <p>3.It is the 2nd heightest peak in Karnataka</p>

            <h4  className="info-thing">Trek Information</h4>
            <p><strong>Location:</strong> Chikkamangaluru, Karnataka</p>
            <p><strong>Difficulty:</strong> Moderate</p>
            <p><strong>Trek Distance:</strong> 20-22km</p> 
            <p><strong>Trek Duration:</strong> 6-8hrs</p>
            <p><strong>Best Time:</strong> October to March</p>

            <h4  className="info-thing">Thing to Carry</h4>
            <ul id="list">
                <li>Water bottle</li>
                <li>Trekking Shoes</li>
                <li>First-aid kit</li>
                <li>Snacks</li>
                <li>ID proof</li>
            </ul>           
        </div>
        </div>
        </>
    )
}
export default Kudremukh;