import Tadiandamol from "../assets/tadiandamol.jpg"
function Tadiandamol(){
    return(
        <>
        <div className="trek-details">
            <img src={Tadiandamol} alt="kudremukh-img" width={100} height={100}></img>
            <h5>Kudremukh Trek</h5>
            <p>Kudremukh is one of the beautifull trekking destinations in Karnataka, surrounded by green mountains and forest</p>

            <h6>Trek Information</h6>
            <p>Location: Chikkamangaluru, Karnataka</p>
            <p>Difficulty: Moderate</p>
            <p>Distance: </p> 
            <p>Best Time: October to Frebruary</p>

            <h6>Thing to Carry</h6>
            <ul>
                <li>Water bottle</li>
                <li>Trekking Shoes</li>
                <li>First-aid kit</li>
                <li>Snacks</li>
            </ul>           
        </div>
        </>
    )
}
export default Tadiandamol;