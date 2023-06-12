import React from 'react'
import Home from './Components/Home'
import Plans from './Components/Plans'
import Programs from './Components/Programs'
import ContactUs from './Components/ContactUs'
import Footer from './Utils/Footer'
import {
    FacebookIcon,
    InstagramIcon,
    WatsappIcon,
    YoutubeIcon,
} from './Utils/icons'
import Header from './Utils/Header'

const Routes = () => {
    return (
        <div className='app-body'>
            <div className='social-icons'>
                <InstagramIcon />
                <WatsappIcon />
                <FacebookIcon />
                <YoutubeIcon />
            </div>
            <Header />
            <Home />
            <Programs />
            <Plans />
            <ContactUs />
            <Footer />
            {/* <Switch>
                <Route exact path='/' render={() => <Redirect to='/home' />} />
                <Route exact path='/home' render={() => <Home />} />
                <Route exact path='/programs' render={() => <Programs />} />
                <Route exact path='/plans' render={() => <Plans />} />
                <Route
                    exact
                    path='/testimonials'
                    render={() => <Testimonials />}
                />
            </Switch> */}
        </div>
    )
}

export default Routes
