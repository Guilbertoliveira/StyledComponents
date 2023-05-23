import React from "react";
import { Box, Btn } from "../UI";
import {extratoLista} from "../../info";
import Items from "../Items";


export default function Extrato (){


    return(
        <Box>{extratoLista.updates.map(({id, date, type, from, value})=> {
            return <Items key={id} id={id} type={type} from={from} value={value} date={date}></Items>
              
        })} <Btn>Ver mais</Btn> </Box>
    )
}