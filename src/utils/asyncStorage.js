import AsyncStorage from "@react-native-async-storage/async-storage";

async function getMyStringValue(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
    return 'erro';
  }
}

async function getMyObject(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
}

async function setStringValue(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

async function setObjectValue(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
}

async function removeValue(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
}

async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
}

export {
  getMyStringValue,
  getMyObject,
  setStringValue,
  setObjectValue,
  removeValue,
  clearAll
};
