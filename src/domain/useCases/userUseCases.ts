import { UserModel, UserModelUpdate } from "../models/user.models";
import { ApiResponse } from "../../utils/responseTemplate";
interface createUser {
  execute: (user: UserModel) => Promise<ApiResponse<UserModel> | void>;
}

interface updateUser {
  execute: (user: UserModelUpdate) => Promise<ApiResponse<any> | void>;
}

interface deleteUser {
  execute: (user_id: string) => Promise<ApiResponse<object> | void>;
}

interface getAllUsers {
  execute: () => Promise<ApiResponse<UserModel[] | any[]> | void>;
}
export { createUser, updateUser, deleteUser, getAllUsers };
