import React from 'react';

import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

import {useHomeFetch} from '../hooks/useHomeFetch';

import NoImage from '../images/no_image.jpg';


const Home = () => {
   const {state, loading, error} = useHomeFetch()

    return (
        <div>
            home
        </div>
    )
}

export default Home
