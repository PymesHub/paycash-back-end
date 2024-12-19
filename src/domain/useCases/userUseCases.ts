import { UserModel, UserModelUpdate } from '../models/user.models';
import { ApiError, ApiResponse } from '../../utils/responseTemplate';
interface createUser {
  execute: (user: UserModel) => Promise<ApiResponse<UserModel> | void>;
}

interface updateUser {
  execute: (user: UserModelUpdate) => Promise<ApiResponse<UserModel> | void>;
}

interface deleteUser {
  execute: (user_id: string) => Promise<ApiResponse<object> | void>;
}

interface getAllUsers {
  execute: (
    page: string,
    page_size: string
  ) => Promise<ApiResponse<UserModel[]> | void>;
}
export { createUser, updateUser, deleteUser, getAllUsers };
