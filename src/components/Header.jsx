/* eslint-disable no-unused-vars */
import $ from 'jquery';
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {  faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

$(document).ready(() => {
    let navButton = $(".nav-button");
    let navLinks = $(".nav-links");
    navButton.on("click", function(e){
        e.stopPropagation();
        navLinks.slideToggle();
  });

    

  $(document).on("click", () => {
    if ($(window).width() <= 960) {
        navLinks.slideUp();
        // Additional code to execute at 960px width
    }
});
  
});







function Header() {
  return (
    <div>
      <header>
        <nav className="navbar">
        
          <button className="nav-button"><i className="bi bi-list"></i></button>
        

        
          <div className="nav-links">
              <ul className="my-2">
                <li className="hide"><Link to="/" className="navv"><i className="bi bi-chevron-left"></i><i className="bi bi-chevron-right"></i></Link></li>
                <li className=""><Link to="/ChmodCalculator" className="bold"><i className="bi bi-chevron-right bold"></i> Chmod Calculator</Link></li>
                <li className=""><Link to="/CrontabGenerator" ><i className="bi bi-calendar4"></i> Crontab Generator</Link></li>
                <li className=""><Link to="/UnixStampConverter" ><i className="bi bi-clock"></i> Unix Stamp Converter</Link></li>
                <li className=""><Link to="/PasswordGenerator" ><i className="bi bi-calendar4"></i> Password Generator</Link></li>
              </ul>
          </div>
          <div className="github-btn">
              <Link to="https://github.com/henryozoebuka/web-tools"><i className="bi bi-github pr-1"></i>   GitHub</Link>
          </div>
        
        </nav>
      </header>




    </div>
  );
}

export default Header;

