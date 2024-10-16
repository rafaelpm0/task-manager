"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import menu from "@/app/utils/menu";
import Link from "next/link";
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";

function SideBar() {
  const { theme } = useGlobalState();

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SideBarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image src="/avatar1.png" alt="profile" width={70} height={70}/>
        </div>
        <div>
          <span>Sin</span>
          <span>Rostro</span>
        </div>
      </div>
        <ul className="nav-items">
          {menu.map((item: any) => {
            const link = item.link;

            return (
              <li
                className={`nav-items ${pathname === link ? "active" : ""}`}
                onClick={() => handleClick(link)}
              >
                {item.icon}
                <Link href={link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <span></span>
     
    </SideBarStyled>
  );
}

const SideBarStyled = styled.nav`
  width: ${(props) => props.theme.sidebarWidth};
  position: relative;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:100%;


  .profile {
    margin: 1.5rem;
    position: relative;
    padding: 1rem 0.8rem;
    border-radius: 1rem;
    cursor: pointer;
    font-weight:500;
    color: ${(props) => props.theme.colorGray0};
    display: flex;
    align-items:center;

    .profile-overlay{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      backdrop-filter: blur(10px);
      z-index:0;
      background: ${(props)=> props.theme.colorBg3};
      transition: all 0.55s linear;
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};
      opacity: 0.2;


    }
  }



  //referente as listas, acho que pulei alguma conf padrão no css, estou corrigindo aqui
  ul {
    list-style-type: none;
    padding:0;
  }

  .nav-items,
  .nav-items a {
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey3};
    text-decoration: none;
  }
  //até aqui não sei porque o dele tem umas conf basicas que o meu não tem, mas manter no código da o mesmo efeito





`;

export default SideBar;
