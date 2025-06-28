import type IUsers from "./IUsers";

export  type res = {
  deleteSuccess?:boolean;
  createSuccess?: boolean;
  updateSuccess?: boolean;
  message: string;
  user: IUsers;
};