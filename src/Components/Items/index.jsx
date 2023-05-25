import styled from "styled-components";
import React from "react";
import ItemTeste from "../ItemTeste";
import ImageFilter from "../ImageFilter";




const Items = styled.div`
box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
boder-radius: 10px;
margin: 2px;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
font-size: 12px
`;    

export default ({id, type, from, value, date}) => {
    return <Items>
                {ImageFilter(type)}
                <ItemTeste from={from} value={value} type={type}></ItemTeste>
                <div>{type}</div>
        
           </Items>
}