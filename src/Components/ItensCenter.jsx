import React from "react";
import styled from "styled-components";


const ItensCenter = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    .text {
        font-weigth: bold;
    }
`;

export default ({type, from, value}) => {
    return (
        <ItensCenter>
            <span className="text">{type}</span>
            <span className="text">{from}</span>
            <span className="text">{value}</span>
        </ItensCenter>
    )
}