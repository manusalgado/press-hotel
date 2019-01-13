import React from 'react'
import {WrapperBookingForm} from './styles'
import {Input} from 'react-materialize'
import close from '../../assets/icons/close.png' 
import go from '../../assets/icons/go.png'

class BookingForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this)
  }

  handleShow(){
    this.setState({show:!this.state.show})
  }

  render(){
    const {show} = this.state

    const Child = () => (
        <div className={!show ? 'display-none' : ''}>
          <span onClick={this.handleShow}>
            <img src={close} alt='Close' />
          </span>
          <h4>Book now</h4>
          <div className='Child__input-container'>
            <p>Arrival date</p>
            <Input name='on' type='date' onChange={function(e, value) {}} />
          </div>
          <div className='Child__input-container'>
            <p>Departure date</p>
            <Input name='on' type='date' onChange={function(e, value) {}} />
          </div>
          <div className='Child__input-container'>
            <p>Guests</p>
            <div className='Child__select'>
              <select>
                <option selected>1 Adult</option>
                <option>2 Adult</option>
                <option>3 Adult</option>
              </select>
              <select>
                <option selected>1 Child</option>
                <option>2 Child</option>
                <option>3 Child</option>
              </select>
            </div>
          </div>
          <p className='Child__last-content'>GET READY! You are about to  get our best price. Guaranteed.</p>
          <button className='Child__button'>Let's go</button>
          <div className='Child__go-group'>
            <p>Or, book your group</p>
            <a href='#'>
              <img src={go} alt='Go'/></a>
          </div>
        </div>
      )

    return(
      <WrapperBookingForm className={!show ? 'WrapperBookingForm' : ''}>
        <button onClick={this.handleShow} className='WrapperBookingForm__button'>
          Book now
        </button>
        {show && <Child />}
      </WrapperBookingForm>
    )
  }
}

export default BookingForm