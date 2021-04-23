import React from 'react';
import '../Navigation.css'
import {FaHome, FaUserCircle, FaWallet, FaStore} from 'react-icons/fa'
import {MdNotificationsActive} from 'react-icons/md'
import {FiActivity} from 'react-icons/fi'
import {GiCash} from 'react-icons/gi'
function Navigation() {
  return (
    <div className="navigationWrapper">
<div className="navigation">
  <a className="logo"><h3>Logo</h3></a>
  <div className="navigation__list">
    
<a href="#"><div className="navigation__icon">< FaHome className="icon"/> <p>Home</p> </div></a>
<a href="#"><div className="navigation__icon"><FiActivity className="icon"/> <p>Activity</p> </div></a>
<a href="#"><div className="navigation__icon"><FaWallet className="icon"/> <p>Wallet</p> </div></a>
<a href="#"><div className="navigation__icon"><FaStore className="icon"/> <p>Market</p> </div></a>
<a href="#"><div className="navigation__icon"><GiCash className="icon"/> <p>Earn</p> </div></a>
  </div>
  <div className="navigation__user"><a href=""><p><FaUserCircle className="icon-nt"/></p></a></div>
  <div className="navigation__user"><a href=""><p><MdNotificationsActive className="icon-nt"/></p></a></div>
</div>
    </div>
  )
}

export default Navigation
