import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  console.log(relatedPosts)

  // return (
  //   <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
  //     <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-black">
  //       {slug ? 'Related Posts' : 'Recent Posts'}
  //     </h3>
  //     {relatedPosts.map((post) => (
  //       <div key={post.title} className="mb-4 flex w-full items-center text-black">
  //         <div className="w-16 flex-none">
  //           <img
  //             alt={post.title}
  //             height="60px"
  //             width="60px"
  //             className="rounded-full align-middle"
  //             src={post.featuredImage.url}
  //           />
  //         </div>
  //         <div className='flex-grow ml-4'>
  //           <p className='text-gray-500 font-xs'>
  //             {moment(post.createdAt).format('MMM D, YYYY')}
  //           </p>
  //           <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
  //             {post.title}
  //           </Link>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // )
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-black">
        DATA CHRONICLE
      </h3>
        <div className="mb-4 flex w-full text-center items-center text-black">
            <p className='text-gray-700 text-center items-center font-xs'>
              OFFICIAL DSBS NEWSLETTER <br></br>
              SCHOOL OF COMPUTING <br></br>
              SRM INSTITUTE OF SCIENCE AND TECHNOLOGY KATTANKULATHUR
            </p>
            {/* <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link> */}
          </div>
    </div>
  )
}

export default PostWidget
