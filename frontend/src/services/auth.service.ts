import axios from "axios";

import { User } from "@/interfaces/user.interface";

export const signIn = async (userSignInData: {
  username: string;
  password: string;
}) => {
  const { data } = await axios.post(
    "http://localhost:8080/api/user/login.php",
    { ...userSignInData }
  );
  return data.user as User;
};
