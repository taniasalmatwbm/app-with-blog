//import React, {useEffect, useState} from 'react'
//import appwriteService from "../appwrite/config";
import {Container, Button} from '../components'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     appwriteService.getPosts().then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])
    const authStatus = useSelector(state => state.auth.authStatus)
  
   
        return (
            <div className="w-ful flex justify-center items-center">
                <Container>
                    <div className="flex h-screen  pt-60 flex-wrap justify-center">
                        <div className=" w-full">
                            <h1 className="font-bold hover:text-blue-500 text-center text-6xl">
                             Welcome to <span style={{ color: 'lightseagreen' }}>ProsePond!</span>
                            </h1>
                            <p className=" text-3xl text-center text-gray-500">-Where prose finds its tranquil home.</p>
                            <div className="w-full text-center mt-14">
                                {authStatus ? (
                                    <Link to='/all-posts'>
                                        <Button>
                                            Deep dive!
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to='/login'>
                                        <Button>
                                            Get Started
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
}

export default Home