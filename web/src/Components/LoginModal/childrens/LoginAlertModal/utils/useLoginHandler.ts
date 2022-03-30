import { api } from "../../../../../../pages/api/api";

import { setCookie } from "nookies";

type ISign = {
  email: string;
  password: string;
};

export default async function useLoginHandler(
  data: ISign,
  onClose: () => void
) {
  if (data.email === "" || data.password === "") {
    return;
  }

  const result = await (await api.post("/login", data)).data;

  console.log(result);

  setCookie(undefined, "auth_token", result.refreshToken.id, {
    maxAge: 60 * 15,
  });

  onClose();

  return result.refreshToken.id;
}
