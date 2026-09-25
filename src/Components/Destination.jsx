import { GiMountainRoad } from "react-icons/gi";
import{Link} from "react-router-dom";
import '../Destination.css'
import Kudremukh from "../assets/kudure.jpg"
import KumaraParvata from "../assets/kumaraparvata.jpg"
import Bandaje from "../assets/bandaje.jpg"
import Netravati from "../assets/netravati.jpg"
import Kodachadri from "../assets/kodachadri.jpg"
import Tadiandamol from "../assets/tadiandamol.jpg"
function Destination(){
    return(
        <>
        <div className="destination-container">
        
      
        <Link to="/destination"className="link">{<GiMountainRoad size={40}/>}TrekKarnataka</Link>
        <h1>Destinations</h1>


        <div className="pop-dd">
            <a href="/populardestination" className="nav-link">Popular Destination</a>
            <a href="/destinationdetails" className="nav-link">Destinations Details</a>
        </div>

        <div className="trek-card">
            <img src={Kudremukh} alt="kudremukh-img" width={100} height={100}></img>
            <div className="card-content">
                <h4>Kudremukha Trek</h4>
                <p>Chikkamangaluru</p>
                <p>₹5999</p>
                <p>Moderate</p>
                <p>14-15km</p>
                <p>7-8hrs</p>
                <Link to="/kudremukh" className="btn">View More</Link> 
            </div>
        </div>

        <div className="trek-card">
            <img src={Bandaje} alt="bandaje-img" width={100} height={100}></img>
            <div className="card-content">
                <h4>Bandaje Trek</h4>
                <p>Chikkamangaluru</p>
                <p>₹5999</p>
                <p>Moderate</p>
                <p>14-15km</p>
                <p>7-8hrs</p>
                <Link to="/Bandajje" className="btn">View More</Link> 
            </div>
        </div>
        <div className="trek-card">
            <img src={KumaraParvata} alt="kumara-img" width={100} height={100}></img>
            <div className="card-content">
                <h4>Kumara Parvatha</h4>
                <p>Kodagu</p>
                <p>₹6999</p>
                <p>Difficult</p>
                <p>20-22km</p>
                <p>14-18hrs</p>
                <Link to="/KumaraParvatha" className="btn">View More</Link>  
            </div>
        </div>

        <div className="trek-card">
            <img src={Netravati} alt="netravati-img" width={100} height={100}></img>
            <div className="card-content">
                <h4>Netravati Peak Trek</h4>
                <p></p>
                <p>₹6999</p>
                <p>Difficult</p>
                <p>20-22km</p>
                <p>14-18hrs</p>
                <Link to="/Netravati" className="btn">View More</Link>
            </div>
        </div>

        <div className="trek-card">
            <img src={Kodachadri}alt="kodachadri-img" width={100} height={100}></img>
            <div className="card-content">
                <h4>Kodachadri</h4>
                <p></p>
                <p>₹6999</p>
                <p>Difficult</p>
                <p>20-22km</p>
                <p>14-18hrs</p>
                <Link to="/Kodachadri" className="btn">View More</Link>
            </div>
        </div>

        <div className="trek-card">
            <img src={Tadiandamol} alt="tadiandamol-img" width={100} height={100}></img>
            <div className="card-content">
                <h4>Tadiandamol</h4>
                <p></p>
                <p>₹6999</p>
                <p>Difficult</p>
                <p>20-22km</p>
                <p>14-18hrs</p>
                <Link to="/Tadiandamol" className="btn">View More</Link>
            </div>
        </div>

        <div className="popular-destination">
            <h5>Popular Destination</h5>
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