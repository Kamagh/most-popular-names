import React, {useEffect, useState} from 'react';

const MostPopularName = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:1000/api/names/most-popular");
            const json = (await response.json()).response;
            setData(json);
        }

        fetchData().catch(console.error)
    }, [])
    return (
        <>
            {!data ? "Loading..."
                : /*Object.entries(data).map(el => <p>{el.join(" - ")} if we want to show the count of occurences*/
                Object.keys(data).map(el => <p>{el}
            </p>)}
        </>
    );
};

export default MostPopularName;
