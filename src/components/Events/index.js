import React from 'react'
import {WrapperEvents, EventsTheme, EventDate} from './styles'
import imageOne from '../../assets/images/event-1.png'
import imageTwo from '../../assets/images/event-2.png'
import imageThree from '../../assets/images/event-3.png'
import imageFour from '../../assets/images/event-4.png'

const Events = ({title}) => {
  return(
    <EventsTheme>
      <WrapperEvents className="container">
				<div className="row WrapperEvents__content">
					<div className="col s12 WrapperEvents__content--title">
            <h5>{title}</h5>
					</div>
          <div className="col s6 m3 l3 WrapperEvents__content--image">
            <div>
              <a href='/'>
                <img src={imageFour} alt='Event' />
              </a>
              <EventDate>
                <span>08</span>
                <span>Nov</span>
              </EventDate>
            </div>
          </div>
          <div className="col s6 m3 l3 WrapperEvents__content--image">
            <div>
              <a href='/'>
                <img src={imageTwo} alt='Event' />
              </a>
              <EventDate>
                <span>16</span>
                <span>Nov</span>
              </EventDate>
            </div>
          </div>
          <div className="col s6 m3 l3 WrapperEvents__content--image">
            <div>
              <a href='/'>
                <img src={imageThree} alt='Event' />
              </a>
              <EventDate>
                <span>25</span>
                <span>Nov</span>
              </EventDate>
            </div>
          </div>
          <div className="col s6 m3 l3 WrapperEvents__content--image">
            <div>
              <a href='/'>
                <img src={imageOne} alt='Event' />
              </a>
              <EventDate>
                <span>30</span>
                <span>Nov</span>
              </EventDate>
            </div>
          </div>
				</div>
			</WrapperEvents>
    </EventsTheme>
  )
}

export default Events