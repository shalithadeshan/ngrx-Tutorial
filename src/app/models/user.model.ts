export class User {
  constructor(
    private email: string,
    private token: string,
    private localId: string,
    private expirationDate: Date
  ) {}

  get expireDate(): any {
    return this.expirationDate;
  }

  get userToken(): any {
    return this.token;
  }
}

