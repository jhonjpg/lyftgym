import React from 'react'
import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Entrance from '../components/Entrance'
import FrontPg from '../components/FrontPg'
import Navbar from '../components/Navbar'
import Prices from '../components/Prices'
import Trainers from '../components/Trainers'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
<>
<main id="principal" className="d-flex flex-column w-100 ">

{/* menu */}
<Navbar/>


{/* frontPage */}
<FrontPg/>

{/* about */}

<About/>
{/* whyUs */}
<WhyUs/>

{/* Prices */}
<Prices/>

{/* Entrance */}

<Entrance/>

{/* trainers */}

<Trainers/>

{/* contact */}

<ContactUs/>

</main>
</>

)
}

export default Home