import { getPostData, getAllPostsData } from '@/lib/posts'
import Navbar from '../../navbar'
import PostContent from './post-content'

export async function generateStaticParams() {
  const posts = getAllPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postData = await getPostData(slug)

  return (
    <div className="layout-wrapper">
      <Navbar />
      <PostContent postData={postData} />
    </div>
  )
}
