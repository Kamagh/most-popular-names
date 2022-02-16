import React, {useEffect, useState} from 'react';

const MostPopularName = () => {
    const [data, setData] = useState(null);

    useEffect(() => {// GET request using fetch inside useEffect React hook
        const fetchData = async () => {
            const response = await fetch("http://localhost:1000/api/names/most-popular");
            const json = (await response.json()).response;

            console.log(json)
            console.log(JSON.stringify(json))
            setData(JSON.stringify(json))
        }

        fetchData().catch(console.error)
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [])
    return (
        <>
            <p>{!data ? "Loading..." : data}</p>
        </>
    );
};

export default MostPopularName;
