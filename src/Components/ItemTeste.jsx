import React from "react";
import styled from "styled-components";


const ItemTeste = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    .text {
        font-weigth: bold;
    }
`;

export default ({type, from, value}) => {
    return (
        <ItemTeste>
            <span className="text">{type}</span>
            <span className="text">{from}</span>
            <span className="text">{value}</span>
        </ItemTeste>
    )
}