// components/modules/Footer.tsx

const Footer = () => {
    return (
      <div style={{display: "flex", minWidth: "1050px", height: "120px", justifyContent: "center"}}>
        <div style={{display: "block", minWidth: "1000px", height: "120px", justifyContent: "center"}}>
          <div style={{display: "flex", width: "auto", height: '50px', justifyContent: "center", textAlign: "center", gap: "2rem"}}>
            <a href="#">회사 소개</a>
            <a href="#">제휴 안내</a>
            <a href="#">광고 안내</a>
            <a href="#"><b>개인정보 처리 방침</b></a>
            <a href="#">이용 약관</a>
          </div>

          <div style={{height: '30px', width: "auto", textAlign: "center"}}>
            Copyright 2024 - 2024 페이지 이름. All rights reserved
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  