type Products = {
  id: string;
  createdAt: Date;
  name: string;
  price: number;
};

export interface IUserData {
  id: string;
  createdAt: Date;
  name?: string;
  email: string;
  password: string;

  registeredCards?: [
    id: string,
    createdAT: Date,
    userId: string,
    cardNumber: string,
    cardSafetyCode: string,
    shelfLifeTime: Date
  ];

  purchases?: [
    id: string,
    createdAT: Date,
    userId: string,
    products: Products[]
  ];

  adress?: [
    id: string,
    streetName: string,
    homeNumber: string,
    zipCode: string,
    Reference: string,
    userId?: string
  ];

  refreshToken: {
    id: string;
    expiresIn: number;
    userId: string;
  };
}
