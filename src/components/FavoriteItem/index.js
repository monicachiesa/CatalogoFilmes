import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { RateContainer, Container, Title, Rate, ActionContainer, DetailButton, DeleteButton } from './styles';

import { Ionicons, Feather } from '@expo/vector-icons'

function FavoriteItem({data, deleteMovie, navigatePage}) {
    return (
        <Container>
            <Title size={22}>{data.title}</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#e7a74e" />
                <Rate>{data.vote_average}</Rate>
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={() => navigatePage(data)}>
                    <Title size={14}> Ver detalhes</Title>
                </DetailButton>

                <DeleteButton onPress={() => deleteMovie(data.id)}>
                    <Feather name="trash" size={24} color="#FFF" />
                </DeleteButton>
            </ActionContainer>

        </Container>
    )
}

export default FavoriteItem;