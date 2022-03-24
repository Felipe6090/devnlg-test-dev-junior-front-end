import Logo from "./Components/Logo";

import * as I from "../inputs";

import * as S from "./styles";

export default function Header() {
  return (
    <S.HeaderMainDiv>
      <Logo />
      <I.SeachInput placeholder="O Que deseja encontrar" />
      <I.OutlinedButton size="medium" marginLeft="auto">
        Login
      </I.OutlinedButton>
    </S.HeaderMainDiv>
  );
}
