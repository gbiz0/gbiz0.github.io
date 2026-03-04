import Navbar from '../navbar'
import { getAllPostsData } from '@/lib/posts'
import BlogContent from './blog-content'

export default function Blog() {
  const posts = getAllPostsData()

  return (
    <div className="layout-wrapper">
      <Navbar />
      <BlogContent posts={posts} />
    </div>
  )
}
