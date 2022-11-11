import React, { useState } from "react";
import {initializeApp} from "firebase/app";
import {getStorage, ref, StorageReference, uploadBytes} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBcm7LwmgXHX-2LnWzaybUzuUy1GsjN5l8",
    authDomain: "upload-storage-nj.firebaseapp.com",
    projectId: "upload-storage-nj",
    storageBucket: "upload-storage-nj.appspot.com",
    messagingSenderId: "470398372734",
    appId: "1:470398372734:web:f94220590546776878412f"
  };

  export default function Upload() {
    const [selectedFile, setSelectedFile] = useState({name: ''})
    const handleUpload = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig); //connect to firebase project
        const storage = getStorage(app); //connect to our storage bucket
        //create a reference to our file in storage
        const filename: string = selectedFile?.name
        const imageRef: StorageReference = ref(storage, 'photos/' +  filename);
        // (Todd's quick cheat) create the url from reference
        const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-nj.appspot.com/o/photos%2F${filename}?alt=media`
        // upload file to bucket
        // uploadBytes(imageRef, selectedFile);

    }  
    return (
        <form onSubmit ={handleUpload}>
          <input type="file" name="photo" 
          onChange={(e: React.FormEvent<HTMLInputElement> | any) => setSelectedFile(e.CurrentTarget.files[0])}/>
          <button type="submit">Upload</button>
        </form>
        )
  }