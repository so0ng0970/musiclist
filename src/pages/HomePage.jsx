import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../global/Layout";
import NaviHome from "../components/home/NaviHome";
import MusicList from "../components/addMusic/MusicList";
import MusicDetailPage from "./MusicDetailPage";


const Homepage = (props) => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div>
                <div>오늘 뭐 듣지?</div>
                <NaviHome onClick={()=> navigate("/add")}>
                <h4>추천하러가기</h4>
                </NaviHome>
                <NaviHome onClick={()=>navigate("/musicList")}>
                    <h4>추천노래 보러가기</h4>
                </NaviHome>
            
            </div>
        </Layout>
    )
}

export default Homepage;