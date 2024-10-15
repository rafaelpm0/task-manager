"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import  menu  from "@/app/utils/menu";
import Link from "next/link";

function SideBar() {
  const { theme } = useGlobalState();

  return (
    <SideBarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
          <div className="image">
            <img src="/avatar1.png" alt="profile" width={70} height={70} />
          </div>
          <h1>
            <span>Sin</span>
            <span>Rostro</span>
          </h1>
        </div>
        <ul className="nav-items">
        {menu.map((item: any)=>{
            return <li className="item">
                {item.icon}
                <Link href={item.link}>{item.title}</Link>
            </li>
        })

        }
        </ul>
      </div>
    </SideBarStyled>
  );
}

const SideBarStyled = styled.nav`
  width: ${(props) => props.theme.sidebarWidth};
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;

export default SideBar;
