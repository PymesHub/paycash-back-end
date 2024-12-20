// src/utils/responseTemplate.ts

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface ApiError extends Error {
  statusCode: number;
  details?: string;
}

export const createResponse = <T>(
  success: boolean,
  message: string,
  data?: T,
  error?: string,
): ApiResponse<T> => {
  return {
    success,
    message,
    data,
    error,
  };
};

export const throwError = (
  statusCode: number,
  message: string,
  details?: string,
): never => {
  const error: ApiError = new Error(message) as ApiError;
  error.statusCode = statusCode;
  error.details = details;
  throw error;
};
