import React from "react";
import { ReactNavbar } from "overlay-navbar";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from "../../../assets/logo.jpg";

const Header = () => {
  return (
    <ReactNavbar
      logo={logo}
      burgerColorHover="#eb4034"
      navColor1="white"
      navColor2="white"
      navColor3="white"

      searchIcon
      profileIcon
      cartIcon

      profileIconUrl="/login"

      SearchIconElement={AiOutlineSearch}
      CartIconElement={AiOutlineShoppingCart}
      ProfileIconElement={AiOutlineUser}

      logoWidth="20vmax"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"

      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"

      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"

      link1Size="1.2vmax"
      link1Margin="1vmax"

      link1Color="rgba(35,35,35,0.8)"
      link2Color="rgba(35,35,35,0.8)"
      link3Color="rgba(35,35,35,0.8)"
      link4Color="rgba(35,35,35,0.8)"

      link1ColorHover="#eb4034"
      link2ColorHover="#eb4034"
      link3ColorHover="#eb4034"
      link4ColorHover="#eb4034"

      nav1JustifyContent="flex-end"
      nav2JustifyContent="flex-end"
      nav3JustifyContent="flex-start"

      profileIconColor="rgba(35,35,35,0.8)"
      searchIconColor="rgba(35,35,35,0.8)"
      cartIconColor="rgba(35,35,35,0.8)"

      profileColorHover="#eb4034"
      searchColorHover="#eb4034"
      cartColorHover="#eb4034"
    />
  );
};

export default Header;
