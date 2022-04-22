import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import List from '../components/List';
import { DBService } from '../firebase';
import '../style/HomeStyle.css'

const Home = ({ userObj }) => {
    const [text, setText] = useState("");
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const onChange = (e) => {
        const { target: { value } } = e
        if (value !== null) {
            setText(value);
        }

    }
    const onSubmit = async (e) => {
        e.preventDefault();
        let newList;
        if (text.length > 6) {
            newList = {
                text: text,
                createAt: Date.now(),
                uid: userObj.uid
            }
            await addDoc(collection(DBService, "list"), newList)
            setText("")
        } else {
            window.confirm('최소 6자 이상')
        }

    }

    useEffect(() => {
        const q = query(collection(DBService, "list"), orderBy("createAt", 'desc'));
        onSnapshot(q, (snapshot) => {
            const ListArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setLists(ListArray)
        })
        setLoading(false)
    }, [])
    return (
        <div className='Home'>
            <div className='home_form'>
                <form onSubmit={onSubmit} className='home_form_wrap'>
                    <input className='home_form_input' onChange={onChange} placeholder='list' value={text} type='text' ></input>
                    <input className='home_form_submit' type='submit' value='submit'></input>
                </form>
            </div>
            <div className='home_list'>
                <div className='home_list_scroll'>

                    {
                        loading
                            ? <h3>loading...</h3>

                            :
                            lists.map((list) => <List key={list.id} listObj={list} isOwner={userObj.uid === list.uid} />)

                    }
                </div>
            </div>
        </div>
    )
}
export default Home