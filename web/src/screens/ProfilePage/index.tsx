import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function ProfilePage() {
  const { authData } = useContext(AuthContext);

  console.log(authData);

  return (
    <>
      <Image
        src="/user.png"
        alt="User Icon"
        layout="fixed"
        width={24}
        height={24}
      />
    </>
  );
}
