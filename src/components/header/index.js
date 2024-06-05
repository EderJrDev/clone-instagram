import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className="flex flex-row justify-between p-5">
      <View>
        <Text className="text-xl font-bold">
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

  )
}

export default Header