import React, { useState } from 'react'
import { Parallax } from 'react-parallax';


const About = () => {

  const [articulo, serArticulo] = useState(false);


  const seeMore = () => {



    serArticulo(!articulo)
  }

  const hideClass = `hide ${articulo ? "show" : ""}`


  return (

<section id="aboutPerformance">



<div className="performance"> <span>MAS DE NOSOTROS</span>
<h4>ALEGREGYM</h4>
<aside className="">
<p>En lyftgym, nuestra pasión es ayudarte a alcanzar tu máximo potencial en tu camino hacia un estilo de vida saludable y activo. Nuestro equipo de expertos entrenadores está comprometido en brindarte el apoyo, la orientación y la motivación necesaria para que alcances tus metas de acondicionamiento físico de manera efectiva y segura.
</p>
<p>  "Nuestra misión es inspirar y motivar a las personas a alcanzar sus metas de bienestar físico y mental, proporcionando un entorno acogedor y de apoyo para su transformación personal. .</p>


<p className={hideClass}> ¡Es hora de desbloquear tu máximo potencial en Es hora de desbloquear tu máximo potencial en lyftgym!"


</p>
<button onClick={seeMore}>{articulo ? "Menos": "leer Mas"}</button>
</aside>


</div>



<Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={'https://images.pexels.com/photos/13106582/pexels-photo-13106582.jpeg?auto=compress&cs=tinysrgb&w=1200'}
        bgImageAlt="the dog"
        strength={-200}
        className="gymPic"
    >
        <div style={{ height: '300px' }} />
    </Parallax>
{/* <div className="gymPic"></div> */}

</section>
  )
}

export default About