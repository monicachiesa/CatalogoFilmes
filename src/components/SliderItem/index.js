import React from 'react';
import { View, Text } from 'react-native'
import { Container,
BannerItem,
Title,
RateContainer,
Rate 
} from './styles';
import { Ionicons } from '@expo/vector-icons';

function SliderItem({data} ){
     
    return (
        <Container activeOpacity={0.7}> 
            <BannerItem 
            source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}
            />
            <Title numberOfLines={1}><Text>{data.title}</Text></Title>

            <RateContainer>
            <Ionicons name="md-star" size={12} color="#E7A74e"/>
            <Rate><Text>{data.vote_average}/10</Text></Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;