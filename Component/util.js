import * as FileSystem from 'expo-file-system'
import { readAsStringAsync} from 'expo-file-system'
import * as MailComposer from 'expo-mail-composer'

export const writeFile = async (data) => {
    // verifier le contenu de data 
    try {
        // verifier si le fichier est vide 
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')
        if (fileInfo.exists) {
            // lire le fichier, et recuperer les donnees existantes
            const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
            // trouver un moyen pour ajouter le contenu passe en param au contenu existant
        } else {
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
        }
    } catch (error) {
        console.log('erreur non catche writefile util.js: ', error)
    }
}

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

const getFile = async (fileUri) => {
    return await FileSystem.getInfoAsync(fileUri);
}

const getFileContent = async (fileUri) => {
    return await FileSystem.readAsStringAsync(fileUri);
}

export const sendFileByEmail = async (recipient, fileUri) => {
    let _recipient = recipient ? recipient : 'default@mail.com';
    try {
        const fileInfo = await getFile(fileUri)
        console.log('file info before mail is sent: ', fileInfo);
        const fileContent = await getFileContent(fileUri);
        console.log('file content about to be sent by email: ', fileContent)
    } catch(err) {
        console.log('file does not exist: ', fileInfo)
    }

    const options = {
        attachments: [fileUri],
        recipients: [_recipient],
        subject: 'Objet du mail'
    }

    await MailComposer.composeAsync(options)
}