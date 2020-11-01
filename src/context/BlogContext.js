import React, {useState, useReducer} from 'react'
import { View, Text } from 'react-native'
import createDataContext from './createDataContext'
import { floor } from 'react-native-reanimated'
import jsonserver from '../api/jsonserver'

// const BlogContext = React.createContext();


const blogReducer = (state, action) => {
  switch (action.type) {
    // case 'add_blogpost':
    //   return [
    //     ...state, 
    //     {
    //       id:Math.floor(Math.random()* 99999),
    //       title: action.payload.title,
    //       content: action.payload.content
    //     }
    //   ]
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id ===action.payload.id
          ? action.payload
          : blogPost
      })
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload )
    case 'get_blogposts':
      return action.payload;
    default:
      return state;
  }
}

const getBlogPosts = dispatch => {
  return async() => {
    const response = await jsonserver.get('/blogposts')
    
    dispatch({ type: 'get_blogposts', payload:response.data})
  }
}

const addBlogPost = dispatch => {
  return async (title,content,callback) => {
    await jsonserver.post('/blogposts', {title, content})
  
  //   dispatch({type: 'add_blogpost', payload: {title, content}});
    if (callback){
      callback()
    }
  }
}

const deleteBlogPost = dispatch => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`)
    dispatch({type:'delete_blogpost', payload: id})
  }
}
const editBlogPost = dispatch => {
  return async (id, title,content,callback) => {
    await jsonserver.put(`/blogposts/${id}, { title, content}`)
    
    dispatch({ type: 'edit_blogpost',payload:{id,title,content}})
    if (callback){
      callback()
    }
  }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost,editBlogPost,getBlogPosts},
    []
  );

//using usereducer
// export const BlogProvider = ({children}) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);
//   const addBlogPost = () => {
//     dispatch({type: 'add_blogpost'});
//   }

  //using usestate
  // const [blogPosts, setBlogPosts] = useState([]);
  // const addBlogPost = () => {
  //   setBlogPosts([
  //     ...blogPosts, 
  //     {title: `Blog Post #${blogPosts.length + 1}`}
  //   ])
  // }


  // const deleteBlogPost = () => {
    
  // }

//   return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>{children}</BlogContext.Provider>
// }

// export default BlogContext;