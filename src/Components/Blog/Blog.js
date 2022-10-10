import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='blog-container'>
                <h2 className='collapsible'>Question: What is the purpose of React router?</h2>
                <h6>Answer:</h6>
                <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                <p>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
            </div>
            <div className='blog-container'>
                <h2>Question: How does context API work?</h2>
                <h6>Answer:</h6>
                <p>The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling. In this article, Toptal Freelance Javascript Developer Boris Yordanov will introduce us to the API and illustrate it with two basic web store apps, one built with the Context API and one without it.</p>
            </div>
            <div className='blog-container'>
                <h2>Question: What is useRef hook?</h2>
                <h6>Answer:</h6>
                <p>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. </p>
                <p>Some of the use cases of useRef hook are:</p>

                <p>1. To access DOM elements</p>
                <p>2. To persist values in successive renders</p>
            </div>
        </div>
    );
};

export default Blog;