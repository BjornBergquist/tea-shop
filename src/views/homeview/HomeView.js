import React from "react";
import { ProductCard } from "../../components/cards/productcard/ProductCard";
import { ProductGrid } from "../../components/productgrid/ProductGrid";
import tea2 from "../../shared/img/tea2.jpg";

export const HomeView = () => {
  return (
    <main>
      <section>
        <p> This is new </p>
        <p>Browse our vast selection of </p>
        <h2>Unique Blends from all over the World</h2>
        {/* Three cards */}
        <div style={{ display: "flex" }}>
          <ProductCard name="Graceful Greens" img={tea2} imgalt="Foto of tea" />
          <ProductCard name="Graceful Greens" img={tea2} imgalt="Foto of tea" />
          <ProductCard name="Graceful Greens" img={tea2} imgalt="Foto of tea" />
        </div>
      </section>
      <section>next section</section>
      <section>
        <p>Try one of over 200 different freshly brewed teas </p>
        <h2>In Our Store Café</h2>
        <ProductGrid />
      </section>
    </main>
  );
};
