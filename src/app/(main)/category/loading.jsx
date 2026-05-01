import React from 'react';
import { BeatLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <BeatLoader></BeatLoader>
        </div>
    );
};

export default loading;