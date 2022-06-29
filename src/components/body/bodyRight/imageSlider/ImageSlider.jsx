import React from 'react'
import { CardMedia, Stack } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './imageSlider.css'


const ImageSlider = () => {
    const [sliderIndex, setSliderIndex] = React.useState(0)
    const sliderImages = ['business.jpeg', 'business1.jpeg', 'business2.jpeg']

    // const [sliderImages, setSliderImages] = React.useState(null)

    // React.useEffect(() => {
    //   axios.get('https://source.unsplash.com/random/877x300/?business').then((response) => {
    //     setSliderImages(response.data);
    //   });
    // }, [sliderIndex]);


    const handleSliderClick = (btn) => {
        if (btn === 'prev') {
            console.log('clicked', sliderIndex)
            if (sliderIndex > 0) setSliderIndex(sliderIndex - 1)
        } else {
            console.log('clicked', sliderIndex)
            if (sliderIndex !== sliderImages.length - 1) setSliderIndex(sliderIndex + 1)
        }
    }


    return (
        // <Stack >
            <div className="slider">
                <div className="slider-btn prev" id='slider-prev-btn' onClick={() => handleSliderClick('prev')} >
                    <ArrowBackIosIcon />
                </div>
                <CardMedia
                    component="img"
                    // image={sliderImages[sliderIndex]}
                    image='https://source.unsplash.com/random/877x300/?business'
                    alt="green iguana"
                />
                <div className="slider-btn next" id='slider-next-btn' onClick={() => handleSliderClick('next')} >
                    <ArrowForwardIosIcon />

                </div>
            </div>
        // </Stack>
    )
}

export default ImageSlider