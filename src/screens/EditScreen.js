import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet,TextInput } from 'react-native'
import { Context } from '../context/BlogContext' 
import BlogPostForm from '../component/BlogPostForm'

const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state, editBlogPost } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === id
    )

  return <BlogPostForm 
    initialValues={{ title:blogPost.title, content:blogPost.content}}
    onSubmit={(title,content) => {
      editBlogPost(id,title,content,() => navigation.pop())
  }}/>

  //  (
  //   <View>
  //     <Text style={styles.label}>Edit Title: {title}</Text>
  //     <TextInput  t style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
  //     <Text style={styles.label}>Edit Content: {content}</Text>
  //     <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
  //   </View>
  // )

} 
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 10,
    padding:5,
    margin:5
  },
  label:{
    fontSize: 20,
    marginBottom: 10,
    marginLeft:5

  }

});

export default EditScreen