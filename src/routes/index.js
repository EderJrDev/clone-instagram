import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer className="bg-gray-200">
      <StackRoutes />
    </NavigationContainer>
  );
}
