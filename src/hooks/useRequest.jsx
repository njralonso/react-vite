import { useState, useEffect } from "react";

const useRequest = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const apiCall = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Api caída(?)')

                const data = await res.json();
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                console.error(error)
                setLoading(false)
            }
        };
        apiCall()
        return () => { };
    }, []);
    return { data, loading, error }
}

export default useRequest

export const useRequestByName = (url, name) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const apiCall = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Api caída(?)')

                const data = await res.json();
                const animesCollectionByName = data.data
                const filterAnimesByStrictName = animesCollectionByName.find((data) => data.title === name)
                setData(filterAnimesByStrictName)
                console.log(filterAnimesByStrictName, "Custom Hook useRequestByName")

                setLoading(false)
            } catch (error) {
                setError(error.message)
                console.error(error)
                setLoading(false)
            }
        };
        apiCall()
        return () => { };
    }, []);
    return { data, loading, error }
}