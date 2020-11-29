import React from 'react'
import Display from './Display';
import { useStateValue } from '../Reducer/Stateprovider';

function Userget() {
    const [{FetchData}, dispatch] = useStateValue();

    return (
        <div>
            <div>
                {FetchData.map((item,index)=>(
                <Display no= {index+1}
                title={item.title} body={item.body}/>
            ))}
            </div>
        </div>
    );
}

export default Userget;