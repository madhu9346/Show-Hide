import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: true, last: true}

  hideShow = () => {
    const {first} = this.state

    if (first === true) {
      this.setState({first: false})
    } else {
      this.setState({first: true})
    }
  }

  hideShowOf = () => {
    const {last} = this.state

    if (last === true) {
      this.setState({last: false})
    } else {
      this.setState({last: true})
    }
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="con">
        <h1 className="head">Show/Hide</h1>
        <div className="con1">
          <div>
            <button type="button" className="btn" onClick={this.hideShow}>
              Show/Hide FirstName
            </button>
            {first ? <p className="hide">Joe</p> : null}
          </div>
          <div>
            <button type="button" className="btn1" onClick={this.hideShowOf}>
              Show/Hide LastName
            </button>
            {first ? <p className="hide">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
