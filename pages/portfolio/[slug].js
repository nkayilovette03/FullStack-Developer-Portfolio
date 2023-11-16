/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Head from 'next/head'

const PortfolioPage = ({
  frontmatter: {
    title,
    client,
    date,
    project_url,
    project_type,
    cover_image,
    desc,
  },
  slug,
  // content,
}) => {
  return (
    <>
      <Head>
        <link href='lib/bootstrap/css/bootstrap.min.css' rel='stylesheet' />
        <link href='lib/icofont/icofont.min.css' rel='stylesheet' />
        <link href='lib/remixicon/remixicon.css' rel='stylesheet' />
        <link href='lib/owl.carousel/owl.min.css' rel='stylesheet' />
        <link href='lib/boxicons/css/boxicons.min.css' rel='stylesheet' />
        <link href='lib/venobox/venobox.css' rel='stylesheet' />
        <link href='lib/ionicons/ionicons.min.css' rel='stylesheet' />
        {/* Styles End */}
        <script src='lib/jquery/jquery.min.js'></script>
        <script src='lib/bootstrap/js/bootstrap.bundle.min.js'></script>
        <script src='lib/jquery.easing/jquery.easing.min.js'></script>
        {/* <script src='lib/php-email-form/validate.js'></script> */}
        <script src='lib/waypoints/jquery.waypoints.min.js'></script>
        <script src='lib/counterup/counterup.min.js'></script>
        <script src='lib/owl.carousel/owl.min.js'></script>
        <script src='lib/isotope-layout/isotope.pkgd.min.js'></script>
        <script src='lib/venobox/venobox.min.js'></script>
      </Head>
      <main id='main'>
        <div id='portfolio-details' className='portfolio-details'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-8'>
                <h2 className='portfolio-title'>{title}</h2>
                {/* <PortfolioCarousel image={image} /> */}
                <img
                  src={cover_image}
                  className='img-fluid'
                  alt=''
                  // style={{ height: '70vh', width: '100%' }}
                />
                <div className='portfolio-info' style={{ marginTop: '10px' }}>
                  <h3>About The Project</h3>
                  <ul>
                    <li style={{ color: '#fff' }}>{desc}</li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-4 portfolio-info mt-4'>
                <h3>Project information</h3>
                <ul>
                  <li style={{ color: '#fff' }}>
                    <strong>Category:</strong> <span>{project_type}</span>
                  </li>
                  <li style={{ color: '#fff' }}>
                    <strong>Client: </strong>
                    <span> {client}</span>
                  </li>
                  <li style={{ color: '#fff' }}>
                    <strong>Project date:</strong> <span>{date}</span>
                  </li>
                  <li style={{ color: '#fff' }}>
                    <strong>Project URL:</strong>{' '}
                    <a className='project_url' href={project_url}>
                      <span> {project_url}</span>
                    </a>
                  </li>
                </ul>

                {/* <div
                  dangerouslySetInnerHTML={{ __html: marked(content) }}
                ></div> */}
                {/* {item.description} */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className='credits'>
        Designed by <a href='/'>Chacodaar(CUI)</a>
      </div>
    </>
  )
}

export default PortfolioPage

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('portfolios'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('portfolios', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
