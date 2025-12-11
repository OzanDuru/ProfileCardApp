// App.js

// 1) Expo'nun font yükleme hook'unu import ediyoruz
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import ProfileScreen from './screens/ProfileScreens';

export default function App() {
  // 2) useFonts hook'u ile custom fontlarımızı yüklemeye çalışıyoruz
  //    useFonts bize [fontsLoaded] diye bir boolean döndürüyor.
  const [fontsLoaded] = useFonts({
    // Sol taraftaki key'ler (Montserrat, MontserratBold) bizim vereceğimiz isimler.
    // Sağ taraftaki require içindeki path ise proje içindeki gerçek font dosyasının yolu.
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  // 3) Eğer fontlar henüz yüklenmediyse, hiçbir şey render etmiyoruz (null dönüyoruz).
  //    İstersen burada bir <ActivityIndicator /> ya da "Loading..." text de gösterebilirsin.
  if (!fontsLoaded) {
    return null;
  }

  // 4) Fontlar yüklendiyse asıl UI'mizi return ediyoruz.
  return (
    <ProfileScreen />
  );
}

// 5) StyleSheet ile stil tanımlıyoruz
const styles = StyleSheet.create({
  container: {
    // Tüm ekranı kapla
    flex: 1,
    // Dikeyde ortala
    justifyContent: 'center',
    // Yatayda ortala
    alignItems: 'center',
    // Arka plan rengi istersen ekleyebilirsin:
    // backgroundColor: '#fff',
  },
  text: {
    // Buradaki isim, useFonts içindeki key ile birebir aynı olmalı
    fontFamily: 'MontserratBold',
    fontSize: 24,
  },
});
