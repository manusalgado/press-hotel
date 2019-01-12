import React from 'react'
import { WrapperFooter, FooterTheme } from './styles'

const Footer = () => {
  return(
    <FooterTheme>
      <WrapperFooter className='container'>
        <div className='row WrapperFooter__content'>
          <div className='col s12 m8 l8'>
            <small>390 Congress St. (at Congress &amp; Exchange Streets), Portland, <span>Map ></span></small>
          </div>
          <div className='col s12 m4 l4'>
            <small>(207) 653.9990  •  info@portlandpresshotel.com</small>
          </div>
        </div>
      </WrapperFooter>
    </FooterTheme>
  )
}

export default Footer