import {useState, useEffect} from 'react';

const axios = require('axios');


const useGet = ({url, params, initialState}) => {
    //is loading error data

    const [data, setData] = useState(initialState);
    const [isFetching, setFetching] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        const get = async () => {
            try {
                const {data} = await axios.get(url,params);
                console.log(data);
                setData(data.results);
                setFetching(false)
            } catch {
                setError(true);
            }   
        };
        get();
    }, [url]);

    return [data, isFetching, error];

};

export default useGet;