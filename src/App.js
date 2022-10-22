import './App.css';
import {useState} from 'react'
function App() {

  const [average, setAverage] = useState("Marks of Subject1:88, Subject2:81, Subject3:93, Subject4:99, Subject5:78");
  const [subject1, setSubject1] = useState(88);
  const [subject2, setSubject2] = useState(81);
  const [subject3, setSubject3] = useState(93);
  const [subject4, setSubject4] = useState(99);
  const [subject5, setSubject5] = useState(78);
  const calculate = ()=>{
    setAverage((subject1+subject2+subject3+subject4+subject5)/5 + "%")
  }
  return (
    <div className="App">
      <header className="App-header">
      {average}
      <button onClick={calculate}>Calculate</button>
      </header>
    </div>
  );
}

export default App;