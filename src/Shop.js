import  react, { useEffect, useState } from "react"
import './App.css'
import {Link} from 'react-router-dom';

export function Shop(props) {

    useEffect(()=>{
        fetchItems();
    },[]);
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items =  await data.json();
         console.log(items.data);
         setItems(items.data);
    }

    return (
        <div>
            {items.map(curr=>(

           
            <h1 key={curr.itemId}>
                <Link to={`/shop/${curr.itemId}`}> {curr.item.name}</Link>
                </h1>
            ))}
           
        </div>
    )
}
