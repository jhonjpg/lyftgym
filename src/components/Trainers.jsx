import React, { useState } from 'react'
import { InView } from 'react-intersection-observer';

const Trainers = () => {


        const [contact, setcontact] = useState(false)
        const [contact2, setcontact2] = useState(false)
        const [contact3, setcontact3] = useState(false)
        const [contact4, setcontact4] = useState(false)

    const contacto = () => {
        setcontact(!contact)
    }

    const contactoTwo = () => {
      setcontact2(!contact2)
  }

  const   contactoThree = () => {
    setcontact3(!contact3)
}

const   contactoFour = () => {
  setcontact4(!contact4)
}

  
    const hideContact = `oculto ${contact ? "mostrar" : ""}`
    const hideContact2 = `ocult ${contact2 ? "mostra" : ""}`
    const hideContact3 = `ocul ${contact3 ? "mostr" : ""}`
    const hideContact4 = `ocu ${contact4 ? "most" : ""}`

  
  return (
<section id="trainer">

<div className="">

<h3>Almenos 3 años de experiencia</h3>

<h4>Entrenadores</h4>
</div>


<ul className="trainersInfo">


<InView>
{({ inView, ref, entry }) => (

<li ref={ref} className={inView ? 'inViews1' : ''}><div className=""><img src="https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /></div> <strong>Dark jhonson</strong> 
<p>Soy un entrenador dedicado y apasionado. Siempre busca motivar a mis clientes para que den lo mejor de sí mismos en cada sesión. Su energía y entusiasmo contagian a todos en el gimnasio</p>


<button onClick={contacto}>{contact ? "ocultar": "Contacto"} <i className="bi bi-arrow-right"></i></button>
<p className={hideContact}> 809-590-5954</p>

</li>



)}
</InView>


<InView>
{({ inView, ref, entry }) => (

<li ref={ref} className={inView ? 'inViews2' : ''}><div className=""><img src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /></div> <strong>Mark Henry</strong> 
<p> Experto en la técnica y la forma correcta de hacer ejercicio. No solo se preocupa por el rendimiento, sino también por la seguridad de sus clientes. Siempre está atento a corregir posturas y asegurarse de que se realicen los movimientos de manera adecuada</p>


<button onClick={contactoTwo}>{contact2 ? "ocultar": "Contacto"} <i className="bi bi-arrow-right"></i></button>
<p className={hideContact2}> 809-590-5954</p>

</li>

)}
</InView>


<InView>
{({ inView, ref, entry }) => (

<li ref={ref} className={inView ? 'inViews3' : ''}><div className=""><img src="https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /></div> <strong>Tina Paterson</strong> 
<p>Coach inspiradora se cómo encontrar el equilibrio perfecto entre el desafío y el apoyo. Motiva a sus clientes a superar sus propios límites y alcanzar metas que nunca creyeron posibles. Su enfoque positivo y alentador crea un ambiente propicio para el crecimiento personal</p>


<button onClick={contactoThree}>{contact3 ? "ocultar": "Contacto"} <i className="bi bi-arrow-right"></i></button>
<p className={hideContact3}> 809-590-5954</p>

</li>


)}
</InView>



<InView>
{({ inView, ref, entry }) => (

<li ref={ref} className={inView ? 'inViews4' : ''}><div className=""><img src="https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /></div> <strong>Janet Spring</strong> 
<p> Explico los beneficios de cada ejercicio y cómo se relaciona con los objetivos individuales de cada cliente. Siempre está dispuesto a responder preguntas y brindar orientación para garantizar el progreso constante de sus clientes</p>


<button onClick={contactoFour}>{contact4 ? "ocultar": "Contacto"} <i className="bi bi-arrow-right"></i></button>
<p className={hideContact4}> 809-590-5954</p>

</li>


)}
</InView>


</ul>



</section> 

)
}

export default Trainers