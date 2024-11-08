import { Role } from "./RoleInterface";

export interface Player {
  Name: string;
  Role: Role;
  IsAive: boolean;
  HasPlayed: boolean;
  id: number;
}
