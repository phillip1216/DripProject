import React, { useEffect, useState } from 'react'
import { authService, DBService } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import List from '../components/List';
import '../style/ProfileStyle.css'

const Profile = ({ userObj }) => {
    const [lists, setLists] = useState([]);
    const navigater = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigater("/");
    }
    useEffect(() => {
        const q = query(collection(DBService, "list"), where("uid", "==", userObj.uid));
        onSnapshot(q, (snapshot) => {
            const ListArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setLists(ListArray)
        })
    }, [])
    return (
        <div className='Profile'>

            {/* {
                lists.map((list) => <List key={list.id} listObj={list} isOwner={userObj.uid === list.uid} />)

            } */}
            <div className='Log_btn'>
                <button onClick={onLogOutClick}>Log Out</button>
            </div>

        </div>
    )
}

export default Profile