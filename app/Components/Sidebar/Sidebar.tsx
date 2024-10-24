"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import menu from "@/app/utils/menu";
import Link from "next/link";
import Image from "next/image";
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
          <Image src="/avatar1.png" alt="profile" width={70} height={70} />
        </div>
        <h1>
          <span>Sin</span>
          <span>Rostro</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item: any) => {
          const link = item.link;

          return (
            <li
              className={`nav-item ${pathname === link ? "active" : ""}`}
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
  height: 100%;

  .profile {
    margin: 1.5rem;
    position: relative;
    padding: 1rem 0.8rem;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGray0};
    display: flex;
    align-items: center;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all 0.55s linear;
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};
      opacity: 0.2;
    }

    h1 {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;

      line-height: 20px;
    }

    .image,
    h1 {
      position: relative;
      z-index: 1;
    }
    .image {
      flex-shrink: 0;
      display: flex;
      overflow: hidden;
      transition: all 0.55s ease;
      border-radius: 100%;

      width: 70px;
      height: 70px;

      img {
        border-radius: 100%;
        transition: all 0.55s ease;
      }
    }
    >h1{
      margin-left: 0.8rem;
      font-size: clamp(1.2rem, 4vw, 1.4rem);
      line-height: 100%
    }

    &:hover{
      .profile-overlay{
        opacity: 1;
        border: 2px solid ${(props) => props.theme.borderColor2};
      }
      img {
        transform: scale(1.1)
      }
    }

  }

  //referente as listas, acho que pulei alguma conf padrão no css, estou corrigindo aqui
  ul {
    list-style-type: none;
    padding: 0;
  }

  .nav-items,
  .nav-items a {
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.colorGrey3};
    text-decoration: none;
  }
  //até aqui não sei porque o dele tem umas conf basicas que o meu não tem, mas manter no código da o mesmo efeito

  .nav-item{
    padding: 0.6rem 1rem;
    padding-left: 2.1rem;
    margin: 0.3rem 0;
    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;
    position: relative;

    &::after{
      position: absolute;
      content: "";
      left:0;
      top:0;
      width: 0; 
      height:100%;
      z-index: 1;
      background-color: ${(props)=> props.theme.activeNavLinkHover};
      transition: all 0.3s ease-in-out;
    }

    &::before{
      position: absolute;
      content: "";
      right:0;
      top:0; 
      width: 0;
      height:100%;
      background-color: ${(props)=> props.theme.colorGreenDark};

      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    a{
      font-weight: 500;
      z-index: 2;
      transition: all 0.3s ease-in-out;
    }

    i{
      display:flex;
      align-items: center;
      color: ${(props)=> props.theme.colorIcons};
    }
    // criou um hover no after para dar impressao de uma barra transparente crescendo
    &:hover{
      &::after{
        width: 100%;
      }
    }

    }
  
  .active{
    background-color: ${(props) => props.theme.activeNavLink};

    i,a{
      color: ${(props) => props.theme.colorIcons2};
    }  }
    .active::before{
      width:0.3rem;
    }

    >button{
      margin: 1.5rem;
    }
`;

export default SideBar;
