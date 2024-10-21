"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";

function Tasks() {
    const {theme} = useGlobalState();
  
    return <TaskStyled theme={theme}>Tasks</TaskStyled>;
}

const TaskStyled = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${(props)=> props.theme.colorBg2};
    border: 2px solid ${(props)=> props.theme.borderColor2};
    padding: 2rem;
    border-radius: 1rem;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }   
    `;


export default Tasks;
