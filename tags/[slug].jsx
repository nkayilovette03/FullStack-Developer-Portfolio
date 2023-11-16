// import React from 'react'
// import Head from 'next/head'
// import { getAllPosts } from '../../src/api'
// import Articles from '../../src/components/Articles'

// export default function TagPage({ slug, post }) {
//   return React.createElement(
//     React.Fragment,
//     null,
//     React.createElement(
//       Head,
//       null,
//       React.createElement('title', null, 'Tag: ', slug)
//     ),
//     React.createElement('h1', null, 'Tag: ', slug),
//     React.createElement(Articles, { post: post })
//   )
// }
// export const getStaticProps = async ({ params }) => {
//   const { slug } = params
//   const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug))
//   return {
//     props: {
//       slug,
//       posts: posts.map((post) => post.meta),
//     },
//   }
// }
// export const getStaticPaths = async () => {
//   const posts = getAllPosts()
//   const tags = new Set(posts.map((post) => post.meta.tags).flat())
//   const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }))
//   return {
//     paths,
//     fallback: false,
//   }
// }
