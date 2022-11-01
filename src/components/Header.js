import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header =()=>{
    const cartData = useSelector((state)=> state.cartData)
    console.log('reading redux store value: ', cartData)
    return(
        <div className="header">
            <Link to="/">
                <h1 className="header-title">
                    Abans Shpooing cart
                </h1>
            </Link>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{cartData.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
                </div>
            </Link>
        </div>
    )
}

export default Header;