import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
        const {blog_image, author_image, name, read_time, title, } = props.post
        const readTime= props.readTime
        const bookmarked= props.bookmarked

    return (
        <div className='blog'>
            <img src={blog_image} alt="" />
            <div className='author'>
                <img src={author_image} alt="" />
                <div className='author-info'>
                    <h4>{name}</h4>
                    <p>Mar 14 (4 Days ago)</p>
                </div>
                <p className='read-time'>{read_time} min read <a onClick={()=>bookmarked(title)}> <FontAwesomeIcon icon={faBookmark}/></a></p>
            </div>
            <h1>{title}</h1>
            <p>#beginners #programming</p>
            <a onClick={()=>readTime(read_time)} className='mark'>Mark as read</a>
        </div>
    );
};

export default Blog;