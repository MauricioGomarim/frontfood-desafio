
import { useFavorites } from "../../hook/favorites";

import { Container } from "./style";
import { Header } from "../../components/Header";
import { CardFavorites } from "../../components/CardFavorites";


export function MyFavorites() {
  const { favorites } = useFavorites();

  return (
    <Container>
      <Header />
      <main>
        <h1>Meus favoritos</h1>
        <div className="Container-cards">
          {favorites.map((item, index) => (
            <CardFavorites data={item} key={index} />
          ))}
        </div>
      </main>
    </Container>
  );
}
