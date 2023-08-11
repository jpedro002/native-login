import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function App() {
  const [SwichEye, setSwichEye] = useState(true);
  const handleCLickEye = () => {
    setSwichEye((SwichEye) => !SwichEye);
  };

  return (
    <View className="w-screen h-screen items-center justify-center gap-4  ">
      <Text className="text-3xl pb-16   ">login</Text>

      <View className="relative flex flex-col justify-center w-11/12  ">
        <TextInput
          className="text-black h-20 w-full rounded-full pl-12 bg-slate-200  placeholder:text-xl  "
          placeholder="Email"
        />
        <Fontisto
          name="email"
          size={20}
          style={{ position: "absolute",
                  left: 15,

                }}
          color="#999"
        />
      </View>
      <View className="relative flex flex-col justify-center w-11/12  ">
        <TextInput
          className="text-black h-20 w-full rounded-full pl-12 bg-slate-200  placeholder:text-xl  "
          placeholder="Senha"
        />
        <Fontisto
          name="locked"
          size={20}
          style={{ position: "absolute",
                  left: 15,

                }}
          color="#999"
        />
        <Pressable
          onPress={handleCLickEye}
          className="p-10 flex justify-center right-0  absolute"
        >

          <Icon
            name={SwichEye ? "eye" : "eye-slash"}
            size={20}
            color="#999"
            style={{
              margin: 10,
              position: "absolute",
              right: 10,
            }}
          />
        </Pressable>
      </View>

      <Pressable className="bg-green-600 w-3/5 h-20 rounded-full p-3 justify-center items-center active:bg-slate-700">
        <Text className="text-white ">Entrar</Text>
      </Pressable>
      <Pressable className="bg-green-600 w-3/5 h-20 rounded-full p-3 justify-center items-center active:bg-slate-700">
        <Text className="text-white ">Criar Conta</Text>
      </Pressable>
    </View>
  );
}
