import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterProductList } from "../redux/productActions";

const Header =()=>{
    const dispatch = useDispatch()
    const cartData = useSelector((state)=> state.cartData)
    console.log('reading redux store value: ', cartData)
    return(
        <div className="header">
            <Link to="/">
                <h1 className="header-title">
                    Abans Shpooing cart
                </h1>
            </Link>
            <input type="text" className="search-text" placeholder="Search Products..."  
            onChange={(e) => dispatch(filterProductList(e.target.value))}/>
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