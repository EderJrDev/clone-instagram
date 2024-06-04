import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#0c990c" }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="receipt-outline" color={color} size={18} />,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" color={color} size={18} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" color={color} size={18} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
