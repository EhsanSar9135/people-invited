import { FC } from 'react';

interface IProps {
   people: {
      name: string;
      age: number;
      url: string;
      note?: string;
   }[];
}

const List: FC<IProps> = ({ people }) => {
   const renderList = (): JSX.Element[] => {
      return people.map(({ name, age, url, note }) => {
         return (
            <li className="list">
               <header className="list_header">
                  <img className="list_img" src={url} alt={name} />
                  <h2>{name}</h2>
               </header>
               <p>{age} years old</p>
               <p className="list_note">{note}</p>
            </li>
         );
      });
   };
   return <div>{renderList()}</div>;
};

export default List;
