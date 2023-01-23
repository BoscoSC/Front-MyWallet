import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import error404 from "../images/error404.png";

export default function Error404() {
  const navigate = useNavigate();
  function goBackHome() {
    navigate("/home");
  }
  return <Image src={error404} onClick={goBackHome} />;
}

const Image = styled.img`
  width: 100%;
  cursor: pointer;
`;
