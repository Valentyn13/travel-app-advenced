export interface IUser {
  id: string;
  email: string;
  fullName: string;
  createdAt?: string;
}

export interface SignUpUserDto {
  fullName: string;
  email: string;
  password: string;
}

export interface SignInUserDto {
  email: string;
  password: string;
}

export interface UserResponseDto {
  token: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    createdAt: string;
  };
}

export interface IAuthorizedUserResponse {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}
