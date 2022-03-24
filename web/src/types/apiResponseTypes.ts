export interface IBrazilianProducts {
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  preco: string;
  material: string;
  departamento: string;
  id: string;
}

export interface IEuropeanProducts {
  hasDiscount: boolean;
  name: string;
  gallery: string[];
  description: string;
  price: string;
  discountValue: string;
  details: {
    adjective: string;
    material: string;
  };
  id: string;
}

export type IProductsList = (IBrazilianProducts[] & IEuropeanProducts[])[];

export type ISecundaryProductsList = (IBrazilianProducts & IEuropeanProducts)[];
