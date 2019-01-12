import styled from 'styled-components'

export const FooterTheme = styled.footer`
  background-color: #f1f1f1;
  padding: 5px;
`
export const WrapperFooter = styled.div`
  .WrapperFooter__content {
    div {
      small {
      font-size: 10px;
      letter-spacing: 0px;
      color: #000000;
      font-family: "gotham-book", sans-serif;
      span {
        font-weight: bold;
        }
      }
    }
    div:nth-child(2) {
      small {
      font-weight: bold;
      }
    }
  }
  @media (max-width: 600px) {
			text-align: center;
		}
`