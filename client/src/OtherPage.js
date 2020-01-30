import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            I'm sone other Page!
            <Link to="/">Go back home</Link>
        </div>
    );
};