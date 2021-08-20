import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { API } from '../helper/Helper';

export const tourContext = React.createContext()

const INIT_STATE = {
    tours: [],
    edit: null,
    paginatedPages: 1,
    tourDetail: []
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
    }
}

const TourContextsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getTours = async (history) => {
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

    return (
        <tourContext.Provider value={{
            tours: state.tours,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            tourDetail: state.tourDetail,
            getTours,
            addTour,
            editTour,
            saveEditTour,
            deleteTour,
            getDetail
        }}>
            {children}
        </tourContext.Provider>
    );
};

export default TourContextsProvider;