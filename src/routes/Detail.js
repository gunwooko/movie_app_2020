import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location);
    if (!location.state) {
      history.push("./");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie__data">
            {" "}
            <h3 className="movie__title">{location.state.title}</h3>
            <h5 className="movie__year">{location.state.year}</h5>
            <p className="movie__summary">
              {location.state.summary.slice(0, 145)}...
            </p>
            <ul className="genres">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
