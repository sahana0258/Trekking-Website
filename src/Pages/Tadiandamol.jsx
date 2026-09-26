import Tadi from "../assets/tadiandamol.jpg"
function Tadiandamol(){
    return(
        <>
        <div className="page-container">
        <div className="trek-details">
            <img src={Tadi} alt="tadiandamoi-img" width={100} height={100}></img>
            <h5 className="trek-name">Tadiandamol Peak Trek</h5>
            <p>1.Tadiandmol is one of the popular Western Ghats trekking destinations.</p>
            <p>2.The trail passes through forest, grasslands and streams before reaching the scenic Kudremukh Peak.</p>
            <p>3.The trek starts around Nalaknad Palace and final summit viewpoint is surrounding Kodagu hills from near the peak</p>

            <h4 className="info-thing">Trek Information</h4>
            <p><strong>Location:</strong> Kodagu(Coorg), Karnataka</p>
            <p><strong>Difficulty:</strong> Moderate</p>
            <p><strong>Trek Distance:</strong> ~14km</p> 
            <p><strong>Trek Duration:</strong> 5-7hrs</p>
            <p><strong>Best Time:</strong> October to Fabruary</p>

            <h4 className="info-thing">Thing to Carry</h4>
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
export default Tadiandamol;