import {Component} from 'react'
import HeaderPage from '../HeaderPage'

class HomePage extends Component {
  componentDidMount() {
    this.getUserData()
  }

  getUserData = async () => {
    const apiUrl = 'https://apis.ccbp.in/userstories'
    const option = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, option)
    console.log(response)
  }

  render() {
    return (
      <>
        <HeaderPage />
        <div>
          <h1>hello</h1>
        </div>
      </>
    )
  }
}

export default HomePage
