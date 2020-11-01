import React, {useContext} from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
  const { state } = useContext(Context);
  
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={
          () => navigation.navigate('Edit',{id: navigation.getParam('id')})
        }>
          <EvilIcons name='pencil' size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>
        {blogPost.title}
      </Text>
      <Text>
        {blogPost.content}
      </Text>
    </View>
  )
}

export default ShowScreen