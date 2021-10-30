import { FC } from 'react';
import { People } from '../App';

const List: FC<People> = ({ people }) => {
   const renderList = (): JSX.Element[] => {
      return people.map(({ name, age, img, note }) => {
         return (
            <li className="list">
               <div className="list-header">
                  <img className="list-img" src={img} alt={name} />
                  <h2>{name}</h2>
               </div>
               <p>{age} years old</p>
               <p className="list-note">{note}</p>
            </li>
         );
      });
   };
   return <div>{renderList()}</div>;
};

export default List;
