
import { View, TextInput, Button} from "react-native"
import { writeFile, isFileEmpty, emptyFile, sendFileByEmail} from '../Component/util';
import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native'
function Note() {
  const handleSave = async (data) => {
    try {
      const fileUri = FileSystem.documentDirectory + 'MyFile.txt';
      const empty = await isFileEmpty(fileUri);
      if (!empty) {
        Alert.alert(
          'Attention',
          'Voulez-vous écraser le contenu existant ?',
          [
            {
              text: 'Annuler',
              style: 'cancel'
            },
            {
              text: 'OK',
              onPress: async () => {
                await emptyFile(fileUri);
                await writeFile(data);
                await sendFileByEmail(fileUri);
              }
            }
          ]
        );
      } else {
        await writeFile(data);
        await sendFileByEmail(fileUri);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleSendByEmail = async () => {
    const fileUri = FileSystem.documentDirectory + 'MyFile.txt';
    await sendFileByEmail(fileUri);
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput style={{ textAlign:"center" }}
            placeholder='Ajouter une tâche'
          />
        <View style={{alignSelf: 'center', width:200, margin:10}}>
          <Button
            title='Save'
            onPress={handleSave} />
        </View>
        <View style={{alignSelf: 'center', width:200, margin:10}}>
            <Button
            title='Envoyer par e-mail'
            onPress={handleSendByEmail} />
        </View>
    </View>
  )
}

export default Note;

