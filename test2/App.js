import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Task from "./components/Task";
export default function App() {
  const [task, setTask] = useState("");
  const [listTask , setListTask] = useState([]);
  const HandelAddTesK =()=>{
    if (listTask.length <= 10) {
      setListTask([...listTask,task])
    setTask(null)
    }
    
  }
  const completeTask =(index)=>{
    let itemCopy =[...listTask];
    itemCopy.splice(index,1);
    setListTask(itemCopy);
  }
  return (
    <View style={styles.container}>
      {/* today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> laith task's </Text>
        <View style={styles.item}>
          {
            listTask.map((item , index)=>{
              return (<TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                 <Task text={item} />
                 </TouchableOpacity>
                 )
            })
          }
        </View>
      </View>
      {/* write a task  */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input}
        placeholder="write the task"
        value={task}
         onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={()=> HandelAddTesK()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
// 3C0753 720455 910A67
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030637",
  },
  item: {},
  tasksWrapper: {
    paddingTop: 20,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#720455",
    paddingBottom: 20,
    letterSpacing: 10,

    textAlign: "center",
  },
  addText:{   
     color: "#720455",
    fontSize:30,
  },
  addWrapper:{
    width:60,
    height:60,
    borderRadius:60,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:"#910A67",
    color:"#720455"

  },
  input:{
    paddingHorizontal:15,
    paddingVertical:15,
    width:250,
    borderRadius:60,
    borderColor:"#c0c0c0",
    backgroundColor:"#910A67",
    borderWidth: 1,
    borderColor:"#910A67",
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:40,
    width:"100%",
    flexDirection:'row-reverse',
    justifyContent:'space-around',
    alignItems:"center",
  },
});
