import * as React from 'react'

import './cmp.css'

export class Cmp extends React.Component<void, any> {
  state = {
    x: 2,
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        x: ++this.state.x,
      })
    }, 1000)
  }

  render() {
    return <div>{this.state.x} !!2211!!!</div>
  }
}
