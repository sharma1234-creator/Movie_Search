

import React from 'react'
import SearchMovies from "./SearchMovies";
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
         <h1 className="title">Movies Search App</h1>
         <SearchMovies />
      </div>
    );
  }
}

