import Header from "./components/Header";
import JokeContainer from "./components/JokeContainer";
import './App.css';

const App = () => {
  return (
    <div>
      <Header title="Get a Joke"/>
      <JokeContainer />
    </div>
  );
}


export default App;