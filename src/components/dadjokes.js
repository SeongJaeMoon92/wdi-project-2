import React from 'react'
import axios from 'axios'

import Jokes from './jokes'

class DadJokes extends React.Component {
  constructor(){
    super()

    this.state = { data: {} }
  }

  componentDidMount() {
    axios.get('https://icanhazdadjoke.com/search?limit=30',
      {headers: {Accept: 'application/json'}}
    )
      .then(res => res.data.results.map(el => el.joke))
      .then(res => this.setState({data: res}))
  }

  render(){
    return (
      <div>
        <h1 className="title">Dad Jokes</h1>
        {this.state.data && <Jokes data={this.state.data}/>}
      </div>
    )
  }
}

export default DadJokes
