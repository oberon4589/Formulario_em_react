import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formulário</h2>
      <MyForm user={{name: "Oberon", email: "oberon@gmail.com", bio: "Programador", role: "editor",}} />
    </div>
  );
}

export default App;
