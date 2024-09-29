import {useEffect,useState} from 'react';

function FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/data`)
            const newData = await response.json()
            setData(newData)
        };

        fetchData();
    }, [])

    if (data) {
        console.log(data)
        return <div className='FetchData'>{data.title}</div>;
    } else {
        return null;
    }

}

export default FetchData;