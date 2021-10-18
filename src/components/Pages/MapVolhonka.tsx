import React from "react";
import { MapStyled } from "./styled";

export const MapVolhonka = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <a
        href="https://yandex.ru/maps/org/osobnyak/1717487526/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "0px"
        }}
      >
        Особняк
      </a>
      <a
        href="https://yandex.ru/maps/213/moscow/category/business_center/184107509/?utm_medium=mapframe&utm_source=maps"
        style={{
          color: "#eee",
          fontSize: "12px",
          position: "absolute",
          top: "14px"
        }}
      >
        Бизнес-центр в Москве
      </a>
      <MapStyled
        title="maps"
        src="https://yandex.ru/map-widget/v1/-/CCUqZUGrXB"
      ></MapStyled>
    </div>
  );
};
