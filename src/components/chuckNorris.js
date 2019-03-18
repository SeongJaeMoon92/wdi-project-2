import React from 'react'
import axios from 'axios'

import Jokes from './jokes'

class ChuckNorris extends React.Component {
  constructor(){
    super()

    this.state = { data: {}}
  }

  componentDidMount() {
    axios.get('http://api.icndb.com/jokes/',
      {headers: {Accept: 'application/json' }}
    )
      .then(res => res.data.value.map(el => el.joke))
      .then(res => this.setState({data: res}))
  }

  render(){
    return (
      <div>
        <h1 className="title">Chuck Norris</h1>
        {this.state.data && <Jokes data={this.state.data}/>}
      </div>
    )
  }
}

export default ChuckNorris
