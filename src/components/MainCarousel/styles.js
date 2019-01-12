import styled from 'styled-components'

export const Image = styled.img`
	transition: 300ms;
	@media (max-width: 1024px) {
		width: 180% !important;
		max-width: none !important;
		position: relative;
		left: -50%;
	}
	@media (max-width: 870px) {
		width: 200% !important;
		max-width: none !important;
		position: relative;
		left: -50%;
	}
	@media (max-width: 600px) {
		width: 300% !important;
		max-width: none !important;
		position: relative;
		left: -50%;
	}
`
