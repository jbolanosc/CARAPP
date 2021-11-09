import { keys } from "ts-transformer-keys";

export interface Login {
  email: string;
  password: string;
}

export const getKeys = () => {
  let interfaceKeys: any = keys<Login>();
  return interfaceKeys;
};
