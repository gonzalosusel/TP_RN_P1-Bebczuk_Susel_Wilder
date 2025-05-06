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
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.formContainer}>
       <Text style={styles.header}>Registrarse</Text>

        <TextInput style={styles.input} placeholder="Nombre" onChangeText={(c) => actualizar(c, "nombre")} />
        <TextInput style={styles.input} placeholder="Teléfono" onChangeText={(c) => actualizar(c, "telefono")} />
        <TextInput style={styles.input} placeholder="Email" onChangeText={(c) => actualizar(c, "email")} />
        <TextInput style={styles.input} placeholder="Clave" secureTextEntry onChangeText={(c) => actualizar(c, "clave")} />

        <Button title="Ver data" onPress={() => Alert.alert(stringuser())}/>
        <Pressable style={styles.button} onPress={() => Alert.alert(stringuser())}>
          <Text style={styles.buttonText}>Ver data</Text>
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert(stringuser())}>
          <Text style={styles.buttonText}>Ver data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  touchableo: {
    backgroundColor: "#db1a54",
    padding: "5px",
    borderRadius: "7px"
  },

  pressable: {
    backgroundColor: "#4287f5",
    padding: "20px",
    border: "1px solid #000c"
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff5f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  header: {
    backgroundColor: '#ffa18d',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ffa18d',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});
