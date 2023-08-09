import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const liftImage = ["https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/06/23/19/35/fitness-375472_1280.jpg", 
    "https://cdn.pixabay.com/photo/2015/01/10/18/45/gym-595597_1280.jpg",
     "https://cdn.pixabay.com/photo/2016/01/08/01/53/gymer-1126999_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/01/08/10/41/sports-1962574_1280.jpg", 
      "https://cdn.pixabay.com/photo/2013/02/26/02/14/exercise-86200_1280.jpg",
       "https://cdn.pixabay.com/photo/2014/04/24/17/56/fitness-studio-331569_1280.jpg",
        "https://cdn.pixabay.com/photo/2013/04/14/22/43/oak-ridge-104060_1280.jpg", 
        "https://cdn.pixabay.com/photo/2014/11/11/15/24/gym-526995_1280.jpg", 
        "https://cdn.pixabay.com/photo/2019/11/27/12/28/weights-4656858_1280.jpg"]
    return (
        <div className="galeria">
            <Slider {...settings}>


            {liftImage.map((item, index) => (
        <div key={index} className="divImg">
          <img src={item} />
        </div>
      ))}




            </Slider>
        </div>
    )
}

export default SlickCarousel