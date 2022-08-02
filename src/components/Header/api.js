import { AppRequest } from "@utils";
import { API_PATHS } from "@config/constants";

export const logout = () => {
  return AppRequest.delete(API_PATHS.logout).catch((error) =>
    console.log(error)
  );
};
