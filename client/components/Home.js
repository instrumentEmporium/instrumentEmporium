import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> Welcome to the Instrument Emporium!</h2>
    <button>
      <Link to="/instruments"> Explore all our products </Link>
    </button>
  </div>
)

export default Home;
