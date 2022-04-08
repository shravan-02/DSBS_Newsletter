import React from 'react'
import { PostCard, Categories, PostWidget } from "../components"
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'


export default function newsletter ({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-10">
    {/* <FeaturedPosts /> */}
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className='lg:sticky relative top-8'>
            {/* <Categories /> */}
            <PostWidget />
            
          </div>
        </div>
      </div>
      </div>
  )
}


export async function getStaticProps(){
    const posts = (await getPosts()) || [];
  
    return {
      props: { posts }
    }
  }