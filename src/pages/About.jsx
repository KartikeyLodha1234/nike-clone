import React from 'react'
import '../styles/Company.css'

export default function About() {
  return (
    <div className="company-page">
      <div className="company-header">
        <h1>About Nike</h1>
        <p>Serving Athletes All Over the World</p>
      </div>

      <div className="company-container">
        <section className="company-section">
          <h2>Our Mission</h2>
          <p>
            To bring inspiration and innovation to every athlete in the world. If you have a body, you are an athlete.
          </p>
        </section>

        <section className="company-section">
          <h2>Our Story</h2>
          <p>
            Nike was founded in 1964 as Blue Ribbon Sports by University of Oregon track athlete Phil Knight and his coach Bill Bowerman. 
            The company officially became Nike, Inc. in 1971. From those humble beginnings to our position today as a global leader in 
            athletic footwear and apparel, we've stayed true to our mission of serving athletes.
          </p>
          <p>
            We believe in the power of human potential. We're dedicated to the relentless pursuit of innovation and creating the best 
            sports products and experiences. Whether you're an elite athlete or someone who just wants to move more, we're here to help 
            you achieve your goals.
          </p>
        </section>

        <section className="company-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>
              <strong>Excellence:</strong> We strive for the highest standards in everything we do.
            </li>
            <li>
              <strong>Innovation:</strong> We push boundaries to create breakthrough products and experiences.
            </li>
            <li>
              <strong>Authenticity:</strong> We stay true to our heritage while embracing the future.
            </li>
            <li>
              <strong>Sustainability:</strong> We're committed to reducing our environmental impact and supporting communities.
            </li>
            <li>
              <strong>Diversity & Inclusion:</strong> We believe in creating opportunities for all athletes and employees.
            </li>
          </ul>
        </section>

        <section className="company-section">
          <h2>What We Do</h2>
          <p>
            Nike designs, develops, and markets a wide range of athletic footwear, apparel, equipment, and accessories. 
            Our product categories include:
          </p>
          <ul className="products-list">
            <li>Running shoes and apparel</li>
            <li>Basketball shoes and gear</li>
            <li>Training and gym wear</li>
            <li>Sports equipment and accessories</li>
            <li>Lifestyle and casual wear</li>
            <li>Digital fitness experiences</li>
          </ul>
        </section>

        <section className="company-section">
          <h2>Global Presence</h2>
          <p>
            With headquarters in Beaverton, Oregon, Nike operates in more than 190 countries worldwide. 
            Our global team is dedicated to serving athletes across every continent, sport, and lifestyle.
          </p>
        </section>
      </div>
    </div>
  )
}
