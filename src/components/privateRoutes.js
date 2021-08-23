import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const token = useSelector(state => state.auth.token)
    if (token==='')
    {
        return <Redirect to='/register' />
    }
    return (
        <Route {...props}/>
    )

}

export default PrivateRoute