import React, { useEffect, useState } from 'react'
import AppRouter from './AppRouter';
import { authService } from '../firebase';
import '../style/AppStyle.css'
import Loading from './Loading';

function App() {

  const [init, setinit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args)
        });
      } else {
        setUserObj(null)
      }
    })
    setTimeout(() => { setLoadState(true) }, 2000)
    setTimeout(() => { setinit(true) }, 4000)
  }, [])


  return (
    <div className="App">
      {init
        ?
        <AppRouter isloggined={Boolean(userObj)} userObj={userObj} />
        :
        <Loading loadState={loadState} />
      }
    </div >
  );
}

export default App;
