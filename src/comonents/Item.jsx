
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item2 from './Item2';

function Item() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            // const response = await axios.get('https://dummyjson.com/products');
            const response = await axios.get('https://fakestoreapi.com/products');

            setData(response.data);
        } catch (error) {
            console.log('error in get product api', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='d-flex justify-content-between flex-wrap'>
            {data.length > 0 && data.map((e, i) => <Item2 key={i} data={e} />)}
        </div>
    );
}

export default Item;
