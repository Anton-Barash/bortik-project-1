import React from "react";
import styled from "@emotion/styled";
import AddRemove from "./AddRemove";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { changeSideBarOpened } from "../store/manage";

const CardStyled = styled(Container)`
    background-color: white;
    margin: 10px 10px;
    padding: 10px 10px;
    max-width: 1200px;
`;

const MyRow = styled(Row)`
    justify-content: center;
    align-items: center;
`;

const MyCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 10px 10px;
    text-align: center;
`;

const Prices = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 10px 10px;
    text-align: center;
    min-width: 250px;
`;

const RetailPrice = styled.div({
    backgroundColor: "#69F0AE",
    padding: "2px 5px",
    borderRadius: "3px",
});

const Tip = styled.div({
    fontSize: "12px",
});

function Card({ item }) {
    const dispatch = useDispatch();
    const sideBarOpened = useSelector((state) => state.manage.sideBarOpened);
    const mobileScreen = useSelector((state) => state.manage.mobileScreen);

    const handleSelect = (name) => {
        if (mobileScreen) {
            dispatch(changeSideBarOpened(false));
        }
    };

    return (
        <CardStyled onClick={() => handleSelect()}>
            <MyRow>
                {item.img ? (
                    <Col xs="auto">
                        <img src={item.img} alt={""} width="100" height="100"></img>
                    </Col>
                ) : null}
                <MyCol style={{ fontWeight: "500" }} xs={12} sm="auto">
                    {item.title}
                </MyCol>
                <Prices>
                    <RetailPrice>Цена с НДС {item.price} руб</RetailPrice>
                    {sideBarOpened && mobileScreen ? null : (
                        <div>
                            <div>Цена без НДС {item.priceopt} руб</div>
                            <div>
                                <div>Цена без НДС {item.pricemegaopt} руб*</div>
                                <Tip>*(при общей сумме заказа от 250 руб)</Tip>
                            </div>
                        </div>
                    )}
                </Prices>
                {sideBarOpened && mobileScreen ? null : (
                    <MyCol xs="auto">
                        <AddRemove />
                    </MyCol>
                )}
            </MyRow>
        </CardStyled>
    );
}

export default Card;
