import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';
import './styles2.scss';


const App = () => <div className="title title2">Hello World from React!</div>;


ReactDom.render(<App/>, document.getElementById('app'));


