import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  showFirst = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showLast = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="box-container">
          <div className="box">
            <button className="btn" type="button" onClick={this.showFirst}>
              Show/Hide Firstname
            </button>
            <div className="text-box">
              {firstName && <p className="text">Joe</p>}
            </div>
          </div>
          <div className="box">
            <button className="btn" type="button" onClick={this.showLast}>
              Show/Hide Lastname
            </button>
            <div className="text-box">
              {lastName && <p className="text">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
