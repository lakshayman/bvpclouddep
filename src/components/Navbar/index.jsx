import "./index.css";
import logo from "../../assets/bvplogo.png";

export default () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark Navbar-Desktop">
            <img className='Navbar-Desktop__logo' src={logo} alt="the fuel media logo" />
            <button className="navbar-toggler" type="button" id="hamburger_menu_button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto Navbar__items text-right">
                    <li className='Navbar_Desktop__MI'><div className='Navbar-Desktop__menu-item' onClick={()=>{document.getElementById('intro').scrollIntoView({behavior: 'smooth'});}}>Introduction</div></li>
                    <li className='Navbar_Desktop__MI'><div className='Navbar-Desktop__menu-item' onClick={()=>{document.getElementById('faculty').scrollIntoView({behavior: 'smooth'});}}>Faculty</div></li>
                    <li className='Navbar_Desktop__MI'><div className='Navbar-Desktop__menu-item' onClick={()=>{document.getElementById('training').scrollIntoView({behavior: 'smooth'});}}>Training</div></li>
                    <li className='Navbar_Desktop__MI'><div className='Navbar-Desktop__menu-item' onClick={()=>{document.getElementById('student').scrollIntoView({behavior: 'smooth'});}}>Student</div></li>
                </ul>
            </div>
        </nav>
  );
}
