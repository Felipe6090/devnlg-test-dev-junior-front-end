import { useContext, useState } from "react";

import Image from "next/image";

import { useRouter } from "next/router";

import Logo from "./Components/Logo";
import LoginModal from "../LoginModal";

import * as I from "../inputs";
import * as S from "./styles";

import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const [loginHandler, setLoginHandler] = useState(false);

  const { authData } = useContext(AuthContext);

  const router = useRouter();

  return (
    <S.HeaderMainDiv>
      <Logo />

      <I.SeachInput placeholder="O Que deseja encontrar" />

      {!authData ? (
        <I.OutlinedButton
          size="medium"
          marginLeft="auto"
          onClick={() => setLoginHandler(!loginHandler)}
        >
          Login
        </I.OutlinedButton>
      ) : (
        <I.UserIconDiv>
          <Image
            onClick={() => {
              console.log(authData);
              router.push(`/profile/${authData.id}`);
            }}
            src="/user.png"
            layout="fixed"
            width={24}
            height={24}
            alt="User Icon"
          />
        </I.UserIconDiv>
      )}

      <LoginModal
        isOpen={loginHandler}
        onClose={() => {
          setLoginHandler(!loginHandler);
        }}
      />
    </S.HeaderMainDiv>
  );
}
