import * as React from 'react'

import './cmp.css'

export class Cmp extends React.Component<void, any> {
  state = {
    x: 2,
  }
  timeout = 0;

  componentDidMount() {
    this.timeout = window.setInterval(() => {
      this.setState({
        x: ++this.state.x,
      })
    }, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timeout)
  }

  render() {
    return <div>xyz {this.state.x} 123__</div>
  }
}
