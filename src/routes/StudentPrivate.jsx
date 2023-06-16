import React from 'react';
import useStudent from './../hooks/useStudent';
import { Navigate } from 'react-router-dom';

const StudentPrivate = ({children}) => {
    const [isStudent] = useStudent(); 

    if(!isStudent){
        return <Navigate to='/'></Navigate>
    }

    return children;
};

export default StudentPrivate;