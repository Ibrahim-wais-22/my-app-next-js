function Card(){
    return(
    <div className="card">
        <img className="imgCard" src="/workshop.jpg" alt="" />
            <p className="titleCard">title prodact</p>
        <div className="des">
            <div className="container-price">

            <p className="price"> Price <span>2324</span></p>
            <p className="modwl"> Model <span>999998</span></p>
            </div>
            <img className="img-header addButton" src="/add_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
        </div>
    </div>
        
        
    )
}
export default Card