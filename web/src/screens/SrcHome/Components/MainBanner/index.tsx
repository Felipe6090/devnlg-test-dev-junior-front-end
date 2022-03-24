import * as S from "./styles";
import * as T from "../../../../Components/Typography";
import * as I from "../../../../Components/inputs";

export default function MainBanner() {
  return (
    <S.MainDiv>
      <T.MainCaller>Dezembro Promocional</T.MainCaller>
      <T.DescriptionSpan>
        Produtos selecionados com 33% de desconto
      </T.DescriptionSpan>
      <I.BlueButton size="medium">Ver Consoles</I.BlueButton>
    </S.MainDiv>
  );
}
