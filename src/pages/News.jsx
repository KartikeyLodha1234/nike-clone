import React from 'react'
import '../styles/Company.css'

export default function News() {
  const [news] = React.useState([
    {
      id: 1,
      date: 'February 3, 2026',
      title: 'Nike Launches New Air Max Series',
      description: 'Revolutionary design meets comfort in our latest Air Max collection, featuring advanced cushioning technology and sustainable materials.',
      image: '📰'
    },
    {
      id: 2,
      date: 'January 28, 2026',
      title: 'Nike Commits to Carbon Neutrality by 2050',
      description: 'We\'ve announced our ambitious sustainability goals to reduce our environmental impact and lead the industry towards a better future.',
      image: '🌱'
    },
    {
      id: 3,
      date: 'January 15, 2026',
      title: 'New Global Partnership with Olympic Athletes',
      description: 'Nike partners with elite athletes worldwide to co-create innovative products that push the boundaries of performance.',
      image: '🏅'
    },
    {
      id: 4,
      date: 'December 20, 2025',
      title: 'Nike Opens Innovation Hub in Tokyo',
      description: 'Expanding our presence in Asia with a state-of-the-art innovation center focused on design and technology.',
      image: '🏢'
    },
    {
      id: 5,
      date: 'December 10, 2025',
      title: 'Winter Collection Now Available',
      description: 'Stay warm and stylish with our new winter collection featuring thermal technology and premium materials.',
      image: '❄️'
    },
    {
      id: 6,
      date: 'November 30, 2025',
      title: 'Nike Foundation Donates $50M to Youth Sports Programs',
      description: 'Supporting youth development through sports and fitness programs in underserved communities worldwide.',
      image: '💪'
    }
  ])

  return (
    <div className="company-page">
      <div className="company-header">
        <h1>Nike News</h1>
        <p>Stay Updated with the Latest from Nike</p>
      </div>

      <div className="company-container">
        <section className="company-section">
          <h2>Latest Updates</h2>
          <div className="news-grid">
            {news.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-icon">{item.image}</div>
                <div className="news-date">{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#read-more" className="read-more">Read More →</a>
              </div>
            ))}
          </div>
        </section>

        <section className="company-section">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest Nike news, product launches, and updates delivered to your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </section>
      </div>
    </div>
  )
}
