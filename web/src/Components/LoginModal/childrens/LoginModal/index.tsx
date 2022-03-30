import * as S from "./styles";
import * as T from "../../../Typography";
import * as I from "../../../inputs";

import { useContext, useState } from "react";

import { setCookie } from "nookies";
import { api } from "../../../../../pages/api/api";
import { AuthContext } from "../../../../contexts/AuthContext";

type IType = {
  onClose: () => void;
};

export default function LoginModalComponent({ onClose }: IType) {
  const [loginFilds, setLoginFilds] = useState({
    email: "",
    password: "",
  });

  const { authData, setAuthData } = useContext(AuthContext);

  async function loginHandler() {
    if (loginFilds.email === "" || loginFilds.password === "") {
      return;
    }

    const result = await api.post("/login", loginFilds);

    const data = result.data;

    console.log(data);

    if (data.status === "Error") {
      throw new Error("Login Failed");
    }

    setCookie(undefined, "auth_token", data.refreshToken.id, {
      maxAge: 60 * 60 * 1,
    });

    onClose();

    return await setAuthData(data.useData);
  }

  return (
    <S.ModalMainDiv>
      <T.ProductPrice>Iniciar Sessão</T.ProductPrice>

      <I.ContactInputs
        placeholder="Escreva seu email"
        border={true}
        value={loginFilds.email}
        onChange={(e) => {
          setLoginFilds({
            ...loginFilds,
            email: e.target.value,
          });
        }}
      />

      <I.ContactInputs
        placeholder="Escreva sua senha"
        border={true}
        value={loginFilds.password}
        onChange={(e) => {
          setLoginFilds({
            ...loginFilds,
            password: e.target.value,
          });
        }}
      />

      <I.BlueButton size="full" onClick={loginHandler}>
        Entrar
      </I.BlueButton>
    </S.ModalMainDiv>
  );
}
