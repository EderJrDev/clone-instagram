import { Image, Text, TouchableHighlight, View } from "react-native";

const StoryItem = ({ image, name }) => (
  <>
    <View className="gap-2">
      <TouchableHighlight>
        <Image className="h-20 w-20 border-2 border-pink-500 rounded-full" source={{ uri: image }} />
      </TouchableHighlight>
      <Text>{name}</Text>
    </View>
  </>
);

export default StoryItem;