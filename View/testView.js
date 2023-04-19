
import { View, TextInput, Button} from "react-native"

function TestView() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput style={{ textAlign:"center" }}
            placeholder='Ajouter une tâche'
          />
        <View style={{alignSelf: 'center', width:100, margin:20}}>
          <Button
            title='Save' />
        </View>
    </View>
  )
}

export default TestView;

