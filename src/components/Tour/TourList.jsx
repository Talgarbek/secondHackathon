import React from 'react';
import { Grid } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Pagination } from '@material-ui/lab';
import { tourContext } from '../contexty/TourContexts';
import TourCard from './TourCard';


const TourList = () => {
    let history = useHistory()
    const {tours, getTours, paginatedPages} = useContext(tourContext)
    const [page, setPage] = useState(getPage())

    useEffect(() => {
        getTours(history)
    }, [])

    function getPage(e, page){
        const search = new URLSearchParams(history.location.search)
        if(!search.get('_page')){
            return 1
        }
        return search.get('_page')
    }

    const handlePage = (e,pageVal) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', pageVal)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getTours(history)
        setPage(pageVal)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    console.log(page)
    return (
        <>
            <Grid container spacing={3} justify="space-around" style={{marginTop: '25px', marginBottom: '15px'}}>
                {
                    tours ? (
                        tours.map((item, index) => (
                            <TourCard item={item} key={index} history={history} />
                        ))
                    ) : (<h1>Wait...</h1>)
                }
            </Grid>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Pagination
                    count={paginatedPages}
                    color="primary"
                    onChange={handlePage}
                    page={+page}
                />
            </div>
        </>
    );
};

export default TourList;