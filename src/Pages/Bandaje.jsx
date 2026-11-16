import Bdj from "../assets/bandaje.jpg"
import "../Pages.css"
function Bandaje(){
    return(
        <>
        <div className="page-container">
        <div className="trek-details">
            <img src={Bdj} alt="bandaje-img" width={100} height={100}></img>
            <h5 className="trek-name">Bandaje Trek</h5>
            <p>1.Bandaje Falls ia a beautiful waterfall hidden among the forest and grasslands of the Western Ghats</p>
            <p>2.The trek combines beautiful natural landscapes with the historic Ballalarayana Durga Fort</p>
            <p>3.Karnataka Tourism recommends trekking withs an authorised guide because the forest route can be difficult to navigate</p>

            <h4  className="info-thing">Trek Information</h4>
            <p><strong>Location:</strong> Chikkamangaluru, Karnataka</p>
            <p><strong>Difficulty:</strong> Moderate</p>
            <p><strong>Trek Distance:</strong> 6-7km</p> 
            <p><strong>Trek Duration:</strong> 7-8hrs</p>
            <p><strong>Best Time:</strong> September to March</p>

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
export default Bandaje;