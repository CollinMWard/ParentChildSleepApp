import EncryptedStorage from 'react-native-encrypted-storage';


/*
The data stored using react-native-encrypted-storage is securely stored in the device's secure storage mechanisms:

On iOS: The data is stored in the Keychain, which is a secure storage container provided by iOS for storing sensitive information.
On Android: The data is stored in the EncryptedSharedPreferences, which is a secure storage mechanism provided by Android for storing sensitive information.
These storage mechanisms ensure that the data is encrypted and protected from unauthorized access, providing a secure way to handle sensitive information in your application.

*/
// Store data asynchronously with encryption
export const storeData = async (key, value) => {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));  // Store as a string
    console.log("Data stored securely");
  } catch (error) {
    console.error("Error storing encrypted data:", error);
  }
};

// Retrieve data asynchronously with decryption
export const getData = async (key) => {
  try {
    const value = await EncryptedStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);  // Parse the string back to JSON
    }
    return null;
  } catch (error) {
    console.error("Error retrieving encrypted data:", error);
  }
};

// Remove data asynchronously
export const removeData = async (key) => {
  try {
    await EncryptedStorage.removeItem(key);
    console.log("Data removed successfully");
  } catch (error) {
    console.error("Error removing data:", error);
  }
};
