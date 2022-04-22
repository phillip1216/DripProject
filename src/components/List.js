import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { DBService } from '../firebase';
import '../style/ListStyle.css'

const List = ({ listObj, isOwner }) => {
    const [toggleState, setToggleState] = useState(false);
    const [editList, setEditList] = useState("");
    const cityRef = doc(DBService, 'list', `${listObj.id}`);
    const onCLickDelete = async () => {
        const ok = window.confirm("Are you sure you want to delete this list?")
        if (ok) {
            await deleteDoc(cityRef);
        } else {
            console.log("False")
        }
    }
    const toggleForm = () => {
        setToggleState((prev) => !prev)
    }
    const onChange = (event) => {
        const { target: { value } } = event;
        setEditList(value)
    }
    const onSubmit = () => {
        if (editList !== "") {
            updateDoc(cityRef, { text: editList })
            toggleForm();
            setEditList("");
        }
    }

    return (
        <div className='list_item'>

            {toggleState ?
                <div className='list_con'>
                    <form onSubmit={onSubmit} id='Edit_Form'>
                        <input value={editList} placeholder={listObj.text} onChange={onChange}></input>
                    </form>
                </div>


                :
                <div className='list_con'>
                    <h4>{listObj.text}</h4>
                </div>
            }


            {isOwner &&
                toggleState
                ?
                <div className='list_btn'>
                    <button type='submit' form='Edit_Form'>E</button>
                </div>
                :
                < div className='list_btn'>
                    <button onClick={onCLickDelete}>D</button>
                    <button onClick={toggleForm}>E</button>
                </div >

            }

        </div >
    )
}
export default List