import './App.css';
import UnMount from './Component/UnMount';
import DidMount from './components/DidMount';
import DidUpdate from './Component/DidUpdate';
import GetSnap from './Component/GetSnap';
import GetDerive from './Component/GetDerive';
function App() {
  return (
    <div className="App">

<DidMount />
 <GetSnap />

 <DidUpdate /> 

<UnMount />

    </div>
  );
}

export default App;