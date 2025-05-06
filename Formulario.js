import {  Text, TouchableOpacity, Button, Pressable, TextInput, Alert } from 'react-native';
import React from 'react';

export default function Formulario({user, setUser}){
    const actualizar = (contenido, campo) => {
      let userCopia = {...user};
      userCopia[campo] = contenido;
      setUser(userCopia);
    }

    return (
    <View>
      <Text>Nombre:</Text>
      <TextInput placeholder="Nombre" onChangeText={c => actualizar(c, "nombre")}/>

      <Text>Teléfono:</Text>
      <TextInput placeholder="Teléfono" onChangeText={c => actualizar(c, "telefono")}/>

      <Text>Email:</Text>
      <TextInput placeholder="Email" onChangeText={c => actualizar(c, "email")}/>

      <Text>Clave:</Text>
      <TextInput placeholder="Clave" onChangeText={c => actualizar(c, "clave")}/>
    </View>
    );
}