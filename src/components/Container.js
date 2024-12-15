import React from 'react';
import shanghai from "./assets/shanghai.jpg";
import london from "./assets/london.jpg";
import paris from "./assets/paris.jpg";

const container = () => {
    return (
        <div>
            <section class="cards-section">
                <h2 class="section-title">We Code at EvolveD</h2>
                <div class="cards-container">
            
                    <div class="card">
                        <img src={Shanghai} alt="Shanghai"/>
                        <h3>Shanghai</h3>
                        <p>Learn to code with us in Shanghai.</p>
                    </div>
            
                    <div class="card">
                        <img src={london} alt="London"/>
                        <h3>London</h3>
                        <p>Learn to code with us in London.</p>
                    </div>
            
                    <div class="card">
                        <img src={paris} alt="Paris"/>
                        <h3>Paris</h3>
                        <p>Learn to code with us in Paris.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default container;