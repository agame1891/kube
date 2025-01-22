import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/footer"
import About from "../about/about"
import Contact from "../contact/contact"
import Login from "../login/login"
import Regis from "../register/register"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regis} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
