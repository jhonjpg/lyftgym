import React from 'react'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';



const WhyUs = () => {



  
  return (

<section id="whyUs" >

<h4>SOMOS BUENOS PARA TODOS</h4>
<h5>POR QUE NOSOTROS?</h5>




<ul   className="d-flex justify-content-around gap-4 flex-wrap  w-100 h-100">

<InView>
{({ inView, ref, entry }) => (

  <li ref={ref} className={inView ? 'inView' : ''}>
<h6 > <i className="bi bi-controller"></i>   verdadera atmosfera de gym</h6>
<p>  Ya sea un principiante o un atleta experimentado, se sentirá como en casa en nuestro entorno inclusivo y acogedor. Creemos que una verdadera atmósfera de gimnasio es aquella que fomenta el crecimiento y el desarrollo personal, y trabajamos arduamente para crear ese tipo de cultura todos los días.
</p>


  </li>

  )}
  </InView>


  <InView>
{({ inView, ref, entry }) => (

  <li ref={ref} className={inView ? 'inViews' : ''} ><h6><i className="bi bi-capslock"></i> TODO TIPO MAQUINAS</h6>
<p>  Nuestro gimnasio está totalmente equipado con los últimos y mejores equipos de fitness. Desde máquinas cardiovasculares hasta pesas libres, tenemos todo lo que necesitas para alcanzar tus objetivos de fitness. Ya sea que prefiera levantar pesas, correr o hacer un entrenamiento de intervalos de alta intensidad. encontrarás el equipo perfecto para tus entrenamientos.
</p>
</li>

)}
</InView>


<InView>
{({ inView, ref, entry }) => (


  <li ref={ref} className={inView ? 'inView' : ''} >
    <h6 ><i className="bi bi-ev-front-fill"></i>  ENTRENADORES EXPERIMENTADOS
</h6>
<p>  Nuestros entrenadores son realmente asombrosos Con años de experiencia y pasión por el ejercicio, están dedicados a ayudar a nuestros miembros a lograr sus objetivos. Ya sea que esté buscando perder peso, desarrollar músculo o simplemente mejorar su salud y bienestar en general, nuestros entrenadores están aquí para ayudarlo.
</p>
</li>


)}
</InView>


<InView>
{({ inView, ref, entry }) => (

  <li ref={ref} className={inView ? 'inViews' : ''} ><h6 > <i className="bi bi-chevron-double-right"></i>  AMIGABLE PARA PROFESIONALES</h6>
<p>  Nuestro gimnasio se enorgullece de ser un hogar para muchos atletas profesionales. Exigimos un entrenamiento intenso y nos esforzamos por brindar el mejor apoyo posible para ayudar a nuestros miembros atletas a desarrollar todo su potencial.
</p>
</li>



)}
</InView>


</ul>




{/* <InView>
      {({ inView, ref, entry }) => (
        <div >
          <h6 >{`Header inside viewport ${inView}.`}</h6>
        </div>
      )}
    </InView> */}

</section>
  )
}

export default WhyUs