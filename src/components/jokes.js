import React from 'react'

import 'bulma'

class Jokes extends React.Component {
  constructor(){
    super()

    this.state = { data: {}, jokes: '' , voice: 'UK English Female', back: [], isHidden: true}

    this.voices = ['UK English Female', 'UK English Male', 'US English Female', 'US English Male', 'Arabic Male', 'Arabic Female' ,'Armenian Male', 'Armenian Female' ,'Australian Male', 'Australian Female','Brazilian Portuguese Female','Brazilian Portuguese Male', 'Chinese Male', 'Chinese Female', 'Chinese Taiwan Female', 'Chinese Taiwan Male', 'Czech Male', 'Czech Female', 'Danish Male', 'Danish Female','Deutsch Female','Deutsch Male' ,'Finnish Female' ,'Finnish Male', 'French Female' ,'French Male', 'Greek Female' ,'Greek Male' ,'Hindi Female', 'Hungarian Female', 'Hungarian Male', 'Indonesian Female','Indonesian Male', 'Italian Female','Italian Male', 'Japanese Female','Japanese Male','Korean Female','Korean Male','Latin Female','Latin Male','  Norwegian Female','Norwegian Male','Polish Female','Polish Male','Portuguese Female','Portuguese Male','Romanian Female','Russian Female','Russian Male','Slovak Female','Slovak Male','Spanish Female','Spanish Male', 'Spanish Latin American Female','Spanish Latin American Male','Swedish Female','Swedish Male','Tamil Male','Thai Female','Thai Male','Turkish Female','Turkish Male','Vietnamese Female','Vietnamese Male','Afrikaans Male','Albanian Male','Albanian Female','Bosnian Male','Catalan Male','Croatian Male','Esperanto Male','Icelandic Male','Latvian Male','Macedonian Male','Moldavian Female','Moldavian Male','Montenegrin Male','Serbian Male','Serbo-Croatian Male','Swahili Male','Welsh Male','Fallback UK Female' ]

    this.color = ['red', 'blue', 'yellow', 'black']

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClickGenerator = this.handleClickGenerator.bind(this)
    this.handleBackButton = this.handleBackButton.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  handleArray(){
    const back = [...this.state.back, this.state.jokes]
    console.log(back)
    this.setState({back})
  }

  handleBackButton(){
    this.setState({back: this.state.back.slice(0, this.state.back.length-1)}, this.ChangeJokesForBackButton)

  }

  ChangeJokesForBackButton(){
    this.setState({jokes: this.state.back[this.state.back.length-1]})
  }

  handleChange(e){
    const divArray = [...this.DivButton.children]
    if(divArray.some(x => x.classList.contains('active'))){
      const newarray = divArray.filter(x => x.classList.contains('active'))
      newarray[0].classList.remove('active')
    }
    e.target.classList.add('active')
    this.setState({voice: e.target.innerText}, this.handleClick)
  }

  handleClick(){
    const responsiveVoice = window.responsiveVoice
    responsiveVoice.speak(this.state.jokes, `${this.state.voice}`)
  }

  handleClickGenerator(){
    if(!this.props.data) return
    const data = Math.floor(Math.random()*this.props.data.length)
    this.setState({ jokes: this.props.data[data] }, () =>{
      this.handleArray()
    })
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  fontColor (){
    if(this.state.back){
      const colorElement = this.color[Math.floor(Math.random()*this.color.length)]
      const print = document.getElementsByClassName('print')
      console.log(colorElement, print)
      // print.classList.add(`${colorElement}`)
    }
  }

  render(){
    return (
      <div className="page">
        <div className="voiceBtn">
          <div className="languageButton animated infinite pulse" onClick={this.toggleHidden}>Choose Your Accent</div>
          {!this.state.isHidden &&
            <div ref={el => this.DivButton = el} className="sidebar">
              {this.voices.map(voice => (<div className="sidebar-item" onClick={this.handleChange} key={voice}>{voice}</div>))}
            </div>}
        </div>
        <div className="middle">
          <div className="firstSection">
            <div className="print">{this.state.jokes}</div>
            <div className="buttons">
              <div className="divbutton">
                <button onClick={this.handleBackButton} className="button">Go back</button>
              </div>
              <div className="divbutton">
                <button onClick={this.handleClickGenerator} className="button">Next Joke</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Jokes
