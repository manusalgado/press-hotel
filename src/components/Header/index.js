import React from 'react'
import { WrapperHeader } from './styled'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
			<header>
				<div className='container'>
					<div className='row'>
						<div className='col s12'>
							<WrapperHeader>
								<h4>Portland, Maine</h4>
								<a href='/'>
									<img src={logo} alt='Logo'/>
								</a>
							</WrapperHeader>
						</div>
					</div>
				</div>
			</header>
    )
}

export default Header