import { useSelector } from "react-redux";

const Header =()=>{
    const cartData = useSelector((state)=> state.cartData)
    console.log('reading redux store value: ', cartData)
    return(
        <div className="header">
            <div className="cart-div">
                <span>{cartData.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
            </div>
        </div>
    )
}

export default Header;