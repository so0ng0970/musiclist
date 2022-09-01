import React from "react";
import { Route, Routes, } from "react-router-dom";
import Homepage from "../pages/HomePage";
import MusicAddFormpage from "../pages/MusicAddFormPage";
import MusicListPage from "../pages/MusicListPage";
import MusicDetailPage from "../pages/MusicDetailPage";
import MusicEditPage from "../pages/MusicEditPage";

function GlobalRouter() {
    return (
        <>
         <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/add" element={<MusicAddFormpage />}></Route>
            <Route path="/musiclist" element={<MusicListPage/>}></Route>
            <Route path="/detail/:id" component={MusicDetailPage} element ={<MusicDetailPage/>}></Route>
            <Route path="/edit/:id" element ={<MusicEditPage/>}></Route>

            </Routes>
        </>
    )
}

export default GlobalRouter;