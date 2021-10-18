import React from "react";
import { MapStyled } from "./styled";

export const MapChalet = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <a
        href="https://yandex.ru/maps/org/shale_river/1061362467/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px"
        }}
      >
        Шале Ривер
      </a>
      <a
        href="https://yandex.ru/maps/10758/himki/category/restaurant/184106394/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px"
        }}
      >
        Ресторан в Химках
      </a>
      <a
        href="https://yandex.ru/maps/10758/himki/category/banquet_hall/184108315/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "28px"
        }}
      >
        Банкетный зал в Химках
      </a>
      <MapStyled
        src="https://yandex.ru/map-widget/v1/-/CCUqZUsa0D"
        style={{ position: "relative" }}
      ></MapStyled>
    </div>
  );
};
