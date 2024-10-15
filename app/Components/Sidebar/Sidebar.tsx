"use client"
import React from 'react'
import styled from 'styled-components';
import {useGlobalState} from '@/app/context/globalProvider'

function SideBar(){

    const {theme} = useGlobalState();
  

    return(<SideBarStyled theme={theme}>
        <div className="profile">
            <div className="profile-overlay">
                <img src="/avatar1.png" alt="profile" width={70} height={70}/>
            </div>
        </div>
    </SideBarStyled>)
}

const SideBarStyled = styled.nav`
    width: ${(props) => props.theme.sidebarWidth};
    position:relative;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem

`

export default SideBar;

