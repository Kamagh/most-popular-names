import React, {useState} from 'react';
import {useQuery} from 'react-query';

const fetchNames = async (key, century) => {
    const res = await fetch(`http://localhost:1000/api/names/most-popular/?century=${century}`);
    return res.json();
}
const MostPopularNameInCentury = () => {
    const {cent, setCent} = useState('20th')
    const {data, status} = useQuery(['century', cent], fetchNames);
    return (
        <div>
            <h2>Most Popular Names in Different Centuries</h2>
            <button onClick={() => setCent('20th')}>20th c</button>
            <button onClick={() => setCent('21th')}>21th c</button>

            {
                status === `loading` && (<div>Loading data</div>)
            }
            {
                status === `error` && (<div>Error fetching data</div>)
            }
            {
                status === `success` && (
                    <div>
                        {data.results.map(el => <p>{el}</p>)}
                    </div>
            )}
        </div>
    );
};

export default MostPopularNameInCentury;