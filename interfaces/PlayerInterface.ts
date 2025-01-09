import { Role } from "./RoleInterface";

export interface Player {
  Name: string;
  Role: Role;
  IsAlive: boolean;
  HasPlayed: boolean;
  id: number;
  Couple?: number;
  DeathPotion?: boolean;
  LifePotion?: boolean;
}
