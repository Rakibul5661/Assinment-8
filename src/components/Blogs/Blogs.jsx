import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from './Blog/Blog';
import Bookmarked from './bookmarked/Bookmarked';
import Header from '../Header/Header';


const Blogs = () => {

    const [posts , setPost] = useState([]);
    const [increase , setIncrease] = useState(0);
    const [bookmarke, setBookmarked] = useState([])
    console.log(bookmarke)

    useEffect( () =>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setPost(data))
    } ,[])

    const readTime = (time) =>{setIncrease(increase + time)}

    const bookmarked = (title) =>{
        if(!bookmarke.includes(title)){
            setBookmarked([...bookmarke,title])
        }
        else{
            alert ('item already exiest')
        }
    }



    return (
        <div>
            <Header></Header>
            <div className='blogs-container'>
            <div className='blogs'>
                {
                    posts.map(post=> <Blog
                        post={post}
                        key={post.id}
                        readTime={readTime}
                        bookmarked={bookmarked}
                        ></Blog>)
                }
                
            </div>
            <div className='sidebar'>
                <div className='total-read-time'>
                    <h3>Spend time on read: {increase} min</h3>
                </div>
                <div className='bookmarked'>
                    <h3>Bookmarked Blogs : {bookmarke.length}</h3>
                    {
                        bookmarke.map(singleItem => <Bookmarked item={singleItem}></Bookmarked>)
                    }
                    
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Blogs;