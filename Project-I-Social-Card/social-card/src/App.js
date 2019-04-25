import React from "react";
import "./App.css";

const MainBox = styled.div`
  margin: 25px;
  display: flex;
`;
const LogoBox = styled.img`
  src: "";
  width: 10%;
`;
const AppBox = styled.img`
  width: 80%;
`;

const App = () => {
  return (
    <div className="mainBox">
      <div className="logoBox"></divclassName>
      <div className="appBox">App Box</div>
    </div>
  );
};

export default App;
