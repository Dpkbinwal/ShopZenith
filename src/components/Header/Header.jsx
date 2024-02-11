import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { loginWithRedirect, logout , user, isAuthenticated, isLoading } = useAuth0();
 
  const {cartCount} =useContext(Context);
  
  const navigate =useNavigate();
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1000) {
      setScrolled(true);
    } else {
      setScrolled(false);
      // document.querySelector('.header').classList.remove('sticky');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>navigate("/about")} >About</li>
            <li onClick={()=>navigate("/category/1")}>Category</li>
          </ul>

          <div className="center" onClick={()=>navigate("/")} >ShopZenith</div>
          <div className="right">
            <TbSearch  onClick={()=> setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=> setShowCart(true)}>
              <CgShoppingCart />
             {!!cartCount && <span>{cartCount}</span>}
            </span>
            
            {
              isAuthenticated ?<button  className="login-btn"  onClick={() => <img src={user.picture} alt={user.name} /> && logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>:  <button className="login-btn" onClick={() => loginWithRedirect()}>LogIn</button>

            }
            
          </div>
        </div>
      </header>
     {showCart && <Cart setShowCart={setShowCart} />}
     {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
