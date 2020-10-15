import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { Sections } from "../elements/SectionElements"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Sections className="section blog-section" style={{background: "var(--clr-grey-9)"}}>
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          Alla artiklar
        </Link>
      )}
    </Sections>
  )
}
export default Blogs
