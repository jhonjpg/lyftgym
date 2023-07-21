import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';



const Navbar = () => {


  const [linkColor, setLinkColor] = useState('white');








  const [toggleOn, settoggleOn] = useState(false)

  const [menu, setmenu] = useState(true);
  const [menuDos, setmenuDos] = useState(false);

                        // links//
  const [linkColorInicio, setLinkColorInicio] = useState('white');
  const [linkColorNosotros, setLinkColorNosotros] = useState('white');
  const [linkColorWhy, setLinkColorWhy] = useState('white');
  const [linkColorPrices, setLinkColorPrices] = useState('white');
  const [linkColorGaleria, setLinkColorGaleria] = useState('white');
  const [linkColorTrainer, setLinkTrainer] = useState('white');
  const [linkColorContact, setLinkContact] = useState('white');






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


// const handleScroll = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'auto'
//   })

// }

const change = (e) => {

  if (window.scrollY >= 200) {

    setmenu(false)
  } else {
    setmenu(true)

  }

  console.log(window.scrollY)



  if (window.scrollY < 530) {
    setLinkColorInicio('yellow');

  } else {
    setLinkColorInicio('white');
  }

  if (window.scrollY > 530 &&  window.scrollY <= 1125) {
    setLinkColorNosotros('yellow');
  } else {
    setLinkColorNosotros('white');
  }



  if (window.scrollY > 1125 &&  window.scrollY <= 1600) {
    setLinkColorWhy('yellow');
  } else {
    setLinkColorWhy('white');
  }



  if (window.scrollY > 1600 &&  window.scrollY <= 2278) {
    setLinkColorPrices('yellow');
  } else {
    setLinkColorPrices('white');
  }



  if (window.scrollY > 2278 &&  window.scrollY <= 2710) {
    setLinkColorGaleria('yellow');
  } else {
    setLinkColorGaleria('white');
  }



  if (window.scrollY > 2710 &&  window.scrollY <= 3082) {
    setLinkTrainer('yellow');
  } else {
    setLinkTrainer('white');
  }


  if (window.scrollY > 3082 &&  window.scrollY <= 3400) {
    setLinkContact('yellow');
  } else {
    setLinkContact('white');
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
style={{ color: linkColor }}


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
style={{ color: linkColor }}
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
style={{ color: linkColor }}
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
style={{ color: linkColor }}
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
style={{ color: linkColor }}
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
style={{ color: linkColor }}
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
style={{ color: linkColor }}
>  Contacto</ScrollLink></li>




   </ul>

   </div>

     </nav>











{/* other device */}


<div className={menu ? "devices " : "devices active"}>


<div className="log"><img src="gymmlogo.jpg" alt=""  /></div>




    <ul className="">
    <li className="nav-item"> < ScrollLink
  to="journey"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item"
  style={{ color: linkColorInicio }}
  > Inicio</ScrollLink></li>
                 
         <li className="nav-item"> < ScrollLink
  to="aboutPerformance"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item"
  style={{ color: linkColorNosotros }} > Nosotros</ScrollLink></li>
         
         <li className="nav-item"> < ScrollLink
  to="whyUs"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item"
  style={{ color: linkColorWhy }}>  Porque Nosotros?</ScrollLink></li>


         <li className="nav-item"> < ScrollLink
  to="prices"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item"
  style={{ color: linkColorPrices }}>  Precios</ScrollLink></li>
         
         
         <li className="nav-item"> < ScrollLink
  to="carouselGalllery"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item"
  style={{ color: linkColorGaleria }}>  Galeria</ScrollLink></li>


         <li className="nav-item"> < ScrollLink
  to="trainer"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item"
  style={{ color: linkColorTrainer }}>  Entrenadores</ScrollLink></li>


         <li className="nav-item"> < ScrollLink
  to="contact"
  smooth={true}
  duration={100}
  offset={-70} // Ajusta el valor según el tamaño de tu Navbar
  spy={true}
  exact="true"
  className="nav-item"
  style={{ color: linkColorContact }}>  Contacto</ScrollLink></li>




       </ul>



     </div>




    </>

    )
}

export default Navbar