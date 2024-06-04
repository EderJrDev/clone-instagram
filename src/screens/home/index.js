import { FlatList, Image, Text, TouchableHighlight, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from "../../components/footer";
import { SafeAreaView } from "react-native-web";

export default function Home() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: '"https://avatars.githubusercontent.com/EderJrDev"',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      image: '"https://avatars.githubusercontent.com/EderJrDev"',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      image: '"https://avatars.githubusercontent.com/EderJrDev"',
    },
  ];

  const Item = ({ image }) => (
    <TouchableHighlight>
      <Image className="h-16 w-16 border border-purple-400 rounded-full" source={{ uri: image }} />
    </TouchableHighlight>
  );

  return (
    <View className="flex-1">
      <Text> aoba</Text>
      <View className="flex flex-row justify-between p-5">
        <View>
          <Text>
            Instagram
          </Text>
        </View>
        <View className="flex flex-row gap-5">
          <View>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
          <View>
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
          </View>
        </View>
      </View>
      <View className="p-2">
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item image={item.image} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
      <Footer />
    </View>
  )
}