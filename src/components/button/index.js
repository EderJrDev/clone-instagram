import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
} from "react-native";

export default function Button({ text, textColor, background, action, loading }) {
  return (
    <View className="items-center w-full">
      <Pressable
        className={`rounded-full py-2 px-4 my-3 h-12 text-center ${textColor} items-center bg-blue-600 w-full ${loading && "opacity-50"
          }`}
        onPress={action}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" size="large" />
        ) : (
          <Text className="text-white text-center text-lg font-semibold my-auto">
            {text}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
