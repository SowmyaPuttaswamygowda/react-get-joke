import PropTypes from "prop-types";
import "./Joke.css";

const Joke = ({ joke }) => {
  return (
    <div className="joke-card">
      <div className="category">{joke.category}</div>
      {joke.type === "single" ? (
        <div>{joke.joke}</div>
      ) : (
        <div>
          <div>{joke.setup}</div>
          <div>{joke.delivery}</div>
        </div>
      )}
      <div className="flags">
        {Object.entries(joke.flags)
          .filter(([flag]) => !["religious", "sexist", "racist"].includes(flag))
          .map(([flag, value]) => (
            <button key={flag} className={value ? "red" : "green"}>
              {flag} : {value.toString()}
            </button>
          ))}
      </div>
      <div className={joke.safe ? "green" : "red"}>
        Safe : {joke.safe.toString()}
      </div>
    </div>
  );
};

Joke.propTypes = {
  joke: PropTypes.shape({
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    joke: PropTypes.string,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    flags: PropTypes.shape({
      nsfw: PropTypes.bool,
      religious: PropTypes.bool,
      political: PropTypes.bool,
      racist: PropTypes.bool,
      sexist: PropTypes.bool,
      explicit: PropTypes.bool,
    }),
    safe: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Joke;