import { PureComponent, type ReactNode } from 'react'

interface IProps {
  name: string
  age: number
}

interface IState {
  name: string
  age: number
}

class Demo2 extends PureComponent<IProps, IState> {
  state = {
    name: 'zhangsan',
    age: 23,
  }

  handleClick = () => {
    console.log(this)
  }

  handleClick2() {
    console.log(this)
  }
  render(): ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
        <button onClick={this.handleClick2}>点击2</button>
        <h2>name: {this.props.name}</h2>
        <h2>age: {this.props.age}</h2>
        <h2>name: {this.state.name}</h2>
        <h2>age: {this.state.age}</h2>
      </div>
    )
  }
}

export default Demo2
