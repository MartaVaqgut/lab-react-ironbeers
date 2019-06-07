import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {


    return (
        <div className="container">
            <div className="home-unit">
                <Link className="link-class" to="/beers">
                    <img className="home-image" src="../../../img/beers.png" alt=""></img>
                    <div className="home-unit-text">
                        <h2>All Beers</h2>
                        <p>Lorem </p>
                    </div>
                </Link>
            </div>
            <div className="home-unit">
                <Link className="link-class" to="/random-beer">
                    <img className="home-image" src="../../../img/random-beer.png" alt=""></img>
                    <div className="home-unit-text">
                        <h2>Random Beers</h2>
                        <p>Lorem</p>
                    </div>
                </Link>
            </div>
            <div className="home-unit">
                <Link className="link-class mt-3" to="/new-beer">
                    <img className="home-image" src="../../../img/new-beer.png" alt=""></img>
                    <div className="home-unit-text">
                        <h2>New Beer</h2>
                        <p>Lorem</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home