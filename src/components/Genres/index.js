import React from "react";
import {Container, Name, Text} from './styles';

function Genres({data}) {
return(
    <Container>
        <Name>{data.name}</Name>
    </Container>
)

}

export default Genres;
