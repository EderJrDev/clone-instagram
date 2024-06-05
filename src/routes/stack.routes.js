import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "card" }}
    >
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}