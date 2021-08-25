import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration'
import AuthContextProvider from './components/contexty/AuthContext';
import TourContextsProvider from './components/contexty/TourContexts';
import Add from './components/CRUD/AddTour';
import Edit from './components/CRUD/EditTour';
import TourDetail from './components/CRUD/TourDetail';
import Favorite from './components/Favorites/Favorites';
import FooterTop from './components/Footer/FooterTop';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import ForgotPassword from './components/Auth/ForgotPasswor'
import svadba from './components/Hotels/svadba';
import Transfer from './components/Hotels/Transfer';
import Kyrgyzstan from './components/Hotels/Kyrgyzstan';

const Routes = () => {
    return (
        <AuthContextProvider>
            <TourContextsProvider>
                <BrowserRouter>
                    <FooterTop/>
                    <Navbar/>
                    <Switch>
                        <Route exact path = '/' component={Home} />
                        <Route exact path = '/add' component={Add}/>
                        <Route exact path = '/edit/:id' component={Edit}/>
                        <Route exact path="/detail/:id" component={TourDetail}/>
                        <Route exact path = '/login' component={Login}/>
                        <Route exact path = '/registration' component={Registration}/>
                        <Route exact path = '/favorite' component={Favorite}/>
                        <Route exact path = '/forgot-password' component={ForgotPassword}/>
                        <Route exact path = '/svadba' component={svadba}/>
                        <Route exact path = '/transfer' component={Transfer}/>
                        <Route exact path = '/kyrgyzstan' component={Kyrgyzstan}/>
                    </Switch>
                </BrowserRouter>
            </TourContextsProvider>
        </AuthContextProvider>
    );
};

export default Routes;