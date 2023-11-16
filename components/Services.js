import React from 'react'

const Service_Data = [
  {
    id: Math.floor(Math.random) * 100,
    title: 'Web Development',
    icon: 'ri-earth-fill',
    desc: 'I am very good in web development offering services, I offer reliable web development services to generate the most remarkable results which your business need.',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Web Design',
    icon: 'ri-collage-line',
    desc: 'My primary goal is to provide quality services to clients thus assisting you to promote your business in the most effective way. A well design website is the major component of this strategy.',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Mobile App Development',
    icon: 'ri-android-line',
    desc: ' I personally provide clients with professional app development services.Get an Android or iOS application developed with a visual representation of your desired user-interface with customized functionalities and features.',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'IT Solutions',
    icon: 'ri-trophy-line',
    desc: "I am an IT experts providing system analysis skills in assessing and analyzing customer's needs for your business. We create exact specification for applications that helps facilitate your business activities.",
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Digital Marketing(SEO)',
    icon: 'bx bx-slideshow',
    desc: 'My digital marketing services will take your business to the next level, we offer remarkable digital marketing strategies that drives traffic to your website, your business, and improves your brand awareness to potential customers.',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Social Media Marketing',
    icon: 'bx bx-arch',
    desc: 'I present your brand on social media platforms by advertising your products and services so that people may start telling their friends and family about your quality services.',
  },
]
const Services = () => {
  return (
    <>
      <div className='row'>
        {Service_Data.map((serv) => (
          <div
            key={serv.id}
            className='col-lg-4 col-md-6 mb-4 d-flex align-items-stretch'
          >
            <div className='icon-box'>
              <div className='icon'>
                <i className={`${serv.icon}`}></i>
              </div>
              <h4>
                <a style={{ fontSize: '20px' }} href='#'>
                  {serv.title}
                </a>
              </h4>
              <p>{serv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Services
