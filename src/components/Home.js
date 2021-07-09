import React from 'react';
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import {useHomeFetch} from '../hooks/useHomeFetch';
import HeroImage from './HeroImage';
import NoImage from '../images/no_image.jpg';


const Home = () => {
   const {state, loading, error} = useHomeFetch()

    return (
        <>
            {state.results[1] ? 
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
                    title={state.results[1].original_title}
                    text={state.results[1].overview}
                 /> : null
            }
        </>
    )
}

export default Home
