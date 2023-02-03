import React from 'react'
import HelloWorld from './components/HelloWorld'

// 编写一个 App 组件
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'App'
    }
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <HelloWorld />
      </div>
    )
  }
}

export default App
