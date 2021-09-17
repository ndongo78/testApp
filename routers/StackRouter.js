import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loggin from '../screens/Loggin'
import Register from '../screens/Register'
import Home from '../screens/Home'



const Stack=createNativeStackNavigator()

const StackRouter = () => {
    return (
       
       <Stack.Navigator>
         
          <Stack.Screen
           name='loggin'
           component={Loggin} 
           options={{
                header:()=>{}
           }}
           />
          <Stack.Screen  
          name='register' 
          component={Register} 
          options={{
            header:()=>{}
             }}
          />
            <Stack.Screen 
          name='home'
          component={Home}
         />
        </Stack.Navigator> 
     
        
    )
}

export default StackRouter
