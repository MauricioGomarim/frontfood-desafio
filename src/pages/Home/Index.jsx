import { useAuth } from "../../hook/auth";
import { useFavorites } from "../../hook/favorites";
import { useCart } from "../../hook/cart";


import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { Container, Section } from "./style";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card/Index";

// import img banner //
import imgBanner from "../../assets/image-banner.png";

export function Home() {
  const [pratos, setPratos] = useState([]);
  const [search, setSearch] = useState("");

  const { favorites } = useFavorites();

  

  // async function handleFavorites(favorite) {
  //   if (favorite.length === 0) {
  //     return;
  //   }
  //   setPratos(favorites);
  // }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/pratos?title=${search}`);
      setPratos(response.data);
    }
    fetchDishes();
  }, [search]);
  return (
    <Container>
      <Header
        search={setSearch}
        favoritesFilter={() => handleFavorites(favorites)}
      />

      <main>
        <Section className="banner">
          <div>
            <img src={imgBanner} alt="" />
          </div>
          <div>
            <h1>Sabores inigual</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Section>

        <p>Refeições</p>
        <div>
          {pratos.filter((prato) => prato.category == "Refeição").length >
            0 && (
            <Swiper
              grabCursor={true}
              loop={false}
              loopFillGroupWithBlank={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.20": {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              navigation
              modules={[Navigation]}
              className="mySwiper"
            >
              {pratos
                .filter((prato) => prato.category == "Refeição")
                .map((item, index) => (
                  <SwiperSlide key={String(index)}>
                    <Card data={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>

        <p>Sobremesas</p>

        <div>
          {pratos.filter((prato) => prato.category == "Sobremesa").length >
            0 && (
            <Swiper
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.20": {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              navigation
              pagination
              modules={[Navigation]}
              className="mySwiper"
            >
              {pratos
                .filter((prato) => prato.category == "Sobremesa")
                .map((item, index) => (
                  <SwiperSlide key={String(index)}>
                    <Card data={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>

        <p>Bebidas</p>
        <div></div>
      </main>
    </Container>
  );
}
