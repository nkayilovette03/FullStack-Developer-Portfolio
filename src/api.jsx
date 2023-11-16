import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'posts')

export const getSlugs = () => {
  const paths = sync(`${POSTS_PATH}/*.mdx`)
  return paths.map((path) => {
    const parts = path.split('/')
    const fileName = parts[parts.length - 1]
    const [slug, _ext] = fileName.split('.')
    return slug
  })
}
export const getAllPosts = () => {
  const post = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
    })
    .reverse()
  return post
}
export const getPostFromSlug = (slug) => {
  var _a, _b, _c, _d
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)
  return {
    content,
    meta: {
      slug,
      cover_image: (_a = data.cover_image) !== null && _a !== void 0 ? _a : '',
      excerpt: (_a = data.excerpt) !== null && _a !== void 0 ? _a : '',
      title: (_b = data.title) !== null && _b !== void 0 ? _b : slug,
      tags: ((_c = data.tags) !== null && _c !== void 0 ? _c : []).sort(),
      date: ((_d = data.date) !== null && _d !== void 0
        ? _d
        : new Date()
      ).toString(),
    },
  }
}
