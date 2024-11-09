export interface Role {
  Name:
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
}
