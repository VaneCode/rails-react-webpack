import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.message.message);
    useEffect(() => {
        dispatch(getGreeting());
    }, [dispatch]);

    return <h1>{greeting}</h1>
};

export default Greeting;