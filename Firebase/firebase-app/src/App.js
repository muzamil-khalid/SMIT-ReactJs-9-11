import logo from "./logo.svg";
import "./App.css";

import { db } from "./firebase";
import { doc, setDoc,addDoc,collection } from "firebase/firestore";

function App() {

  const addData = async () => {
    console.log("Running")
    // const resp = await setDoc(doc(db,"cities","OI"),{
    //   name:"Huzaifa",
    //   age:21,
    //   gender:"M"
    // });
    await addDoc(collection(db,"cities"),{
      name:"Hassan",
      age:21
    })


  };

  return (
    <div className="App">
      <button onClick={() => addData()}>Add Data</button>
    </div>
  );
}

export default App;
