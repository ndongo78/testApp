import React,{useState} from 'react'
import { View,StyleSheet,Text,TouchableOpacity,  } from 'react-native'
import firebase from '../api';


import FormInput from '../components/FormInput';





const Loggin = ({navigation}) => {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')

  const signIn=async()=>{
    try {
     const response= await firebase.auth().signInWithEmailAndPassword(email,password)
       console.log()
       if(response.user.email){
         navigation.navigate('home')
       }

    } catch (error) {
       seterror(error.message)
    }
    
  }


    return (
        <>
        <View style={styles.container}>
        <Text style={styles.title}>Welcom to do list</Text>
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
          placeholderText='*******'
          iconType='lock'
          secureTextEntry={true}
          onChangeText={setpassword}
          value={password}
          />
        </View>
      
          <View>
          <Text style={{color:'red'}}> {error} </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={signIn}>
              <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containBtn}>
            <TouchableOpacity onPress={()=>navigation.navigate('register')}>
             <Text style={styles.register}>Je crée mon compte</Text>
           </TouchableOpacity>
          </View>
           
        </>
    )
}

export default Loggin

const styles = StyleSheet.create({
    container:{
       marginTop: 200,
    },
    
    title:{
         fontSize: 20,
         fontWeight: '700',
         margin: 20,
         textAlign:'center',
         color:'#2EC3FF'
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
      register:{
         fontSize: 18,
         padding: 10 ,
         color:'#110066'
         
      },
      containBtn:{
        flexDirection:'row',
        justifyContent:'flex-end',
        margin: 20,
        
      }
   
  });