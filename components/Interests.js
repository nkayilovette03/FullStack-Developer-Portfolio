import React from 'react'

const interest = [
  {
    id: Math.floor(Math.random) * 100,
    title: 'Shopping',
    icon: 'ri-store-line',
    color: '#ffbb2c',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Code',
    icon: 'ri-braces-fill',
    color: '#5578ff',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Gaming',
    icon: 'ri-xbox-fill',
    color: '#29cc61',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Work On Time',
    icon: 'ri-calendar-todo-line',
    color: '#e80368',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Painting',
    icon: 'ri-paint-brush-line',
    color: '#e361ff',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Sports',
    icon: 'ri-basketball-fill',
    color: '#47aeff',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Push To Git',
    icon: 'ri-git-repository-fill',
    color: '#71aa12',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Sleep',
    icon: 'ri-shut-down-line',
    color: '#11dbcf',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Never Giveup',
    icon: 'ri-trophy-line',
    color: '#4233ff',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Investment',
    icon: 'ri-money-dollar-circle-line',
    color: '#ffa76e',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Listen To Muzik',
    icon: 'ri-disc-line',
    color: '#b20969',
  },
  {
    id: Math.floor(Math.random) * 100,
    title: 'Sports',
    icon: 'ri-football-fill',
    color: '#ff5828',
  },
]

const Interests = () => {
  return (
    <div className='row'>
      {interest.map((i) => (
        <div key={i.id} className='col-lg-3 col-md-4 col-sm-6 mt-4'>
          <div className='icon-box'>
            <i className={`${i.icon}`} style={{ color: `${i.color}` }}></i>
            <p style={{ marginTop: '15px' }}>{i.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Interests
