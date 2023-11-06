import LoginSignup from './component/loginSignup/loginSignup';
import {useState} from "react";

function App() {
  const [seen, setSeen] = useState(false)

  function togglePop() {
    setSeen(!seen);
  };
  return (
    <div>
      <LoginSignup /><button onClick={togglePop}>Login</button>
      {seen ? <Login toggle={togglePop} /> : null}
    </div>
  );
}

export default App


