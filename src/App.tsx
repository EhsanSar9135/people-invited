import { useState } from "react";
import List from "./components/List";

interface IState {
   people: {
      name: string;
      age: number;
      url: string;
      note?: string;
   }[];
}

const App = () => {
   const [people, setPeople] = useState<IState['people']>([])
   return (
      <>
         <h1>People Invited to my Party</h1>
         <List people={people} />
      </>
   );
};

export default App;
