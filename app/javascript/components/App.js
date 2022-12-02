import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
    <div>
        <h1>Hello</h1>
        <Routes>
             <Route path="/" element={<Greeting />} />
        </Routes>
    </div>
)

export default App;