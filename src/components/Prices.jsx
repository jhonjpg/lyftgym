import React from 'react'
import SlickCarousel from '../components/SlickCarousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Prices = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
<>


<section id="prices">
<h3 className="w-100 text-center fs-4">Primera entrada gratis</h3>
    <h4 className="w-100 text-center fs-1 ">PRECIOS</h4>




    </section>



    <div className="phonePrices">


<Slider {...settings}>
<div className="basic">

<strong>Basic</strong>

<h6>$39/month</h6>

<ul className="w-100 ">

<li><i className="bi bi-check-circle-fill"></i> Acceso completo a todas las áreas de entrenamiento del gimnasio.
</li>
<li><i className="bi bi-check-circle-fill"></i> Participación en clases grupales básicas como aeróbicos, yoga y pilates.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Uso de las instalaciones de vestuarios y lockers.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Acceso a equipos de cardio y máquinas básicas de musculación.
 </li>

 <li><i className="bi bi-check-circle-fill"></i>  Asesoramiento inicial con un entrenador personal para establecer metas.

 </li>



</ul>

</div>

<div className="plus">


<strong>Plus</strong>

<h6>$59/month</h6>

<ul>

<li><i className="bi bi-check-circle-fill"></i> Todos los beneficios de la categoría "Basic".
</li>
<li><i className="bi bi-check-circle-fill"></i> Acceso a clases grupales avanzadas como HIIT, entrenamiento funcional, spinning, etc.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Uso de zonas especiales como área de peso libre y entrenamiento de resistencia.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Acceso a un mayor número de horarios de clases grupales.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Sesiones de asesoramiento con un entrenador personal para el seguimiento y ajuste de objetivos.
 </li>
</ul>

</div>

<div className="vip ">


<strong>VIP</strong>

<h6>$99/month</h6>

<ul>

<li><i className="bi bi-check-circle-fill"></i> Todos los beneficios de las categorías "Basic" y "Plus".
</li>
<li><i className="bi bi-check-circle-fill"></i> Acceso ilimitado a todas las clases grupales y actividades del gimnasio.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Uso de zonas exclusivas, como el spa, sauna, baño de vapor, y áreas de relajación.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Programa de entrenamiento personalizado y seguimiento continuo con un entrenador de élite.
 </li>
<li><i className="bi bi-check-circle-fill"></i> Descuentos especiales en servicios adicionales como masajes, nutrición y entrenamiento especializado.
 </li>
 

</ul>

</div>


</Slider>
</div>


<div className="devicePrices">


<div className="basic">

<strong>Basic</strong>

<h4>$39/month</h4>

<ul className="w-100 ">

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>

</ul>

</div>

<div className="plus">


<strong>Plus</strong>

<h4>$59/month</h4>

<ul>

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>

</ul>

</div>

<div className="vip ">


<strong>VIP</strong>

<h4>$99/month</h4>

<ul>

<li><i className="bi bi-check-circle-fill"></i> todo los beneficios</li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> todo special de entrenador </li>
<li><i className="bi bi-check-circle-fill"></i> Dos entrenadores personales gratis </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>
<li><i className="bi bi-check-circle-fill"></i> acceso al sauna </li>


</ul>

</div>


</div>



</>
  )
}

export default Prices