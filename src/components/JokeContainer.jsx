import Joke from "./Joke";
import Loading from "./Loading";
import "./JokeContainer.css";
import getJoke from "../apis/getJoke";
import { useState, useEffect } from "react";

const JokeContainer = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const jokeData = await getJoke();
        setJoke(jokeData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchJoke();
  }, [id]);
  const clickHandler = () => {
    setId((prevId) => prevId +1)
  };
  return (
    <div>
      <div className="get-joke">
        <button onClick={clickHandler}>Click here <br></br>Get smile</button>
      </div>
      {loading && <Loading />}
      {joke && <Joke joke={joke} />}
      {error && (
        <div className="error">
         Error getting a joke data
        </div>
      )}
    </div>
  );
};

export default JokeContainer;