export interface Role {
  Name:
    | string
    | "Villageois"
    | "Cupidon"
    | "Loup-garou"
    | "Sorcière"
    | "Chasseur"
    | "Voyante"
    | "Petite fille"
    | "Voleur";
  Image: string;
  Description: string;
  Victory: string;
  Side: string;
  Number: number;
  Priority: number;
  Narration?: string;
  Action?: string;
  Remember?: string;
}
