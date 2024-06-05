import { Image, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const PostItem = ({ user, userImage, postImage, description }) => (
  <View className="mb-5">
    <View className="flex flex-row items-center p-2">
      <Image className="h-10 w-10 rounded-full mr-3" source={{ uri: userImage }} />
      <Text className="font-bold">{user}</Text>
    </View>
    <Image className="w-full h-96" source={{ uri: postImage }} />
    <View className="p-3">
      <View className="flex flex-row justify-start gap-3 mb-2">
        <AntDesign name="hearto" size={24} color="black" />
        <FontAwesome5 name="comment" size={24} color="black" />
        <Feather name="send" size={24} color="black" />
      </View>
      <Text className="font-bold">{user} <Text className="font-normal">{description}</Text></Text>
    </View>
  </View>
);

export default PostItem;