import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const aggiuntaTaskHandler = () => {
    if (task === "") {
      return ToastAndroid.show("Non puoi aggiungere una task vuota", ToastAndroid.SHORT);
    }
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    ToastAndroid.show("Ho aggiunto " + task + " alla lista", ToastAndroid.SHORT);
    setTask("");
  }

  const taskCompletata = (index) => {
    let itemsCopy = [...taskItems];
    ToastAndroid.show("Ho rimosso " + taskItems + " dalla lista", ToastAndroid.SHORT);
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy); 
  }

  return (
    <View style={styles.container}>
      
      {/* Header, Todday's Tasks */}
      <View style={styles.taskWrap}>
        <Text style={styles.title}>Today's Tasks</Text>

      
        <View style={styles.items}>
          {/* Task Vanno Qua */}
          {
            taskItems.map((items, index) => {
              return (
                <TouchableOpacity  key={index} onPress={() => taskCompletata(index)}>
                  <Task text={items} />
                </TouchableOpacity>
              )             
            })
          }
        </View>
      </View>

      {/* Aggiungere Tasks */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapAggiungiTask}
      >
        <TextInput style={styles.input} placeholder={'Aggiungi una Task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={aggiuntaTaskHandler}>
          <View style={styles.aggiungiWrapper}>
            <Text style={styles.aggiungi}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrap: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  wrapAggiungiTask: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  aggiungiWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  aggiungi: {},
});
