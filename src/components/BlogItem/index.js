// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogs} = props
  const {title, description, publishedDate} = blogs
  return (
    <div className="bg-container">
      <div className="top">
        <h1 className="titles">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="content">{description}</p>
    </div>
  )
}
export default BlogItem
