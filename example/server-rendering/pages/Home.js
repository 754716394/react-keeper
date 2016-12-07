import Header from '../../common/Header'
import Footer from '../../common/Footer'
import React from 'react'

class Home extends React.Component{
  render() {
    return (
      <div className="page">
        <Header/>
        <div className="container-fluid">
          <h1>react-flex-router server-rendering</h1>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default Home