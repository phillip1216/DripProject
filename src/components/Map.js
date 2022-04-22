import React from 'react';
import NaverMapAPI from './NaverMapAIP';
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import '../style/MapStyle.css'

const Map = () => {
    return (
        <div className='Map'>
            <RenderAfterNavermapsLoaded ncpClientId={"1l30t69hkd"}>
                <NaverMapAPI></NaverMapAPI>
            </RenderAfterNavermapsLoaded>
        </div>

    )
}
export default Map