import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { BlogContext } from "./context/BlogContext";

const IndexScreen = () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add blogPost" onPress={() => addBlogPost()} />
      {blogPosts.map((post, index) => (
        <Text key={index}>{post.title}</Text>
      ))}

      <FlatList
        keyExtractor={(item) => item.title} // Utilisation d'un index comme cl
        data={blogPosts}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
