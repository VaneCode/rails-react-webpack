import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greetings.greeting);
    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    return <h2 className="hello">{greeting}</h2>
};

export default Greeting;