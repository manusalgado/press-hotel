import styled from 'styled-components'

export const WrapperHeader = styled.div`
    align-items: center;
    display: flex;
    margin: 70px auto;
    width: 71%;
    height: 80px;
		background-color: rgba(255, 255, 255, 0.9);
		position: relative;
		h4 {
			font-family: 'gotham-bold', sans-serif;
			text-transform: uppercase;
			font-size: 11px;
			letter-spacing: 2px;
			padding-left: 5%;
		}
		a {
			position: relative;
    	left: 20%;
			img {
			width: 150px;
			max-width: 100%;
			}
		}
		@media (max-width: 600px) {
			margin: 70px 0;
			width: 100%;
			height: 60px;
			a {
				left: 10%;
				img {
				width: 100px;
				}
			}
		}
`