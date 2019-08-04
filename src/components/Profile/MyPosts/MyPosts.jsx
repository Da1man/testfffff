import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  /*
  let posts =[
    {id: 1, post: 'Hi, how are you?', likesCount: 0},
    {id: 2, post: 'It\'s my first post', likesCount: 26},
    {id: 2, post: 'bla bla', likesCount: 211},
    {id: 2, post: 'ae ae', likesCount: 21},
]

*/

  let postsElements = props.posts 
  .map ( p => <Post message={p.post} likesCount ={p.likesCount} /> );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;