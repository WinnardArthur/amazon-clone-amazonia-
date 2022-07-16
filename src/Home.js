import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img src='/default.jpg' className='home__image' alt='' />

                <div className='home__row'>
                    <Product 
                        title="The lean startup"
                        price={29.99}
                        image="/default3.jpg"
                        rating={5}
                    />
                    <Product 
                        title="Awesome"
                        price={150.99}
                        image="/default.jpg"
                        rating={3}
                    />
                </div>
                <div className='home__row'>
                    <Product 
                        title="Trees"
                        price={229.99}
                        image="/default2.jpg"
                        rating={2}
                    />
                    <Product 
                        title="The lean startup"
                        price={2.99}
                        image="/default3.jpg"
                        rating={4}
                    />
                    <Product 
                        title="Growth"
                        price={129.99}
                        image="/default.jpg"
                        rating={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home