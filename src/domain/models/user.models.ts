export class UserModel {
  constructor(
    public id: string | null,
    public name: string,
    public lastName: string,
    public email: string,
    public birthday: string,
    public genre: string
  ) {}
}
export class UserModelUpdate {
  constructor(
    public id: string,
    public name: string | null,
    public lastName: string | null,
    public email: string | null,
    public birthday: string | null,
    public genre: string | null
  ) {}
}
