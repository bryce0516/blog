import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Button,TouchableOpacity} from 'react-native'
import {Context as BlogContext} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
const IndexScreen = ({navigation}) => {
  const { state , addBlogPost,deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name='plus' size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove( )
    }
  },[])

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={(item) =>item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <Button title='go to next' onPress={() => navigation.navigate('Next')}/>
    </View>
  )
}

// IndexScreen.navigationOptions = () => {
//   return  {
//     headerRight: <Feather name='plus' size={30} />
      
    
//   }
// }

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10, 
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:'gray'
  },
  title: {
    fontSize: 18
  },
  icon:{
    fontSize:24
  }
});

export default IndexScreen