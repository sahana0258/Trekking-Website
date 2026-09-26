import KP from "../assets/kp.jpg"
import "../Pages.css"
function KumaraParvatha(){

    return(
        <>
        <div className="page-container">
        <div className="trek-details">
            <img src={KP} alt="kp-img" width={100} height={100}></img>
            <h5 className="trek-name">Kumara Parvatha Peak Trek</h5>
            <p>1.Kumara Parvatha, also known as Pushpagiri, is a prominent trekking destination in the Western Ghats .</p>
            <p>2.The trail passes through forest, open grasslands, rocky sections, misty valleys and mountain veiwpoints .</p>
            <p>3.It is the 1st heightest peak in Karnataka</p>

            <h4  className="info-thing">Trek Information</h4>
            <p><strong>Location:</strong> Kukke Subramanya, Karnataka</p>
            <p><strong>Difficulty:</strong> Difficult</p>
            <p><strong>Trek Distance:</strong> 25-28km</p> 
            <p><strong>Trek Duration:</strong> 2 days(usually completed over)</p>
            <p><strong>Best Time:</strong> October to May</p>

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
export default KumaraParvatha;