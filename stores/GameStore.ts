import { Player } from "@/interfaces/PlayerInterface";
import { create } from "zustand";

type State = {
  players: Player[];
  game: {
    phase: "setup" | "night" | "day" | "voting" | "gameOver";
    round: number;
  };
  winners: Player[];
  losers: Player[];
};

type Action = {
  addNewPlayer: () => void;
  setPlayerName: (id: number, Name: string) => void;
  removePlayer: (id: number) => void;
  makeCouple: (idPlayer1: number, idPlayer2: number) => void;
  killPlayer: (id: number) => void;
  revivePlayer: (id: number) => void;
};

export const useGameStore = create<State & Action>((set) => ({
  players: [
    { id: 1 } as Player,
    { id: 2 } as Player,
    { id: 3 } as Player,
    { id: 4 } as Player,
  ],
  game: {
    phase: "setup",
    round: 0,
  },
  winners: [],
  losers: [],

  startGame: () =>
    set(() => ({
      game: { phase: "night", round: 1 },
    })),

  startNightPhase: () =>
    set((state) => ({
      game: { ...state.game, phase: "night" },
    })),

  startDayPhase: () =>
    set((state) => ({
      game: { ...state.game, phase: "day" },
    })),

  addNewPlayer: () =>
    set((state) => ({
      players: [...state.players, { id: state.players.length + 1 } as Player],
    })),

  removePlayer: (id) =>
    set((state) => ({
      players: state.players.filter((player) => {
        player.id != id;
      }),
    })),

  setPlayerName: (id, name) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id ? { ...player, Name: name } : player
      ),
    })),

  makeCouple: (idPlayer1, idPlayer2) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === idPlayer1
          ? { ...player, Couple: idPlayer2 }
          : player.id === idPlayer2
          ? { ...player, Couple: idPlayer1 }
          : player
      ),
    })),
  killPlayer: (id) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id ? { ...player, IsAive: false } : player
      ),
    })),
  revivePlayer: (id) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id ? { ...player, IsAive: true } : player
      ),
    })),
}));
