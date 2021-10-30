import { useState } from 'react';
import List from './components/List';
import './App.css';
import AddToList from './components/AddToList';

export interface People {
   people: {
      name: string;
      age: number;
      img: string;
      note?: string;
   }[];
}

const App = () => {
   const [people, setPeople] = useState<People['people']>([
      {
         name: 'LeBron James',
         age: 35,
         img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
         note: 'Allegeric to staying on the same team',
      },
   ]);
   return (
      <div className="App">
         <h1>People Invited to my Party</h1>
         <List people={people} />
         <AddToList people={people} setPeople={setPeople} />
      </div>
   );
};

export default App;
