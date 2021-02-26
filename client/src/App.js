import './App.css';
import { useState } from 'react';
import Card from './Components/Card'


function App() {

  const [data, setData] = useState([
    {
      url: 'https://images.unsplash.com/photo-1605466407639-7f6ce8276fa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      caption: 'Explore the World',
      active: true
    },
    {
      url: 'https://images.unsplash.com/photo-1613906724377-5a781a49c1b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      caption: 'Wild Forest',
      active: false
    },
    {
      url: 'https://images.unsplash.com/photo-1575152046278-adb86343e2a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      caption: 'Tired Camels',
      active: false
    },
    {
      url: 'https://images.unsplash.com/photo-1501588875252-674a453ca06e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsaWZmc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      caption: 'Ominous Cliffs',
      active: false
    },
    {
      url: 'https://images.unsplash.com/photo-1613480123595-c5582aa551b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      caption: 'Waterfall in the Andes',
      active: false
    },

  ]);

  const changeActiveHandler = (index) => {
    let newData = [...data];
    newData.forEach(e => {
      e.active = false;
    });
    newData[index].active = true;
    setData(newData);
  }

  return (
    <div className="container">
      {data.map((element, index) => {
        return <Card key={index} url={element.url} caption={element.caption} active={element.active} index={index} handler={changeActiveHandler} />
      })}
    </div>
  );
}

export default App;
