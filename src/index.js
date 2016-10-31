//Import React as JavaScript module
//need to make sure this file has access to react.
import React from 'react';
import ReactDOM from 'react-dom';

//import code, need to give file reference to component - relative path
import SearchBar from './components/search_bar'; // importing searchbar from component


const API_KEY = 'AIzaSyALK8sqswn95JrDkmgWK8b-EqltGyDpiUE';

 // create a new component. This component should produce
 //some HTML
const App = () => {  //const means constant es6 it'll never change
  return (
  <div>
    <SearchBar />
  </div>
  );
}


 // Take this component's generated HTML and put it
 //on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
