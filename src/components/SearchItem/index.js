import React from 'react';
import { View, Text } from 'react-native';
import { Container, Banner, Title, Rate, RateContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'


function SearchItem({ data, navigatePage }) {

function detailMovie() {
    if(data.release_date === ''){
        alert('Filme ainda sem data')
        return;
    }
    navigatePage(data);
}

    return (
        <Container activeOpacity={0.7} onPress={detailMovie}>
            {data?.poster_path ? (  // se tiver foto do filme
                <Banner
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}` }}
                />
            ) : (  // se não tiver foto
                <Banner
                    resizeMethod="resize"
                    source={{ uri: `https://image.freepik.com/vetores-gratis/impressao-de-composicao-de-bolhas-de-pagina-de-livro-de-quadrinhos_1284-9838.jpg` }}
                />
            )}
            <Title>{data.title}</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#e7a74e" />
                <Rate>{data.vote_average}/10</Rate>
            </RateContainer>

        </Container>
    )
}

export default SearchItem;