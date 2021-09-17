import React,{useState,useEffect} from 'react'
import { Text, View,TouchableOpacity ,StyleSheet,ScrollView} from 'react-native'
import FormInput from '../components/FormInput'
import firebase from '../api';


const Home = () => {

    const [textInput, settextInput] = useState([])
    const [error, seterror] = useState('')
    const [list, setlist] = useState([])
     


    useEffect(() => {
       firebase.database().ref('reactnative').on('value',(snapshot)=>{

      return setlist(snapshot.val().todos)
        
       })
        }, [])
     

     const addInput=()=>{
        
        settextInput([...textInput,''])
     }
    
      const handleChange=(text,i)=>{
        
        textInput[i]=text 
        settextInput([...textInput])
      }

      
        
      const saveToDb=()=>{
              try {
            firebase.database().ref('reactnative')
            .set({
               todos: textInput.map(item=>item)
            })
          } catch (error) {
            seterror(error.message)
            console.log(error.message)
          }
          
         
      }

      
    return (
        <ScrollView>
            <Text style={styles.title}>Je créer ma list </Text>
            <View style={{margin: 10}}>
              {
                list.length !=0 ?
                list.map((item,i)=>(
                  <View key={i}>
                    <Text style={styles.list}> {item} </Text>
                    </View>
                  
                ))
                :null
              }
            </View> 
        <View>
        {
             textInput.map((item,i)=>(
                <FormInput 
                 onChangeText={(text)=>handleChange(text,i)}
                 type='text'
                 value={item}
                 name='input'
                 iconType='edit'
                />
             ))
         }
        </View> 
        
        <View style={styles.buttonContainers}>
            
          
            <TouchableOpacity style={styles.button1Container} onPress={saveToDb}>
              <Text style={styles.buttonText}>bouton1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2Container} onPress={addInput}>
              <Text style={styles.buttonText}>bouton2</Text>
            </TouchableOpacity>
        </View>
       <Text style={{color:'red'}}> {error} </Text>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
       marginTop: 200,
    },
    buttonContainers:{
            flexDirection:'row',
            justifyContent:'space-around'
    },
    
    title:{
         fontSize: 20,
         fontWeight: '700',
         margin: 20,
         textAlign:'center',
         color:'#2EC3FF'
    },
  list:{
     fontSize: 20,
     textAlign:'center',
     padding: 10,
     backgroundColor:'lightgrey',
     margin: 5
  },

    button1Container: {
        marginTop: 16,
        width: '30%',
        height: 60 ,
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      button2Container: {
        marginTop: 16,
        width: '30%',
        height: 60 ,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      
   
  });