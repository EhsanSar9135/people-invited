import { FC } from 'react';
import { People } from '../App';

const List: FC<People> = ({ people }) => {
   const renderList = (): JSX.Element[] => {
      return people.map(({ name, age, url, note }) => {
         return (
            <li className="list">
               <header className="list-header">
                  <img className="list-img" src={url} alt={name} />
                  <h2>{name}</h2>
               </header>
               <p>{age} years old</p>
               <p className="list-note">{note}</p>
            </li>
         );
      });
   };
   return <div>{renderList()}</div>;
};

export default List;
