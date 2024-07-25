import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'

import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";


const router = createBrowserRouter([
  {
    path: "/",
    // App layout k liye h
    element: <App />,                                 //done------
    children: [
        {
            path: "/",                
            element: <Home />,                        //done-----
        },
        {
             //Arrow jate hi path match hute hi click kare gy active true hu jaye ga children show hu jaye gy
            path: "/login",
            element: (                        
                <AuthLayout authentication={false}>
                    <Login />                        
                </AuthLayout>
            ),
        },
        {  
            //Arrow jate hi path match hute hi click kare gy active true hu jaye ga children show hu jaye gy
            path: "/signup",                            //done-----
            element: (
                <AuthLayout authentication={false}>   
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (                      //done---
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />            
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (                      // allmost----
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (                     // done------
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,              //done
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <RouterProvider router={router}/>
    </Provider>
  
)
