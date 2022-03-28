import * as S from "./styles";
import * as T from "../../../Typography";
import * as I from "../../../inputs";

type IType = {
  onClose: () => void;
};

export default function LoginModalComponent({ onClose }: IType) {
  return (
    <S.ModalMainDiv>
      <T.ProductPrice>Iniciar Sessão</T.ProductPrice>

      <I.ContactInputs placeholder="Escreva seu email" border={true}/>

      <I.ContactInputs placeholder="Escreva sua senha" border={true}/>

      <I.BlueButton size="full" onClick={onClose} >
        Entrar
      </I.BlueButton>
    </S.ModalMainDiv>
  );
}
