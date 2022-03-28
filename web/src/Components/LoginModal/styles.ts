import styled from "styled-components";

import { ModalUnstyled } from "@mui/base";

export const ModalMainDiv = styled(ModalUnstyled)`
  background-color: #fff;

  backdrop-filter: blur(2px);
  outline: none;

  position: fixed;

  z-index: 2;

  right: 55px;
  top: 70px;

  padding: 50px 50px;
`;
