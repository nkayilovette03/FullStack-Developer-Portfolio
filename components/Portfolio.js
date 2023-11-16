import React from 'react'
import Link from 'next/link'

const Portfolio = ({ portfolio }) => {
  return (
    <>
      <div
        className={`col-lg-6 col-md-6 portfolio-item ${portfolio.frontmatter.category}`}
      >
        <div className='portfolio-wrap'>
          <img
            src={portfolio.frontmatter.cover_image}
            className='img-fluid'
            alt={portfolio.frontmatter.title}
            style={{ height: '25vh', width: '100%' }}
          />
          <div className='portfolio-info'>
            <h4>{portfolio.frontmatter.title}</h4>
            <p>{portfolio.frontmatter.excerpt}</p>
            <div className='portfolio-links'>
              <a
                href={portfolio.frontmatter.cover_image}
                data-gall='portfolioGallery'
                className='venobox'
                title={portfolio.frontmatter.title}
              >
                <i className='bx bx-plus'></i>
              </a>
              <Link href={`/portfolio/${portfolio.slug}`}>
                <a
                  data-gall='/portfolioDetailsGallery'
                  data-vbtype='iframe'
                  className='venobox'
                  title={portfolio.frontmatter.title}
                >
                  <i className='bx bx-link'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
