import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { People } from '../App';

export interface PeopleState {
   people: People['people'];
   setPeople: Dispatch<SetStateAction<People['people']>>;
}

const initialState = {
   name: '',
   age: '',
   note: '',
   img: '',
};

const AddToList: FC<PeopleState> = ({ people, setPeople }) => {
   const [input, setInput] = useState(initialState);
   const { name, age, note, img } = input;

   const onChangeHandler = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ): void => {
      setInput({
         ...input,
         [event.target.name]: event.target.value,
      });
   };

   const onClickHandler = (): void => {
      if (!name || !age) {
         return;
      }
      setPeople([
         ...people,
         {
            name,
            age: parseInt(age),
            img,
            note,
         },
      ]);
      setInput({
         name: '',
         age: '',
         note: '',
         img: '',
      });
   };

   return (
      <div className="AddToList">
         <input
            value={name}
            type="text"
            placeholder="Name"
            className="AddToList-input"
            onChange={onChangeHandler}
            name="name"
         />
         <input
            value={age}
            type="number"
            placeholder="Age"
            className="AddToList-input"
            onChange={onChangeHandler}
            name="age"
         />
         <input
            value={img}
            type="text"
            placeholder="Image Url"
            className="AddToList-input"
            onChange={onChangeHandler}
            name="img"
         />
         <textarea
            value={note}
            placeholder="Notes"
            className="AddToList-input"
            onChange={onChangeHandler}
            name="note"
         />
         <button onClick={onClickHandler} className="AddToList-btn">
            Add To List
         </button>
      </div>
   );
};

export default AddToList;
