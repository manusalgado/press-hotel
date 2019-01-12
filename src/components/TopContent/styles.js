import styled from 'styled-components'

export const SectionTopContent = styled.section`
	position: relative;
`
export const WrapperTopContent = styled.div`
	.WrapperTopContent__content {
		background-color: #000000;
		text-align: center;
		color: #FFFFFF;
		h1 {
			font-size: 30px;
			letter-spacing: 1px;
			line-height: 35px;
			font-family: "Bodoni", sans-serif;
			text-transform: uppercase;
			border-top: 3px solid #ffffff;
			width: 65%;
			margin: auto;
			padding: 20px 10px 0 10px;
		}
		h2 {
			font-size: 20px;
			letter-spacing: 1px;
			line-height: 35px;
			font-family: "Bodoni", sans-serif;
			margin: 0;
		}
		p {
			font-size: 12px;
			line-height: 22px;
			color: #FFFFFF;
			font-family: "Arial", sans-serif;
			padding: 40px 60px 100px 60px;
		}
		@media (max-width: 600px) {
			width: 100%;
			h1 {
				width: 100%;
			}
			p {
				padding: 20px 5px 50px 5px;
			}
		}
	}
`