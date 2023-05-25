import styled from "styled-components";
import React from "react";
import ItensCenter from "../ItensCenter";
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
                <ItensCenter from={from} value={value} type={type}></ItensCenter>
                <div>{type}</div>
        
           </Items>
}