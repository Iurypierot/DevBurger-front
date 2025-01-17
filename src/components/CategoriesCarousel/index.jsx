import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, ContainerItems, Title, LinkCategory } from './styles';

export const CategoriesCarousel = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/categories');

            setCategories(response.data);
        }

        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                itemClass="carousel-item"
            >
                {categories.map((item) => (
                    <ContainerItems key={item.id} imageUrl={item.url}>
                        <LinkCategory
                            key={item.id}
                            onClick={() =>
                                navigate({
                                    pathname: '/menu',
                                    search: `?categoria=${item.id}`,
                                })
                            }
                        >
                            {item.name}
                        </LinkCategory>
                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    );
}
