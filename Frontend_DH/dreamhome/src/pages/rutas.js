/**
 * @author Nadia Paola Ferro Gallegos
 * @description Archivo para establecer las rutas en la pantalla de la aplicacion
 */

import {Route, Routes } from "react-router-dom";

import PantallaAlbum from "./PantallaAlbum";
import PantallaInicio from "./PantallaInicio";
import PantallaQuest from "./PantallaQuest";

const Rutas = () => {
  return (
    <>
        <Routes>
            {/* Pagina de inicio */}
            <Route path="/" element={<PantallaInicio />} />

            {/* Pagina de questionario */}
            <Route path="/Questionario" element={<PantallaQuest />}>
            </Route>

            {/* Pagina de Album */}
            <Route path="/Casas" element={<PantallaAlbum />} />
        </Routes>
    </>
  )
}

export default Rutas;
