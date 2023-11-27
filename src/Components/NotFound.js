import React from 'react';
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Sorry page not found :(</h1>
                    </div>
                </div>
                <Link className='btn btn-secondary' to="/"> Go Back</Link>
            </div>
        </div>
    );
}

export default NotFound;
