import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import $ from 'jquery';
import Cart from './Pages/Cart';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Link className="nav-link" to="/" exact>
        <div className="navbar-brand navbar-logo">
          <a href="#" className="logo">
            <img src="../img/logo.png" alt="Logo de cupcakes" width="60px" height="60px"/>
          </a>
       
        </div>
      </Link>  
      
    
      <button className="navbar-toggler" onClick={ function(){
          setTimeout(function(){ animation(); });
        }
      }
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>
 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink activeClassName='category' className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/tortas">
                Tortas
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/cupcakes" >
                Cupcakes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/popcakes" >
                Popcakes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/contact" >
                Contact Us
              </NavLink>
            </li>
            <Link className="nav-link" to="/cart" exact>
              <CartWidget className="item-count" numOfItems={4}/>
            </Link>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;