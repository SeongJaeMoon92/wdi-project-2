import React from 'react'
import axios from 'axios'

import Jokes from './jokes'

class GeekJokes extends React.Component {
  constructor(){
    super()

    this.state = { data: {} }
  }

  componentDidMount() {
    axios.get('https://official-joke-api.appspot.com/random_ten',
      {headers: {Accept: 'application/json' }}
    )
      .then(res => res.data.map(el => el.setup.concat(` ${el.punchline}`)))
      .then(res => this.setState({data: res}))
  }

  render(){
    return (
      <div>
        <h1 className="title">Geek Jokes</h1>
        {this.state.data && <Jokes data={this.state.data}/>}
      </div>
    )
  }
}

export default GeekJokes
