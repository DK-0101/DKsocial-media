import React from 'react'
import "./Posts.scss";
import Post from '../Post/Post';

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Daykson Tavares",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "loresj ajhkah dandma oaejan ahajhsd akmanhd akhakhd",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Daykson Tavares",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "loresj ajhkah dandma oaejan ahajhsd akmanhd akhakhd",
    },
  ];

  return (
    <div className='posts'>
      {posts.map(post=> (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts
