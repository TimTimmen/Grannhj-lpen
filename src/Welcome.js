import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function Welcome(props) {
  useEffect(() => {
    const c = cookie.getJSON('me') || {}

    if (c.agent === 'NEEDER') {
      props.history.push('needer/welcome')
    }
    if (c.agent === 'HELPER') {
      props.history.push('helper/dashboardhelper')
    }
  })
  return (
    <div>
      <h2>Välkommen ny användare</h2>
      <h4>Denna site är endast kompatibel med Google Chrome och Desktop/Laptop</h4>
      <p className="who">Vem är du?</p>
      <div className="button-holder">
        <Link to='helper/createuser'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            <img alt="lifebuoy" src="images/lifebuoy-icon.png" />
            Hjälpare
          </Button>
        </Link>
        <Link to='needer/createuser'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
            <img alt="helping-hand" src="images/helping-hand-icon.png" />
            Jag behöver hjälp
          </Button>
        </Link>
      </div>
      <div className="links">
        <p>
          Source code at <a href="https://github.com/ErikLarsson82/isolations-hjalpen">https://github.com/ErikLarsson82/isolations-hjalpen</a>
        </p>
        <p>
          Short movie with demo of features <a href="https://www.dropbox.com/s/mtv8wb0m42xeep4/grann-supershort.mp4?dl=0">https://www.dropbox.com/s/mtv8wb0m42xeep4/grann-supershort.mp4?dl=0</a>
        </p>
      </div>
      <div className="credits-section">
      <ul className="credit-text-hum">
        <li>Erik Larsson</li>
        <li>Esmond Buswijller</li>
        <li>Juan Medina</li>
        <li>Richard Bunk</li>
        <li>Megan Gustafsson</li>
        <li>Tim Fredriksson</li>
        <li>Minna Storm</li>
        <li>Ravindra Singh</li>
        <li>William Samuelsson</li>
      </ul>
      </div>
      </div>
  )
}

export default Welcome