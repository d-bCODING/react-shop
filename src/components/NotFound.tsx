import React from "react";
import { styled } from "styled-components";

const Not = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  background-color: teal;
  text-align: center;
  line-height: 100px;
  color: white;
  font-size: 26px;
  font-weight: 700;
`;

export default function NotFound() {
  return <Not>NotFound</Not>;
}
