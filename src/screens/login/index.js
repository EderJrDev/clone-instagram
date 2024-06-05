import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Button from "../../components/button";

export default function Login({ navigation }) {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);

  return (
    <LinearGradient
      colors={['#FED8B1', '#FFB7B2', '#FDC7E1', '#E2C1F0']}
      locations={[0.0, 0.3, 0.6, 1.0]}
      style={{ flex: 1 }}
    >
      <View className="flex-1 mt-5">
        <StatusBar style="dark" translucent />
        <View className="p-5">
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View className="flex items-center">
          <Text className="text-xl font-bold">Português (Brasil)</Text>
          <View className="my-20">
            <Image
              className="w-20 h-20"
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/023/986/555/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png',
              }}
            />
          </View>
          <View className="w-full">
            <SafeAreaView>
              <TextInput
                placeholder="Nome de usuário"
                className="h-10 m-3 p-6 rounded-md border border-gray-300"
                onChangeText={onChangeText}
                value={text}
              />
              <TextInput
                className="h-10 m-3 p-6 rounded-md border border-gray-300"
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
              />
            </SafeAreaView>
            <View className="px-2">
              <Button
                text="Entrar"
                action={() => navigation.navigate("home")}
              />
            </View>
            <View className="items-center">
              <Text className="font-semibold text-sm">
                Esqueceu a senha?
              </Text>
            </View>
          </View>
        </View>
        <KeyboardAvoidingView
          className="m-auto absolute bottom-2 right-0 left-0 mx-4"
          behavior={Platform.OS === "ios" ? "padding" : null}
          enabled
        >
          <View className="flex flex-row justify-center pt-2">
            <View className="items-center w-full">
              <Pressable
                className="rounded-full py-2 px-4 my-3 h-12 text-center items-center w-full border border-blue-600"
              >
                <Text className="text-blue-600 text-center text-lg font-semibold my-auto">
                  Criar nova conta
                </Text>
              </Pressable>
              <View>
                <Image
                  className="w-20 h-10"
                  source={{
                    uri: 'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Meta-Black-Wordmark-900x0.png',
                  }}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
}
