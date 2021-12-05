import React from "react";
import styled from "@emotion/styled";
import Table from "react-bootstrap/Table";
import HistoryTableRow from "./HistoryTableRow";
import Button from "react-bootstrap/Button";

const HistoryTableBlockStyled = styled.div({
    marginBottom: "20px",
});

const Divider = styled.div({
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid #e9e9e9",
    paddingBottom: "20px",
});

const createDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const year = date.getFullYear();
    const h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    const result = `${day}.${month}.${year} - ${h}:${m}`;

    return result;
};

function HistoryTableBlock({ order }) {
    return (
        <HistoryTableBlockStyled>
            <div style={{ fontWeight: "500" }}>Заказ №{order.id}</div>
            <div>Дата: {createDate(Number(order.date))}</div>
            <div>Тип цены: {order.price_type}</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Кол.</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map((item) => (
                        <HistoryTableRow item={item} key={item.id} />
                    ))}
                    <tr>
                        <th colSpan="2">Общая сумма</th>
                        <th>{order.sum}</th>
                    </tr>
                </tbody>
            </Table>
            <Divider>
                <Button variant="primary">Повторить заказ</Button>
            </Divider>
        </HistoryTableBlockStyled>
    );
}

export default HistoryTableBlock;
