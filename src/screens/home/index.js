import { FlatList, SafeAreaView, ScrollView, View } from "react-native";

import Footer from "../../components/footer";
import Header from "../../components/header";
import PostItem from "../../components/posts";
import StoryItem from "../../components/stories";

import { POSTS } from "../../utils/data/posts";
import { STORIES } from "../../utils/data/stories";

export default function Home({ navigation }) {
  return (
    <View className="flex-1 mt-10">
      <Header navigation={navigation} />
      <ScrollView>
        <View className="p-2">
          <SafeAreaView>
            <FlatList
              data={STORIES}
              horizontal
              renderItem={({ item }) => <StoryItem image={item.image} name={item.name} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Espaçamento entre os itens
            />
          </SafeAreaView>
        </View>
        <View className="p-2">
          {POSTS.map(post => (
            <PostItem
              key={post.id}
              user={post.user}
              userImage={post.userImage}
              postImage={post.postImage}
              description={post.description}
            />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}
