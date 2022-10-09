// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fragment from './components/Fragment';
import Hello from './components/Hello';
import Table from './components/Table';

function App() {
  return (
    <>
      <div class='container'>
          <Fragment />
          <Hello />
      </div>
      <div class='container-fluid'>
          <Table />
      </div>
    </>
  );
}

export default App;
