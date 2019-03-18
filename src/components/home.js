import React from 'react'

import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  render(){
    return(
      <main>
        <div className="img-container">
          <img className="logoa animated zoomInUp" src={'./images/logob.png'} />
          <img className="logob animated zoomIn delay-1s" src={'./images/logoa.png'} />
        </div>
        <Link to="/chucknorris" className="navbar-item animated bounceInUp delay-2s"><div>Chuck Norris Jokes</div></Link>
        <Link to="/geekjokes" className="navbar-item animated bounceInUp delay-2s"><div>Geek Jokes</div></Link>
        <Link to="/dadjokes" className="navbar-item animated bounceInUp delay-2s"><div>Dad Jokes</div></Link>
      </main>
    )
  }
}

export default Home
