import { View, TouchableOpacity, TouchableHighlight, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from '@expo/vector-icons';


const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isActivePage = (pageName) => {
    return route.name === pageName ? "pt-5 px-8 border-t-2 border-bgPadrao" : "mt-1 pt-4 px-8";
  };

  const isActivePageIcon = (pageName) => {
    return route.name === pageName ? "green" : "black;"
  };

  const isActiveHome = (pageName) => {
    return route.name === pageName ? "bg-bgPadrao p-5 rounded-full shadow-sm shadow-bgPadrao" : "bg-bgPadrao p-5 rounded-full";
  };

  return (
    <View
      className="flex-row justify-around pb-5 absolute bottom-0 w-full bg-white columns-2">
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <View className={isActivePage("feed")}>
          <Entypo name="home" size={26} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <View className={isActivePage("feed")}>
          <Ionicons name="search" size={26} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <View className={isActivePage("feed")}>
          <Feather name="plus-square" size={26} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <View className={isActivePage("feed")}>
          <Octicons name="video" size={26} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <View className={isActivePage("feed")}>
          <TouchableHighlight>
            <Image className="h-8 w-8 border rounded-full" source={{ uri: "https://avatars.githubusercontent.com/EderJrDev" }} />
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
