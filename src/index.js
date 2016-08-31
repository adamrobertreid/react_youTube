//Import React as JavaScript module
//need to make sure this file has access to react.
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyALK8sqswn95JrDkmgWK8b-EqltGyDpiUE';

 // create a new component. This component should produce
 //some HTML
const App = () => {  //const means constant es6 it'll never change
  return (
  <div>
    <SearchBar />
  </div>  //html in javascript is JSX
  );
}


 // Take this component's generated HTML and put it
 //on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
