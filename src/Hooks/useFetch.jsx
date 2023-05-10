import { useEffect, useState } from "react";
import {fetchApi} from '../API_Service/api'

import React from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchApi(url)
        .then((res) => {
            setData(res)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false);
            setError("Error in fetching")
        });
    }, [url]);

    return {data, loading, error};

}

export default useFetch
