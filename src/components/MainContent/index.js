import React from 'react'
import {WrapperMainContent, MainContentTheme} from './styles'
import room from '../../assets/images/room.png'

const MainContent = ({title}) => {
	return (
		<MainContentTheme>
			<div className="container">
				<div className="row">
					<WrapperMainContent className="col s12">
						<div className="row WrapperMainContent__content">
							<div className="col s12 m5 l5 WrapperMainContent__content--description">
								<h5>Accommodations</h5>
								<h3>{title}</h3>
								<p>
									Lorem ipsum dolor sit amet, donec luctus vel, augue duis.
									Volup Lorem ipsum dolor sit amet, donec luctus vel, augue
									duis. Volup
								</p>
								<button>View Rooms</button>
							</div>
							<div className="col s12 m7 l7 WrapperMainContent__content--image">
								<img src={room} alt="Room" />
							</div>
						</div>
					</WrapperMainContent>
				</div>
			</div>
		</MainContentTheme>
	)
}

export default MainContent
