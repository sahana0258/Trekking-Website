import { GiMountainRoad } from "react-icons/gi";
import{Link} from "react-router-dom";
import '../Destination.css'
import Kudre from "../assets/kudre.jpg"
import Bdj from "../assets/bandaje.jpg"
import KP from "../assets/kp.jpg"
import Netra from "../assets/netravati.jpg"
import Koda from "../assets/kodachadri.jpg"
import Tadi from "../assets/tadiandamol.jpg"
function Destination(){
    return(
        <>
        <div className="destination-container">
         
        <div className="trek-card">
            <img src={Kudre} alt="kudremukh-img" width={100} height={100}></img>
            <div className="card-content">
                <h4 className="h4">Kudremukha Trek</h4>
                <p className="content-list">Chikkamangaluru</p>
                <p className="content-list">₹5999</p>
                <p className="content-list">Moderate</p>
                <p className="content-list">20-22km</p>
                <p className="content-list">6-8hrs</p>
                <Link to="/kudremukh" className="btn">View More</Link> 
            </div>
        </div>

        <div className="trek-card">
            <img src={Bdj} alt="bandaje-img" width={100} height={100}></img>
            <div className="card-content">
                <h4 className="h4">Bandaje Trek</h4>
                <p className="content-list">Chikkamangaluru</p>
                <p className="content-list">₹4999</p>
                <p className="content-list">Moderate</p>
                <p className="content-list">6-7km</p>
                <p className="content-list">7-8hrs</p>
                <Link to="/bandaje" className="btn">View More</Link> 
            </div>
        </div>
        <div className="trek-card">
            <img src={KP} alt="kp-img" width={100} height={100}></img>
            <div className="card-content">
                <h4 className="h4">Kumara Parvatha</h4>
                <p className="content-list">Kukke Subramanya</p>
                <p className="content-list">₹6999</p>
                <p className="content-list">Difficult</p>
                <p className="content-list"> 25-28km</p>
                <p className="content-list">14-18hrs</p>
              
                <Link to="/kumaraparvatha" className="btn">View More</Link>  
            </div>
        </div>

        <div className="trek-card">
            <img src={Netra} alt="netravati-img" width={100} height={100}></img>
            <div className="card-content">
                <h4 className="h4">Netravati Peak Trek</h4>
                <p className="content-list">Chikkamangaluru</p>
                <p className="content-list">₹4999</p>
                <p className="content-list">Moderate</p>
                <p className="content-list">12-14km</p>
                <p className="content-list">5-7hrs</p>
                <Link to="/netravati" className="btn">View More</Link>
            </div>
        </div>

        <div className="trek-card">
            <img src={Koda}alt="kodachadri-img" width={100} height={100}></img>
            <div className="card-content">
                <h4 className="h4">Kodachadri</h4>
                <p className="content-list">Shivamogga</p>
                <p className="content-list">₹4599</p>
                <p className="content-list">Moderate</p>
                <p className="content-list">10-12km</p>
                <p className="content-list">5-6hrs</p>
                <Link to="/kodachadri" className="btn">View More</Link>
            </div>
        </div>

        <div className="trek-card">
            <img src={Tadi} alt="tadiandamol-img" width={100} height={100}></img>
            <div className="card-content">
                <h4 className="h4">Tadiandamol</h4>
                <p className="content-list"> Kodagu(Coorg)</p>
                <p className="content-list">₹3999</p>
                <p className="content-list" >Moderate</p>
                <p className="content-list">~14km</p>
                <p className="content-list">5-7hrs</p>
                <Link to="/tadiandamol" className="btn">View More</Link>
            </div>
        </div>

        <div className="popular-destination">
            <h5 id="PD">Popular Destination</h5>
            <div className="pd-content">
            <Link to="/kumaraparvatha" className="popular-trek">Kumara Parvatha trek</Link>
            <Link to="/kudremukh" className="popular-trek">Kudremukh Peak trek</Link>
            <Link to="/netravati" className="popular-trek">Netravati Peak trek</Link>
            <Link to="/kodachadri" className="popular-trek">Kodachadri trek</Link>
            </div>
        </div> 


        
        </div>
        </>

    )
}
export default Destination;