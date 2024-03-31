// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogItems} = props
  return (
    <div>
      <li className="blog-container">
        <BlogItem blogs={blogItems} />
      </li>
      <hr className="line" />
    </div>
  )
}
export default BlogList
