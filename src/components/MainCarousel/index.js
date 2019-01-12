import React from 'react'
import {Carousel} from 'react-bootstrap'
import {Image} from './styles'
import slideOne from '../../assets/images/slide-1.png'
import slideTwo from '../../assets/images/slide-2.png'
import slideThree from '../../assets/images/slide-3.png'
import slideFour from '../../assets/images/slide-4.png'

const MainCarousel = () => {
	return (
		<Carousel interval={8000}>
			<Carousel.Item>
				<Image alt="slide one" src={slideOne} />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="slide two" src={slideTwo} />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="slide three" src={slideThree} />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="slide four" src={slideFour} />
			</Carousel.Item>
		</Carousel>
	)
}

export default MainCarousel
