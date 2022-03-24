import Link from "next/link";
import Logo from "../Header/Components/Logo";

import FooterLinks from "./mock";

import * as S from "./styles";
import * as T from "../Typography";
import * as I from "../inputs";

export default function Footer() {
  return (
    <S.MainDiv>
      <S.InfosDiv>
        <Logo />

        <S.LinksDiv>
          {FooterLinks.map((link) => {
            return (
              <Link href={link.link} passHref replace key={link.id}>
                <T.SecundaryLink>{link.description}</T.SecundaryLink>
              </Link>
            );
          })}
        </S.LinksDiv>

        <S.Form>
          <T.ProductPrice>Fale Conosco</T.ProductPrice>

          <I.ContactInputs placeholder="Nome" type="text" />

          <I.ContactInputs
            contactType="message"
            type="text"
            placeholder="Escreva sua mensagem"
          />

          <I.BlueButton size="medium">Enviar Mensagem</I.BlueButton>
        </S.Form>
      </S.InfosDiv>

      <S.Baseboard>
        <T.ProductTitle>Desenvolvido por Felipe Vieira</T.ProductTitle>
        <T.ProductTitle>2022</T.ProductTitle>
      </S.Baseboard>
    </S.MainDiv>
  );
}
