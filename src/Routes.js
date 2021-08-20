import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TourContextsProvider from './components/contexty/TourContexts';
import Add from './components/CRUD/AddTour';
import Edit from './components/CRUD/EditTour';
import TourDetail from './components/CRUD/TourDetail';
import FooterTop from './components/Footer/FooterTop';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import TourList from './components/Tour/TourList';

const Routes = () => {
    return (
        <TourContextsProvider>
            <BrowserRouter>
                <FooterTop/>
                <Navbar/>
                <Switch>
                    <Route exact path = '/' component={Home} />
                    <Route exact path = '/add' component={Add}/>
                    <Route exact path = '/edit/:id' component={Edit}/>
                    <Route exact path="/detail/:id" component={TourDetail}/>
                </Switch>
            </BrowserRouter>
        </TourContextsProvider>
    );
};

export default Routes;