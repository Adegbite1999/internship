import './App.css';
import Navigation from './components/Navigation'
import Wallet from './components/Wallet';
import Token from './components/Token'
import Transactions from './components/Transactions';
function App() {
  return (
    <div className="App">
     <Navigation/>
     <Wallet/>
     <Token/>
    <Transactions/>
    </div>
  );
}

export default App;