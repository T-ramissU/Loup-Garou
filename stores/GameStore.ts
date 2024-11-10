import { Player } from "@/interfaces/PlayerInterface";
import { Role } from "@/interfaces/RoleInterface";
import { create } from "zustand";
import allCards from "@/assets/cards/origin.json";

type State = {
  players: Player[];
  game: {
    phase: "setup" | "night" | "day" | "voting" | "gameOver";
    round: number;
  };
  cards: Role[];
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
  addCard: (name: string) => void;
  removeCard: (name: string) => void;
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

  cards: allCards as Role[],
  startGame: () =>
    set(() => ({
      game: { phase: "night", round: 1 },
    })),

  startNightPhase: () =>
    set((state) => ({
      game: { ...state.game, phase: "night" },
    })),

  addCard: (name: string) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.Name === name
          ? { ...card, Number: (card.Number ?? 0) + 1 } // Increment by 1
          : card
      ),
    })),

  removeCard: (name: string) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.Name === name
          ? { ...card, Number: Math.max((card.Number ?? 0) - 1, 0) } // Decrement but ensure it doesn’t go below 0
          : card
      ),
    })),
  startDayPhase: () =>
    set((state) => ({
      game: { ...state.game, phase: "day" },
    })),
  addRole: () =>
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
