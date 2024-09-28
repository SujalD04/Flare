import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Other routes/components can go here */}
    </Router>
  );
}

export default App;
