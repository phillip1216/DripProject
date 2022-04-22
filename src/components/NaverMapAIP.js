import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

const NaverMapAPI = (props) => {
    return (
        <RenderAfterNavermapsLoaded clientId={"1l30t69hkd"}>
            <NaverMap mapDivId={"react-naver-map"} style={{ width: '100%', height: '100%' }} defaultCenter={{ lat: 37.554722, lng: 126.970833 }} defaultZoom={10} />
        </RenderAfterNavermapsLoaded>
    )
}
export default NaverMapAPI