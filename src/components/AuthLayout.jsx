import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")s
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
             //true && false !== true = true  // it will b ignore bcz if false pr nhi chalta
        if(authentication && authStatus !== authentication){
            navigate("/login")
            // false && true !== true = false
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        console.log("AuthLayout authStatus", authStatus)
        console.log("AuthLayout authentication", authentication)
        setLoader(false)
    }, [authStatus, navigate, authentication])
    // console.log(children)
  return loader ? <h1>Loading...</h1> : 
  <>{children}</>
}
