import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../images/search-icon.svg';
import { Wrapper, Content } from './Search.styles';

const Search = ({setSeachTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true);



    useEffect(() => {
        //skip initial render of useEffect
        if(initial.current){
            initial.current = false;
            return;
        }
        //timer to have a delay as user types in the search for a movie
        const timer = setTimeout(() => {
            setSeachTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    },[setSeachTerm, state]);


    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type="text" 
                    placeholder="Search Movies..." 
                    onChange={e => setState(e.currentTarget.value)}
                    value={state} 
                />
            </Content>
        </Wrapper>
    )
}

Search.propType = {
    setSeachTerm: PropTypes.string
}

export default Search
