import Image from "next/image";

import * as S from "./styles";

export default function Logo() {
  return (
    <S.LogoMainDiv>
      <Image
        layout="fixed"
        width={40}
        height={30}
        alt="Logo Image"
        src="/LogoImage.png"
      />

      <Image
        layout="fixed"
        width={126}
        height={18.5}
        alt="Logo Image"
        src="/LogoBrand.png"
      />
    </S.LogoMainDiv>
  );
}
