import { ChangeEvent, useState } from 'react';

const initialState = {
   name: '',
   age: '',
   note: '',
   img: '',
};

const AddToList = () => {
   const [input, setInput] = useState(initialState);
   const { name, age, note, img } = input;

   const onChangeHandler = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setInput({
         ...input,
         [event.target.name]: event.target.value,
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
      </div>
   );
};

export default AddToList;
