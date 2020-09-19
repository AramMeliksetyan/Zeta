import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Contact from './components/pages/contact'
import Header from './components/ui/Header'
import Footer from './components/ui/footer'
import Services from './components/pages/services'
import Elements from './components/pages/elements'
import TestComponent from './components/test';
import Blog from './components/pages/blog'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/services" exact component={Services} />
                <Route path="/elements" exact component={Elements} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/test" exact component={TestComponent} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes;