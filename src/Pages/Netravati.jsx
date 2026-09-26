import Netra from "../assets/netravati.jpg"
function Netravati(){

    return(
        <>
        <div className="page-container">
        <div className="trek-details">
            <img src={Netra} alt="netravathi-img" width={100} height={100}></img>
           <h5 className="trek-name">Netravati  Peak Trek</h5>
            <p>1.Netravati Peak is one of the popular Western Ghats trekking destinations.</p>
            <p>2.The trail passes through forest, open grasslands, rocky sections, misty valleys and mountain veiwpoints .</p>
            <p>3.It is the one of the heightest peak in Karnataka</p>

            <h4  className="info-thing">Trek Information</h4>
            <p><strong>Location:</strong> Chikkamangaluru, Karnataka</p>
            <p><strong>Difficulty:</strong> Moderate</p>
            <p><strong>Trek Distance:</strong> 12-14km</p> 
            <p><strong>Trek Duration:</strong> 5-7hrs</p>
            <p><strong>Best Time:</strong> October to February</p>

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
export default Netravati;