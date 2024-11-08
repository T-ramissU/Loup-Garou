import { Player } from "@/interfaces/PlayerInterface";
import { create } from "zustand";

type State = {
  players: Player[];
};

type Action = {};

export const useGameStore = create<State & Action>((set) => ({
  players: [],
}));
