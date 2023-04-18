import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from "react-native"

const HomeView = ({navigation}) => {
  const [addTodo, setAddTodo] = useState('')
  const [tasks, setTasks] = useState([])
//add a new task to the list 
  const handleAdd = () => {
    const newTask = {
      id: new Date().getTime().toString(),
      text: addTodo
    }
    setTasks([...tasks, newTask])
    setAddTodo('')
  }

  return (
    <View style={styles.containerFlex}>
      <View style={styles.titreFlexItem}>
        <ImageBackground source={require('../assets/liste.png')} style={{ width: 500, height: 250 }}>
          <Text style={{fontSize:30, position: 'absolute', bottom:15, left:40 }}>Liste ToDO</Text>
        </ImageBackground>
      </View>
      <View style={styles.MyListe}>
        <TextInput
          style={styles.input}
          placeholder='Ajouter une tâche'
          onChangeText={text => setAddTodo(text)}
          value={addTodo}
        />
        <Button
          title="Ajouter"
          onPress={handleAdd}
        />
        <View style={{marginTop: 20}}>
          {tasks.map((task) => (
            <Text style={styles.input} key={task.id}>{task.text}</Text>
          ))}
        </View>
        </View>
      <View style={styles.bottomTab} >
      <Button
          onPress={() => {navigation.navigate('Test')}}
          title='test' />
      <Button
          onPress={() => {navigation.navigate('end')}}
          title='to end' />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeView

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 2,
    padding: 10,
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerFlex: {
    flex: 1,
  },
  titreFlexItem: {
    flex: 2.5,
    justifyContent: 'flex-end',
  },
  MyListe: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  bottomTab: {
    flex: 0.5,
    flexDirection: 'row',
    
    


    // backgroundColor: '#ffd700'
  },
});











// import { StatusBar } from "expo-status-bar"
// import { useState } from "react"
// import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from "react-native"


// const HomeView = (add) => {
//     const [addTodo, setAddTodo] = useState('')

//     const handleAdd = () => {
//       add(addTodo);
//       setAddTodo('');
//     };

//     return (
//         <View style={styles.containerFlex}>
//             <View style={styles.titreFlexItem}>
//             <ImageBackground source={require('../assets/liste.png')} style={{ width: 500, height: 250 }} >
//                 <Text style={{fontSize:30, position: 'absolute', bottom:15, left:40 }}>Liste ToDO</Text>
//             </ImageBackground>
//             </View>
//             <View style={styles.MyListe}>
//                 <Text>{addTodo}</Text>
//                 <TextInput
//                     placeholder='Ajouter une tâche' 
//                     onChangeText={text => setAddTodo(text)}
//                 />
//                 <Button
//                     title="Ajouter" 
//                     onPress={handleAdd}/>
//             </View>
//             <View style={styles.bottomTab} >  
//             </View>

//             <StatusBar style="auto" />
//         </View>
//     )
// }

// export default HomeView


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'red',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     containerFlex: {
//       flex: 1,
//     },
//     titreFlexItem: {
//       flex: 2.5,
//       justifyContent: 'flex-end',
//     },
//     MyListe: {
//       flex: 5,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     bottomTab: {
//       flex: 0.5,
//       backgroundColor: '#ffd700'
//     },
//   });