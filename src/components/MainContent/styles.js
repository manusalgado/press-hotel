import styled from 'styled-components'

export const MainContentTheme = styled.main`
	background-color: #f1f1f1;
	position: relative;
`
export const WrapperMainContent = styled.div`
	.WrapperMainContent__content {
		padding: 20px 0;
		.WrapperMainContent__content--description {
			h5 {
				font-size: 17px;
				line-height: 25px;
				color: rgb(40, 41, 48);
				font-family: 'interstate', sans-serif;
				text-transform: uppercase;
				text-align: center;
			}
			h3 {
				font-size: 30px;
				letter-spacing: -2px;
				line-height: 40px;
				color: rgb(151, 159, 164);
				font-family: 'Gotham', sans-serif;
				font-weight: bold;
				text-transform: uppercase;
			}
			p {
				font-size: 14px;
				line-height: 22px;
				color: rgb(40, 41, 48);
				font-family: 'Arial', sans-serif;
			}
			button {
				width: 110px;
				height: 30px;
				background-color: rgba(226, 31, 37, 0);
				border: 2px solid #e11f25;
				font-size: 15px;
				letter-spacing: 1px;
				line-height: 15px;
				color: rgb(226, 31, 37);
				font-family: 'Interstate', sans-serif;
				font-weight: bold;
				text-transform: uppercase;
				display: block;
				margin: 40px auto 0 auto;
				transition: 300ms;
				border-radius:3px;
				&:hover {
					background-color: #e11f25;
					color: #ffffff;
				}
			}
		}
		.WrapperMainContent__content--image {
			padding: 20px;
			img {
				width: 600px;
				max-width: 100%;
			}
		}
	}
`
