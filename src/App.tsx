import React from 'react';
import './App.css';
import Dnd, { ItemType } from './Dnd';
const sample: ItemType[] = [
  { id: '1', text: 'text1' },
  { id: '2', text: 'text2' },
  { id: '3', text: 'text3' },
];
const sample2: ItemType[] = [
  { id: '100', text: 'text100' },
  { id: '200', text: 'text200' },
  { id: '300', text: 'text300' },
];

const App: React.FC<{}> = () => {
  return (
    <div className="wrapper">
      <Dnd elements={sample} elements2={sample2} />
    </div>
  );
};

export default App;
