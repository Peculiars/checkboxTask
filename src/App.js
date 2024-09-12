import './App.css';
import CheckboxTree from './components/CheckboxTree';

function App() {
  const treeData = [
    {
      id: 1,
      name: 'All animals',
      children: [
        { id: 2, name: 'Cat', parent: 1 },
        { id: 3, name: 'Goat', parent: 1 },
        { id: 4, name: 'Cow', parent: 1 },
      ],
    },
    {
      id: 5,
      name: 'All Jobs',
      children: [
        { id: 6, name: 'Hybrid', parent: 5 },
        { id: 7, name: 'Part-time', parent: 5 },
        { id: 8, name: 'Full-time', parent: 5 },
      ],
    },
  ];
  
  return (
    <div className="App">
     <CheckboxTree data={treeData}/>
    </div>
  );
}

export default App;
