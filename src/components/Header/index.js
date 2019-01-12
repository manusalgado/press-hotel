import React from 'react'
import { WrapperHeader } from './styled'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
			<header>
				<div className='container'>
					<div className='row'>
						<WrapperHeader className='col s12'>
							<div className='WrapperHeader__content'>
								<h4>Portland, Maine</h4>
								<a href='/'>
									<img src={logo} alt='Logo' width='150' />
								</a>
							</div>
						</WrapperHeader>
					</div>
				</div>
			</header>
    )
}

export default Header