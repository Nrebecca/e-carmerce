import React, {useState} from 'react'

const AddProduct = () => {
const[text, setText] = useState('');
const[price, setPrice] = useState('');
const[reminder, setReminder] = useState(false);
const[photo, setPhoto] = useState('');


  return (
   <form className='add-form'>
<div className='form-control'>
    <lable>product name</lable>
    <input type='text' value={text} onChange={(e)=>setPrice(e.target.value)} placeholder=''></input>

</div>
<div className='form-control'>
    <lable>price</lable>
    <input type='text' value={price} onChange={(e)=>setText(e.target.value)} placeholder=''></input>

</div>
<div className='form-control'>
    <lable>setReminder</lable>
    <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} placeholder=''></input>

</div>
<div className='form-control'>
    <lable>photo</lable>
    <input type='file' placeholder=''></input>

</div>


<input className='btn btn-block' type='submit' value='Save' ></input>

   </form>
  )
}

export default AddProduct