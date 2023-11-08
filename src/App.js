import React from "react";
import { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import text from "./assets/images/text.svg";

import { db } from "./config/firebase";
import {
  getDocs,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

import "./assets/styles/App.css";

function App() {
  const [structureList, setStructureList] = useState([]);

  const structureCollectionRef = collection(db, "structure");

  const getStructureList = () => {
    const unsubscribe = onSnapshot(structureCollectionRef, (querySnapshot) => {
      const updatedStructureList = [];
      querySnapshot.forEach((doc) => {
        updatedStructureList.push({ ...doc.data(), id: doc.id });
      });
      setStructureList(updatedStructureList);
    });

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = getStructureList();

    //show all items in structureList

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="350" className="App-logo mb-9" alt="logo" />
        <img src={text} width="350" alt="Site en construction." />
        <h3 className="text-black">Structures :</h3>
      </header>
      <div className="App-body">
        {structureList.map((structure) => (
          <div key={structure.id} className="structure">
            <div className="">{structure.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
