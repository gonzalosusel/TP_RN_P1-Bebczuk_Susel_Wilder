import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Button, Pressable, TextInput, Alert, Platform } from 'react-native';
import { useState } from 'react';

export default function App() {
  let [user, setUser] = useState({
    nombre: "",
    telefono: "",
    email: "",
    clave: ""
  });

  const stringuser = () => `Nombre: ${user.nombre}, Telefono: ${user.telefono}, Email: ${user.email}, Clave: ${user.clave}`;

  const actualizar = (contenido, campo) => {
    let userCopia = {...user};
    userCopia[campo] = contenido;
    setUser(userCopia);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Nombre:</Text>
      <TextInput style={{border: "3px solid black"}} placeholder="Nombre" onChangeText={(c) => actualizar(c, "nombre")}/>

      <Text>Teléfono:</Text>
      <TextInput style={{border: "3px solid black"}} placeholder="Teléfono" onChangeText={(c) => actualizar(c, "telefono")}/>

      <Text>Email:</Text>
      <TextInput style={{border: "3px solid black"}} placeholder="Email" onChangeText={(c) => actualizar(c, "email")}/>

      <Text>Clave:</Text>
      <TextInput style={{border: "3px solid black"}} placeholder="Clave" onChangeText={(c) => actualizar(c, "clave")}/>

      <Button title="Ver data" onPress={() => Alert.alert(stringuser())}/>
      <TouchableOpacity title="Ver data" onPress={() => Alert.alert(stringuser())}/>
      <Pressable onPress={() => Alert.alert(stringuser())}>
        <Text>Ver data</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
