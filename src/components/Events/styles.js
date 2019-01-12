import styled from 'styled-components'

export const EventsTheme = styled.section`
  position: relative;
  background-color: #FFFFFF;
`

export const WrapperEvents = styled.div`
  .WrapperEvents__content {
    padding-bottom: 50px;
    .WrapperEvents__content--title {
      padding: 20px;
      h5 {
        text-align: center;
        font-size: 17px;
        line-height: 25px;
        color: rgb(40,41,48);
        font-family: "Gotham", sans-serif;
        text-transform: uppercase;
      }
    }
    .WrapperEvents__content--image {
      div {
        overflow: hidden;
        width: 180px;
        height: 120px;
        max-width: 100%;
        margin: 10px auto;
        position: relative;
        a {
          img {
          width: 190%;
          left: -20%;
          top: -10%;
          position: relative;
          }
        }
      }
    }
  }
`

export const EventDate = styled.div`
  position: absolute!important;
  top: 0%;
  background-color: #27292f;
  width: auto!important;
  height: auto!important;
  margin: 0!important;
  display: inline-flex;
  span {
    display: block;
    font-weight: bold;
    font-family: "Interstate";
    color: #FFFFFF;
  }
  span:nth-child(1){
    font-size: 35px;
    line-height: initial;
    color: rgb(241,242,242);
    font-weight: 800;
    padding: 5px;
  }
  span:nth-child(2){
    font-size: 15px;
    letter-spacing: 1px;
    line-height: 33px;
    text-transform: uppercase;
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
`