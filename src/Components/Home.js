import {React, useState} from 'react';
import Blog from './Blog';

const Home = () => {


    return (
      <>

        <div className='container-fluid' style={{ height:"100vh"}}>
          <div className="row">

            <Blog></Blog>
          </div>
        </div>
        </>
    );
}

export default Home;
