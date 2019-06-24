import React from 'react'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>hello world</h1>
      <label>example component</label>
      <PasswordInput />
    </div>
  }

}
