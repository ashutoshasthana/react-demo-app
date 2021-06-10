import logo from './logo.svg';
import AppRoutes from './app-route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
          <AppRoutes/>
      </header>
    </div>
  );
}

export default App;