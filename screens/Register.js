import React,{useState} from 'react'
import { View,StyleSheet,Text,TouchableOpacity,  } from 'react-native'
import firebase from '../api';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import FormInput from '../components/FormInput';





const Register = ({navigation}) => {


 const [email, setemail] = useState('')
 const [password, setpassword] = useState('')
 const [error, seterror] = useState('')

    const signUp=async()=>{
      try {
       await firebase.auth().createUserWithEmailAndPassword(email,password)
      } catch (error) {
         seterror(error.message)
      }
      
    }

    return (
        <>
        
        <View style={{flexDirection:'row',marginTop: 50,
         justifyContent: 'space-around',
         
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate('loggin')} style={{marginTop: 20,
        }}>
            <MaterialIcons  name='arrow-left' size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Je crée mon compte</Text>
        </View>
        
        <View style={styles.container}>
        
        </View>
        <View style={{paddingBottom:10}}>
           <Text style={styles.label}>Email</Text>
          <FormInput 
          label='email'
          type='email'
          placeholderText='john@gmail.com'
          iconType='user'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={setemail}
          value={email}
          />
        </View>
        <View >
           <Text style={styles.label}>Password</Text>
          <FormInput 
          label='password'
          type='password'
          placeholderText='******'
          iconType='lock'
          secureTextEntry={true}
          onChangeText={setpassword}
          value={password}
          />
        </View>
        <Text style={{color:'red'}}> {error} </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={signUp} >
              <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>

        
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        marginTop: 150,
        
    },
    title:{
         fontSize: 20,
         fontWeight: '700',
         margin: 20,
         textAlign:'center',
         color:'#000'
    },
    label:{
      fontSize: 20,
      fontWeight: '500',
      marginLeft: 20,
    },

      buttonContainer: {
        marginTop: 16,
        width: '90%',
        height: 60 ,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft: 20,
        
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
      },
   
  });