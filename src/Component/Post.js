import React from 'react'

import Display from './Display';
import { useStateValue } from '../Reducer/Stateprovider';

function Post() {
    const [{Postdata}, dispatch] = useStateValue();
    let message='';
if(!Postdata.length)
{
 message='You did Not  Post Any Comment';
}
else
{
    message='';
}
    return (
        < div className="">
         
              <div>
                   <h3>{message}</h3>
                    {Postdata.map((item,index)=>(
                <Display no={index+1} body={item.body} title={item.title}/>
            ))}
                </div>
            </div>
    );
}

export default Post;