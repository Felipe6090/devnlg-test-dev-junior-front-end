import Image from "next/image";
import Link from "next/link";

import { useContext, useEffect } from "react";

import * as S from "./styles";
import * as T from "../../../../Components/Typography";
import * as I from "../../../../Components/inputs";

import { ProductsListContext } from "../../../../contexts/productsListContext";

import {
  IBrazilianProducts,
  IEuropeanProducts,
} from "../../../../types/apiResponseTypes";

function ProductsList() {
  const { productsList } = useContext(ProductsListContext);

  const brazilianProducts: IBrazilianProducts[] = productsList[0];

  const europeanProducts: IEuropeanProducts[] = productsList[1];

  return (
    <S.MainDiv>
      <S.SectionDiv>
        <S.DefaultRow>
          <T.SectionTitle>Produtos Brasileiros</T.SectionTitle>

          <Link href="/" replace passHref>
            <I.SeeAllButton>Ver Tudo</I.SeeAllButton>
          </Link>
        </S.DefaultRow>
        <S.ProductsRow>
          {brazilianProducts.map((product: IBrazilianProducts) => {
            const linkHelper = product.nome.replace(/\s/g, "-");

            return (
              <S.ProductDiv key={product.id}>
                <Image
                  loader={() => product.imagem}
                  unoptimized
                  src={product.imagem}
                  alt={product.nome}
                  layout="fixed"
                  width="176"
                  height="174"
                />

                <T.ProductTitle>{product.nome}</T.ProductTitle>

                <T.ProductPrice>R$ {product.preco} </T.ProductPrice>

                <Link href={`/products/${linkHelper}`} replace passHref>
                  <T.DefaultLink>Ver Produto</T.DefaultLink>
                </Link>
              </S.ProductDiv>
            );
          })}
        </S.ProductsRow>
      </S.SectionDiv>

      <S.SectionDiv>
        <S.DefaultRow>
          <T.SectionTitle>Produtos Europeus</T.SectionTitle>

          <Link href="/" replace passHref>
            <I.SeeAllButton>Ver Tudo</I.SeeAllButton>
          </Link>
        </S.DefaultRow>
        <S.ProductsRow>
          {europeanProducts.map((product: IEuropeanProducts) => {
            const linkHelper = product.name.replace(/\s/g, "-");

            return (
              <S.ProductDiv key={product.id}>
                <Image
                  loader={() => product.gallery[0]}
                  unoptimized
                  src={product.gallery[0]}
                  alt={product.name}
                  layout="fixed"
                  width="176"
                  height="174"
                />

                <T.ProductTitle>{product.name}</T.ProductTitle>

                <T.ProductPrice>R$ {product.price} </T.ProductPrice>

                <Link href={`/products/${linkHelper}`} replace passHref>
                  <T.DefaultLink>Ver Produto</T.DefaultLink>
                </Link>
              </S.ProductDiv>
            );
          })}
        </S.ProductsRow>
      </S.SectionDiv>
    </S.MainDiv>
  );
}

export default ProductsList;

/*
 {data.map((section) => {
        return (
          <S.SectionDiv key={section.id}>
            <S.DefaultRow>
              <T.SectionTitle>{section.sectionDescription}</T.SectionTitle>
              <Link href="/" replace passHref>
                <I.SeeAllButton>Ver Tudo</I.SeeAllButton>
              </Link>
            </S.DefaultRow>

            <S.ProductsRow>
              {section.products.map((product) => {
                return (
                  <S.ProductDiv key={product.id}>
                    <Image
                      src={product.image}
                      alt={product.imgAlt}
                      layout="fixed"
                      width="176"
                      height="174"
                    />

                    <T.ProductTitle>{product.name}</T.ProductTitle>

                    <T.ProductPrice>R$ {product.price} </T.ProductPrice>

                    <Link href="/" replace passHref>
                      <T.DefaultLink>Ver Produto</T.DefaultLink>
                    </Link>
                  </S.ProductDiv>
                );
              })}
            </S.ProductsRow>
          </S.SectionDiv>
        );
      })}
*/
