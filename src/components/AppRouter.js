import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from '../routes/Navigation';
import Profile from '../routes/Profile';
import Map from './Map';

const AppRouter = ({ userObj, isloggined }) => {

    return (
        <Router>
            <Routes>
                {isloggined
                    ? <>
                        <Route path='/map' element={<Map></Map>}></Route>
                        <Route path='/' element={<Home userObj={userObj} />} />
                        <Route path='/profile' element={<Profile userObj={userObj} />} />
                    </>
                    : <>
                        <Route path='/' element={<Auth />} />
                    </>}
            </Routes>
            {isloggined && <Navigation userObj={userObj}></Navigation>}
        </Router>
    )
}
export default AppRouter