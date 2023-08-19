import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import "./menu-bar.css";

export default function MenuBar() {
    return (
        <AppBar className="main"  position="static">
            <div className="wrapper">
                <div className="title">
                    <Image className="logo" src="/logo.png" alt="logo" width={140} height={35}  />
                    <div className="title-text">Planejamento de cardápio</div>
                </div>
                <div className="settings">
                    <Avatar className="avatar" sx={{ bgcolor: "#F2E8C1" }}>MG</Avatar>
                </div>
            </div>
        </AppBar>
    );
};