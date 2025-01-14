
import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container } from "./styles";
import { useUser } from "../../hooks/UserContext";

export function Home() {
    console.log(useUser());
     return (
        <main>
            <Banner>
                <h1>Bem-vindo(a) ! </h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarousel />
                    <OffersCarousel />
                </div>
            </Container>

        </main>
    );
}