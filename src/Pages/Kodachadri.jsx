import Koda from "../assets/kodachadri.jpg"
import "../Pages.css"

function Kodachadri(){

    return(
        <>
        <div className="page-container">
        <div className="trek-details">
            <img src={Koda} alt="kodachadri-img" width={100} height={100}></img>
           <h5 className="trek-name">Kodachadri Peak Trek</h5>
            <p>1.Kodachadri is one of the popular Western Ghats trekking destinations.</p>
            <p>2.The trail passes through forest, grasslands and streams before reaching the scenic Kudremukh Peak.</p>
            <p>3.The summit offers panoramic view, while Sarvajna Peetha and nearby Hidlumane Falls add  and natural attractions to the trek</p>

            <h4  className="info-thing">Trek Information</h4>
            <p><strong>Location:</strong> Shivamogga, Karnataka</p>
            <p><strong>Difficulty:</strong> Moderate</p>
            <p><strong>Trek Distance:</strong> 10-12km</p> 
            <p><strong>Trek Duration:</strong> 5-6hrs</p>
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
export default Kodachadri;