import React, {useEffect, useState} from 'react';

const UsersList = () => {
    const [data, setData] = useState(null);

    useEffect(() => {// GET request using fetch inside useEffect React hook
        const fetchData = async () => {
            const data = await fetch("http://localhost:1000/api/names/");
            const json = await data.json();
            console.log(json)
            const namesList = json.response.map(person => person.full_name)
            setData(JSON.stringify(namesList))
        }

        fetchData().catch(console.error)
  /*      fetch("http://localhost:1000/api/names")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                const namesList = data.response.map(person => person.full_name)
                setData(JSON.stringify(namesList))
            })*/
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [])
    return (
        <>
            <p>{!data ? "Loading..." : data}</p>
        </>
    );
};

export default UsersList;