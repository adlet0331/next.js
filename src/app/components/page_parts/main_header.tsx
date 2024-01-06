// components/modules/Header.tsx

import Image from "next/image";
import page_logo from "/public/assets/image/page_logo.png"

const Header = () => {
    return (
      <div style={{display: "flex", minWidth: "1050px", height: "100px", justifyContent: "center"}}>
        <div style={{minWidth: "1000px", backgroundColor: "white", position: "relative" }}>

          <div style={{width: "200px", height: "75px", position: "absolute", top: "12.5px", left: "30px"}}>
          <a href="https://www.dcinside.com"><Image src={page_logo} width="200" height="75" alt="메인 페이지로" /></a>
          </div>

          <div style={{width:"450px", height: "60px",backgroundColor: "grey", position: "absolute", top: "20px", left: "270px"}}>
            검색창
          </div>

          <div style={{width:"100px", height: "60px",backgroundColor: "grey", position: "absolute", top: "20px", right: "100px"}}>
            뭔가 정보들?
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  