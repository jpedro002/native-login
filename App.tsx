import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"


export default function App() {

  const [SwichEye , setSwichEye] = useState(true)
  const handleCLickEye = () => {
    setSwichEye(!SwichEye)
  } 

  return (
    <View className="w-screen h-screen items-center justify-center gap-4  ">
      <Text className="text-3xl pb-16   ">login</Text>

      <View className="relative flex-row w-11/12 items-center border">

        <TextInput
          className="text-black h-20 w-full rounded-full pl-12 bg-slate-200  placeholder:text-xl  "
          placeholder="useless placeholder"
        />
        

      </View>
      <View className="relative flex-row w-11/12 items-center border">

        <TextInput
          className="text-black h-20 w-full rounded-full pl-12 bg-slate-200  placeholder:text-xl  "
          placeholder="useless placeholder"
        />
        <Icon name={SwichEye ? "eye" : "eye-slash"} size={20} 
        onClick={handleCLickEye}
        color="#4F8EF7"
              style={{
                margin: 10,
                position: 'absolute',
                right: 10
              }}
        />

      </View>
      
      
     

      <Pressable className="bg-green-600 w-3/5 h-20 rounded-full p-3 justify-center items-center active:bg-slate-700">
        <Text className="text-white ">oiaiiidi</Text>
      </Pressable>
      <Pressable className="bg-green-600 w-3/5 h-20 rounded-full p-3 justify-center items-center active:bg-slate-700">
        <Text className="text-white ">oiaiiidi</Text>
      </Pressable>


    </View>
  );
}