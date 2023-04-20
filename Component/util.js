import * as FileSystem from 'expo-file-system'
import { readAsStringAsync } from 'expo-file-system'
import * as MailComposer from 'expo-mail-composer'


export const writeFile = async (data) => {
    try {
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'MyFile.txt');
        if (fileInfo.exists) {
            const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'MyFile.txt');
            const newContent = fileContent + data;
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'MyFile.txt', newContent);
            console.log('Le fichier a été mis à jour avec succès !');
        } else {
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'MyFile.txt', data);
            console.log('Le fichier a été créé avec succès !');
        }
    } catch (error) {
        console.log('erreur non catchée writefile util.js: ', error);
    }
};


// cette fonction permet de déterminer si un fichier est vide ou non. 
// Elle peut être utilisée, par exemple, 
// pour éviter d'ajouter des données à un fichier vide ou pour vérifier si un fichier existe avant de tenter de le lire ou de l'écrire.

export const isFileEmpty = async (fileUri) => {
    try {
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        console.log('isFileEmpty: ', fileInfo)
        if (fileInfo.exists === true && fileInfo.size > 0) return false
        return true
    } catch (error) {
        return true
    }
    return true
}

export const emptyFile = async (fileUri) => {
    try {
        await FileSystem.writeFileAsStringAsync(fileUri);
        const fileContent = await FileSystem.readAsStringAsync(fileUri);

    } catch (err) {
        console.log('error in empty file function:', err)
    }
}

export const sendFileByEmail = async (fileUri, recipient) => {
    let _recipient = recipient ? recipient : 'default@mail.com';

    const options = {
        attachments: [fileUri],
        recipients: [_recipient],
        subject: 'Objet du mail'
    }
    
    await MailComposer.composeAsync(options)
}















