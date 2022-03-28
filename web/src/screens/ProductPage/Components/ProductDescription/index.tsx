import Image from "next/image";

import { useContext } from "react";

import ProductItemContext from "../../../../contexts/productItemContext/productItemContext";

import * as S from "./styles";
import * as T from "../../../../Components/Typography";
import * as I from "../../../../Components/inputs";

export default function ProductDescription() {
  const product = useContext(ProductItemContext);

  return (
    <S.ProductDiv>
      <Image
        loader={() => product.imagem || product.gallery[0]}
        alt={product.nome || product.name}
        src={product.imagem || product.gallery[0]}
        layout="fixed"
        width="560"
        height="403"
      />

      <S.DescriptionDiv>
        <T.ProductSecundaryTitle>
          {product.name || product.nome}
        </T.ProductSecundaryTitle>

        <T.ProductPrice>R$ {product.price || product.preco}</T.ProductPrice>

        <T.ProductDescription>
          {product.descricao || product.description}
        </T.ProductDescription>

        <I.BlueButton marginLeft="auto" size="medium">
          Comprar
        </I.BlueButton>
      </S.DescriptionDiv>
    </S.ProductDiv>
  );
}
