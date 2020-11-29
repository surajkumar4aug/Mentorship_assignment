import React,{useState,useEffect} from 'react'
import Post from './Post';
import './UserPost.css';
import {useStateValue} from "../Reducer/Stateprovider";
import Userget from './Userget';
function Product() {
    const [{FetchData}, dispatch] = useStateValue();
    const [title, dis] = useState();
    const [body, disp] = useState();
    const [error, Error] = useState('');
    const [success, Success] = useState('');
    const  Fetchdata=()=>
 {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => 
    dispatch({
        type:'Fetch',
        item:json
        ,
    })).catch((err)=>console.log(err)
      )};
    useEffect(() => {
        Fetchdata();
        
    },);
    const Postcomment=() =>{
if(title && body)
{
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method : 'POST',
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify({
              body:body,
              title:title
          }),
        })
        .then(res =>res.json())
        .then((post) =>  dispatch({
            type:'Post',
            item:post,
        })).catch((err)=>console.log(err)
        )
        Error("");
        Success("Successfully Submited");
    }
    else{
        Success("");
        Error("Please Enter All Field");
    }
   }
    return (
        <div>
            <div className="container">
                
        <div className="card">
            <h3>    Please Comment Here</h3>
           <p className="error"> { error}</p>
           <p className="success"> { success}</p>
        <input placeholder="Enter Title" value={title} onChange={e=>{dis(e.target.value);Error("");Success("")}}/>
            <br/><br/>
         <textarea placeholder="Enter Body" value={body} onChange={e=>{disp(e.target.value);Error("");;Success("")}} />
            <br/> 
             <button onClick={Postcomment}>Submit</button>
             <br/>
             </div><br/><br/>
             </div>
             <h1 align='center'>Your Post</h1>
             <div className="Userpost">
             <Post/>
             </div>
             <h1 align='center'>Fetching Data</h1>
             <div className="Userpost">
            <Userget/>
            </div>  
        </div>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

export default Product