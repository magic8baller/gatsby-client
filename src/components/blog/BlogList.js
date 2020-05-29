import React from 'react'
import BlogCard from './BlogCard'
const BlogList = ({blogs}) => {
  // const blog=blogs.map(({node}) => <li key={node.slug} tags={node.tags.map(t => t)} {...node})
  console.log({blogs})
  return (
    <ul>
      {blogs.map(({node}) => <BlogCard key={node.slug} tags={node.tags.map(t => t)} {...node}/>)}
    </ul>
  )
}

export default BlogList
