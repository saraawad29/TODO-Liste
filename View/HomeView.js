import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from "react-native"
import { IconButton, MD3Colors } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons/';


const HomeView = ({ navigation }) => {

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

    const handleDelete = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };


  return (
    <View style={styles.containerFlex}>
      <View style={styles.titreFlexItem}>
        <ImageBackground source={require('../assets/liste.png')} style={{ width: 500, height: 250 }}>
          <Text style={{ fontSize: 30, position: 'absolute', bottom: 15, left: 40 }}>ToDO list</Text>
        </ImageBackground>
      </View>
      <View style={styles.MyListe}>
        <View style={styles.addTodoWrapper}>

          <TextInput
            style={styles.input}
            placeholder='Ajouter une tâche'
            onChangeText={text => setAddTodo(text)}
            value={addTodo}
          />
          <View style={styles.button}>
            <IconButton
                 icon={() =>  <Ionicons name="add-outline" size={25} />}
                 iconColor={MD3Colors.error50}
                 size={20}
              onPress={handleAdd}
            />
          </View>
        </View>

        <View style={styles.MyListe}>
          {tasks.map((task) => (
            <View style={styles.taskContainer} key={task.id}>
              <Text style={styles.list}>{task.text}</Text>
              <View style={styles.button}>
                <IconButton
                 icon={() =>  <Ionicons name="backspace-outline" size={25} />}
                 onPress={() => handleDelete(task.id)}
                />
              </View>
            </View>
            ))}
        </View>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

export default HomeView

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 25,
  },
  taskContainer:{
    flexDirection: 'row',

  },
  list: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 25,
    margin: 10,
    height: 40,


  },
  button: {
      justifyContent: 'center',
      alignContent: 'center',
      padding: 10
  },
  addTodoWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    margin: 20,
    height: 40,
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
  },
});



