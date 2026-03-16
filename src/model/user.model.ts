import type { Role } from "@/enums/role";

export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public role: Role,
  ) {}
}
