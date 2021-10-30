import { useState } from "react";

interface IState {
   people: {
      name: string;
      age: number;
      url: string;
      note?: string;
   }[];
}

const App = () => {
   const [people, setPeople] = useState<IState[]>([])
   return (
      <>
         <h1>People Invited to my Party</h1>
      </>
   );
};

export default App;
