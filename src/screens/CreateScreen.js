import React, {useContext, useState} from 'react'
import { View, Text,StyleSheet,TextInput, Button } from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../component/BlogPostForm'

const CreateScreen = ({navigation}) => {
  const { addBlogPost } = useContext(Context);
  return <BlogPostForm onSubmit={(title, content) => {
    addBlogPost(title,content,() => navigation.navigate('Index'))
  }} />
    // <View>
    //   <Text style={styles.label}>Enter Title: {title}</Text>
    //   <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
    //   <Text style={styles.label}>Enter Content: {content}</Text>
    //   <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
    //   <Button title='Add Blog Post' onPress={() => {
    //       addBlogPost(title, content, () => {navigation.navigate('Index')})
    //       }
    //     }/>
    // </View>
  
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding:5,
    margin:5
  },
  label:{
    fontSize: 20,
    marginBottom: 10,
    marginLeft:5

  }
})
export default CreateScreen