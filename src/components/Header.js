import React from "react";
import styled from "@emotion/styled";
import colors from "../settings/colors";
import MenuButton from "./MenuButton";
import { useLocation, useNavigate } from "react-router";
import HeaderBackButton from "./HeaderBackButton";
import Dropdown from "react-bootstrap/Dropdown";
import ThreeDotsButton from "./ThreeDotsButton";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../store/manage";

const HeaderStyled = styled.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
    height: "50px",
});

const BrandName = styled.div({
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
});

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const search = useSelector((state) => state.manage.search);
    const mobileScreen = useSelector((state) => state.manage.mobileScreen);

    return (
        <HeaderStyled>
            {location.pathname === "/" ? <MenuButton /> : <HeaderBackButton />}
            {mobileScreen && search ? null : <BrandName onClick={() => navigate("/")}>Bortik Project</BrandName>}
            <Search show={search} />
            <Dropdown align="end">
                <Dropdown.Toggle as={ThreeDotsButton} id="dropdown-basic" />
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => dispatch(setSearch(true))}>Поиск</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/login")}>Личный кабинет</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/about")}>О компании</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </HeaderStyled>
    );
}

export default Header;
