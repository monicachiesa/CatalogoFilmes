import React, { useState, useEffect } from 'react'

import { Container, Header, HeaderButton, Banner, ButtonLink, Title } from './styles';
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import api, { key } from '../../services/api'
import { NativeModules } from 'react-native';

function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        let isActive = true;
        async function getMovie() {
            const response = await api.get(`/movie/${route.params?.id}`, {
                params:
                {
                    api_key: key,
                    language: 'pt-BR',
                }
            }).catch((err) => {
                console.log("ERROOOOOOOOOOO", err)
            })
            if (isActive) {
                setMovie(response.data);
            }
        }
        if (isActive) {
            getMovie();
        }

        return () => {
            isActive = false;
        }
    }, [])

    return (
        <Container>
            <Header>
                <HeaderButton activeOpacity={0, 7} onPress={() => navigation.goBack()}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
                <HeaderButton>
                    <Ionicons
                        name="bookmark"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
            </Header>
            <Banner
                resizeMethod="resize"
                source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
            />

            <ButtonLink>
                <Feather name="link" size={24} color="#FFF" />
            </ButtonLink>
            <Title numberOfLines={1} > {movie.Title}</Title>
        </Container>
    )
}

export default Detail;