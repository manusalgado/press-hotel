import styled from 'styled-components'

export const WrapperHeader = styled.div`
	height: 336px;
	.WrapperHeader__content {
		align-items: center;
		display: flex;
		margin: 70px auto;
		height: 80px;
		background-color: rgba(255, 255, 255, 0.9);
		position: relative;
		h4 {
			position: absolute;
			bottom: 25%;
			font-family: 'gotham-bold', sans-serif;
			text-transform: uppercase;
			font-size: 0.9rem;
			letter-spacing: 2px;
			padding-left: 5%;
		}
		a {
			display: block;
			margin: 0px auto;
		}
		@media (max-width: 600px) {
			margin: 70px 0;
			width: 100%;
			height: 60px;
			h4 {
				letter-spacing: 0;
			}
			a {
				img {
					width: 90px;
				}
			}
		}
		@media (max-width: 320px) {
			height: 60px;
			h4 {
				letter-spacing: 0;
				font-size: 0.7rem;
			}
			a {
				img {
					width: 70px;
				}
			}
		}
	}
`
