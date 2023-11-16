/* eslint-disable @next/next/no-sync-scripts */
import '../styles/globals.css'
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `

  return (
    <>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: setInitialTheme,
          }}
        />
      </head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
