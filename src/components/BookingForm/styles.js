import styled from 'styled-components'

export const WrapperBookingForm = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  z-index: 5;
  width: 327px;
  background-color: #1e1e1e;
  transition: 50ms;
  .WrapperBookingForm__button {
    display: block;
    padding: 10px;
    position: relative;
    left: -79px;
    top: 170px;
    transform: rotate(-90deg);
    background-color: #000000;
    color: #FFFFFF;
    text-transform: uppercase;
    border: none;
    font-size: 17px;
    letter-spacing: 1px;
    line-height: 18px;
    font-family: "Interstate";
    font-weight: bold;
    width: 120px;
  }
  div {
    span {
      position: absolute;
      top: 6%;
      left: 6%;
      cursor: pointer;
    }
    h4 {
      margin-bottom: 50px;
      font-size: 40px;
      letter-spacing: -2px;
      line-height: 50px;
      color: rgb(241,242,242);
      font-family: Tahoma, sans-serif;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }
    .Child__input-container {
      width: 230px;
      margin: auto;
      p {
        font-size: 13px;
        line-height: 25px;
        color: rgb(241,242,242);
        font-family: "gotham-book";
        text-transform: uppercase;
      }
      div {
        input {
          width: 223px;
          height: 36px;
          background-color: #ffffff;
          padding-left: 10px;
          box-sizing: border-box;
          background-repeat: no-repeat;
          background-position-x: right;
          background-size: 25px;
          background-position-y: center;
        }
      }
      .Child__select {
        display: flex;
        select {
          display: block;
          height: 36px;
          background-color: #ffffff;
          padding-left: 10px;
          box-sizing: border-box;
          background-repeat: no-repeat;
          background-position-x: 90%;
          background-size: 12px;
          background-position-y: center;
          border-radius: none;
          -webkit-appearance: none;
          margin: 0 10px;
        }
      }
    }
     .Child__last-content {
      margin: 35px auto;
      width: 230px;
      font-size: 15px;
      letter-spacing: 0px;
      line-height: 13px;
      color: rgb(151,159,164);
      font-family: "Expo Serif Pro", sans-serif;
      text-align: center;
    }
    .Child__button {
      display: block;
      width: 90px;
      height: 30px;
      background-color: rgba(226,31,37,0);
      border: 2px solid #e31e25;
      margin: 0 auto 40px auto;
      text-transform: uppercase;
      font-family: "Interstate", sans-serif;
      color: #e31e25;
      font-weight: bold;
      transition: 300ms;
      &:hover {
        background-color: #e31e25;
        color: #FFFFFF;
      }
    }
    .Child__go-group {
      text-align: center;
      margin-bottom: 40px;
      p {
        display: inline-block;
        font-size: 15px;
        line-height: 13px;
        color: rgb(151,159,164);
        font-family: "gotham-book", sans-serif;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
      }
      a {
        margin-left: 10px;
      }
    }
  }
`