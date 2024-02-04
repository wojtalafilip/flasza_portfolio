"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mobileNavToggle } from "@/src/redux/features/nav-slice";

function BioContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mobileNavToggle(false));
  }, []);

  return (
    <div>
      <p className="font-semibold">CV</p>
      <p className="font-semibold">KINGA FLASZA</p>
      <p>ur.1999 w Bielsku-Białej</p>
      <p className="pb-4">pracuje we Wrocławiu</p>
      <p className="pb-12">
        Absolwentka Malarstwa na Akademii Sztuk Pięknych im. Eugeniusza Gepperta
        we Wrocławiu (2023)
      </p>
      <p>TESSSTTTT</p>
      <p className="pb-4 font-semibold">WYBRANE WYSTAWY</p>
      <p className="pb-4">2023</p>
      <p>
        <i>Postawy 9</i>, mia Art Gallery, Wrocław
      </p>
      <p className="pb-4">
        <i>Uchwycenia</i>, , Apteka Sztuki, Warszawa
      </p>
      <p className="pb-4">2022</p>
      <p>
        <i>Budowanie ogrodu wokół płonącego domu</i>, Duża Scena UAP, Poznań
      </p>
      <p>
        <i>Postawy 8</i>, Wystawa pokonkursowa, mia Art Gallery, Wrocław{" "}
      </p>
      <p>
        <i>V Ogólnopolski Konkurs Malarski im. Leona Wyczółkowskiego</i>, BWA
        Bydgoszcz{" "}
      </p>
      <p>
        <i>Przegląd Młodej Sztuki IMPULS</i>, Salon Goldenmark, Wrocław{" "}
      </p>
      <p>
        <i>Łopot</i>, Galeria Sztuki Współczesnej MD_S, Wrocław{" "}
      </p>
      <p>
        <i>Wibracje i Metafory</i>, CSW Solvay, Kraków{" "}
      </p>
      <p className="pb-12">
        <i>TAKE UP SPACE</i>, Centrum Kultury Zamek, Wrocław
      </p>
      <p className="pb-4 font-semibold">WYSTAWY INDYWIDUALNE</p>
      <p className="pb-4">2023</p>
      <p className="pb-12">
        <i>SNY NIE SĄ TYM CZYM SIĘ WYDAJĄ</i>, Galeria Miejska, Wrocław
      </p>
      <p className="pb-4 font-semibold">NAGRODY I WYRÓŻNIENIA</p>
      <p className="pb-4">2023</p>
      <p className="pb-4">
        <i>Grand Prix</i> w konkursie Postawy 9, mia Art Gallery, Wrocław
      </p>
      <p className="pb-4">2022</p>
      <p>
        <i>Finalistka</i> V Ogólnopolski Konkurs Malarski im. Leona
        Wyczółkowskiego, BWA Bydgoszcz
      </p>
      <p>
        <i>Wyróżnienie</i> w konkursie Postawy 8, mia Art Gallery, Wrocław
      </p>
      <p>
        <i>Wyróżnienie</i> w Przeglądzie Młodej Sztuki IMPULS, Salon Goldenmark,
        Wrocław
      </p>
    </div>
  );
}

export default BioContainer;
