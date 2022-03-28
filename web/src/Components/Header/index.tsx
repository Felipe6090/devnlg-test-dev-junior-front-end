import { useState } from "react";

import Logo from "./Components/Logo";
import LoginModal from "../LoginModal";

import * as I from "../inputs";

import * as S from "./styles";

export default function Header() {
  const [loginHandler, setLoginHandler] = useState(false);

  return (
    <S.HeaderMainDiv>
      <Logo />
      <I.SeachInput placeholder="O Que deseja encontrar" />
      <I.OutlinedButton
        size="medium"
        marginLeft="auto"
        onClick={() => setLoginHandler(!loginHandler)}
      >
        Login
      </I.OutlinedButton>

      <LoginModal
        isOpen={loginHandler}
        onClose={() => {
          setLoginHandler(!loginHandler);
        }}
      />
    </S.HeaderMainDiv>
  );
}
