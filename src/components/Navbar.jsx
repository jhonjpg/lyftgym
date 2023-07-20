import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';



const Navbar = () => {



  const [toggleOn, settoggleOn] = useState(false)

  const [menu, setmenu] = useState(true);
  const [menuDos, setmenuDos] = useState(false);


  const responsiveClass = `ulNvResponsive ${menuDos ? "ulNvResponsive active" : ""}`

  
  const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`
  const navi = `nav ${toggleOn ? 'navOpen' : ''} ${toggleOn ? 'nav' : ''}`;
  
  
  const toggleMenu = () => {
  
    settoggleOn(!toggleOn)
  
  }
  
  
const hideMenu = () => {
  settoggleOn(false);
};


const reponsiveMenu = () => {



  setmenuDos(!menuDos)
}


const handleScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  })

}

const change = (e) => {

  if (window.scrollY >= 200) {

    setmenu(false)
  } else {
    setmenu(true)

  }


}

window.addEventListener("scroll", change)





  return (


    <>


    {/* phone Nav */}
<nav className={menu ? "nav " : "nav active"} >
<div className={navi}>
<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}



</div>
 
    
     


       <div className="logo"></div>



       <ul className={toggle} >


<li className="nav-item"  > 
< ScrollLink
to="journey"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
onClick={hideMenu}

> Inicio
</ScrollLink>
</li>
             
     <li className="nav-item" > 
     < ScrollLink
to="aboutPerformance"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item" 
onClick={hideMenu}
> Nosotros
</ScrollLink>
</li>
     
     <li className="nav-item" > 
     < ScrollLink
to="whyUs"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
onClick={hideMenu}
>  Porque Nosotros?
</ScrollLink>
</li>


     <li className="nav-item"> < ScrollLink
to="prices"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
onClick={hideMenu}
>  Precios</ScrollLink></li>
     
     
     <li className="nav-item"> < ScrollLink
to="carouselGalllery"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
onClick={hideMenu}
>  Galeria</ScrollLink></li>


     <li className="nav-item"> < ScrollLink
to="trainer"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
onClick={hideMenu}
>  Entrenadores</ScrollLink></li>


     <li className="nav-item"> < ScrollLink
to="contact"
smooth={true}
duration={100}
offset={-70} // Ajusta el valor según el tamaño de tu Navbar
spy={true}
exact="true"
className="nav-item"
onClick={hideMenu}
>  Contacto</ScrollLink></li>




   </ul>

   </div>

     </nav>











{/* other device */}


<div className={menu ? "devices " : "devices active"}>


<div className="log"><img src="../public/gymmlogo.jpg" alt=""  /></div>




    <ul className="">
    <li className="nav-item"> < ScrollLink
  to="journey"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item" > Inicio</ScrollLink></li>
                 
         <li className="nav-item"> < ScrollLink
  to="aboutPerformance"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item" > Nosotros</ScrollLink></li>
         
         <li className="nav-item"> < ScrollLink
  to="whyUs"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item">  Porque Nosotros?</ScrollLink></li>


         <li className="nav-item"> < ScrollLink
  to="prices"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item">  Precios</ScrollLink></li>
         
         
         <li className="nav-item"> < ScrollLink
  to="carouselGalllery"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item">  Galeria</ScrollLink></li>


         <li className="nav-item"> < ScrollLink
  to="trainer"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item">  Entrenadores</ScrollLink></li>


         <li className="nav-item"> < ScrollLink
  to="contact"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item">  Contacto</ScrollLink></li>




       </ul>



     </div>




    </>

    )
}

export default Navbar