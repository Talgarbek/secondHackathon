import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { API } from '../helper/Helper';

export const tourContext = React.createContext()

const INIT_STATE = {
    tours: [],
    edit: null,
    paginatedPages: 1,
    tourDetail: [],
    fav: {},
    favLength: 0
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_TOUR":
        return{
            ...state,
            tours: action.payload.data,
            paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 6)
        }
        case "GET_EDIT_TOUR":
            return {...state, edit: action.payload}
        case "GET_DETAIL":
            return {...state, tourDetail: action.payload}
        case "CHANGE_FAV_COUNT":
            return{...state, favLength: action.payload}
        case "GET_FAV":
            return{...state, fav: action.payload}
        default: return state
    }
}

const TourContextsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getTours = async (history) => {
        console.log(history, 'HISTORY')
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 6)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let data = await axios(`${API}/tours${window.location.search}`)
        dispatch({
            type:"GET_TOUR",
            payload: data
        })
    }

    const addTour = async (newTour) => {
        try{
            let res = await axios.post(`${API}/tours`, newTour)
            return res
        }catch(error){
            console.log(error);
            return error
        }
    }

    const deleteTour = async (id, history) => {
        await axios.delete(`${API}/tours/${id}`)
        getTours(history)
    }

    const editTour = async (id) => {
        const {data} = await axios.get(`${API}/tours/${id}`)
        dispatch({
            type: "GET_EDIT_TOUR",
            payload: data
        })
    }

    const saveEditTour = async (updatedTour, history) => {
        try{
            let res = await axios.patch(`${API}/tours/${updatedTour.id}`, updatedTour)
            getTours(history)
            return res
        }catch (error){
            console.log(error);
            return error
        }
        
    }
    const getDetail = async(id)=> {
        const {data} = await axios(`${API}/tours/${id}`)
        dispatch({
            type: "GET_DETAIL",
            payload: data
        })
    }

    const addTourInCard = (tour) => {
        let fav = JSON.parse(localStorage.getItem('fav'))
        if(!fav){
            fav = {
                tours: [],
            }
        }

        let newTour = {
            item: tour,
        }
        let filteredFav = fav.tours.filter(elem => elem.item.id === tour.id)
        if(filteredFav.length > 0){
            fav.tours = fav.tours.filter(elem => elem.item.id !== tour.id)
        }else{
            fav.tours.push(newTour)
        }
        localStorage.setItem('fav', JSON.stringify(fav))
        dispatch({
            type: "CHANGE_FAV_COUNT",
            payload:  fav.tours.length
        })
    }

    const getFav = () => {
        let fav = JSON.parse(localStorage.getItem('fav'))
        console.log(fav, "asdasdasd");
        if(!fav){
            fav = {
                tours: [],
            }
        }
        dispatch({
            type: "GET_FAV",
            payload: fav
        })
    }

    const getFavLength = () => {
        let fav = JSON.parse(localStorage.getItem('fav'))
        if(!fav){
            fav = {
                tours: [],
            }
        }
        dispatch({
            type: "CHANGE_FAV_COUNT",
            payload: fav.tours.length
        })
    }
    const checkTourInFav = (id) => {
        let fav = JSON.parse(localStorage.getItem('fav'))
        if(!fav){
            fav= {
                tours: [],
            }
        }
        let newFav = fav.tours.filter(elem => elem.item.id === id)
        return newFav.length > 0 ? true : false
    }

    return (
        <tourContext.Provider value={{
            tours: state.tours,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            tourDetail: state.tourDetail,
            fav: state.fav,
            favLength: state.favLength,
            getTours,
            addTour,
            editTour,
            saveEditTour,
            deleteTour,
            getDetail,
            getFav,
            addTourInCard,
            checkTourInFav,
            getFavLength
        }}>
            {children}
        </tourContext.Provider>
    );
};

export default TourContextsProvider;