import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CartItem from "./CartItem";

const CartTableStyled = styled.div({
    width: "100%",
    maxWidth: "1000px",
    paddingLeft: "10px",
    paddingRight: "10px",
});

const EmptyCart = styled.div({
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "500",
});

function CartTable({ cart, priceType, sum }) {
    const { t } = useTranslation();
    const mobileScreen = useSelector((state) => state.manage.mobileScreen);

    if (cart.length > 0) {
        return (
            <CartTableStyled>
                {cart.map((item) => (
                    <CartItem item={item} priceType={priceType} key={item.id} />
                ))}
                <div style={{ fontWeight: "500" }}>{t("Общая сумма") + ": " + sum.toFixed(2) + " BYN"}</div>

                <div style={{ fontSize: "16px" }}>
                    {t("Цена")}: {t(priceType)}
                </div>
            </CartTableStyled>
        );
    }
    return <EmptyCart>{t("Корзина пуста")}</EmptyCart>;
}

export default CartTable;
