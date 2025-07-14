import React from 'react'
import {Desktop_nav,Mobile_nav} from './All_pages'
import '../../../Css/Web_pages/Nav_bar.css'

function Nav_bar() {
  return (
    <div>
        <div className="Nav_desktop_div">
            <Desktop_nav/>
        </div>

        <div className="Nav_mobile_div">
            <Mobile_nav/>
        </div>
    </div>
  )
}

export default Nav_bar