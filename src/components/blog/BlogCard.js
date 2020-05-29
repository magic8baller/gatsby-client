import React from 'react'

const BlogCard = ({title, slug, tags, url, reading_time, created_at, feature_image}) => {
  console.table(tags)
  return (
    <div>
      <h4>{title}</h4>
      <ul>{tags.map((t, idx) => <li key={slug+t}>{t.name}</li>)}</ul>
    </div>
  )
}

export default BlogCard
