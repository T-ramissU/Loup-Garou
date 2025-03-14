import { Role } from "@/interfaces/RoleInterface";
import { create } from "zustand";
import allCards from "@/assets/cards/origin.json";

type State = {
  game: {
    phase: "setup" | "night" | "day" | "voting" | "gameOver";
    round: number;
  };
  currentCard: {card:Role,index:number};
  cards: Role[];
};

type Action = {
  addCard: (name: string) => void;
  removeCard: (name: string) => void;
  startDayPhase: () => void;
  startGame: () => void;
  startNightPhase: () => void;
  setCurrentCard: (card: Role, index: number) => void;
  updateCurrentCard: () => void;
};

export const useGameStore = create<State & Action>((set, get) => ({
  game: {
    phase: "setup",
    round: 0,
  },
  currentCard: {card:{} as Role,index:0},
  winners: [],
  losers: [],
  cards: [] as Role[],
  startGame: () =>
    set((state) => ({
      game: { phase: "night", round: 1 },
      cards: state.cards.sort((a, b) => b.Priority - a.Priority),
      currentCard:{card:state.cards[0],index:0}
    })),

  startNightPhase: () =>
    set((state) => ({
      game: { ...state.game, phase: "night" },
    })),

  addCard: (name: string) => {
    if (get().cards.find((card) => card.Name === name)) {
      set((state) => ({
        cards: state.cards.map((card) =>
          card.Name === name
            ? { ...card, Number: (card.Number ?? 0) + 1 }
            : card
        ),
      }));
    } else {
      let cardToAdd = allCards.find((card) => card.Name === name);
      cardToAdd!.Number = 1;
      set((state) => ({
        cards: [...state.cards, cardToAdd!],
      }));
    }
  },

  removeCard: (name: string) => {
    set((state) => ({
      cards: state.cards
        .map((card) =>
          card.Name === name
            ? { ...card, Number: Math.max((card.Number ?? 0) - 1, 0) }
            : card
        )
        .filter((card) => card.Number !== 0),
    }));
  },
  startDayPhase: () =>
    set((state) => ({
      game: { ...state.game, phase: "day" },
    })),
  
  setCurrentCard:(card:Role,index:number)=>set(()=>({
    currentCard:{card,index}
  })),
  updateCurrentCard: () => {
    if(get().cards[get().currentCard.index + 1].Priority == 0){
      set((state)=>({
        game: { ...state.game, phase: "day" }
      }))
    }
    set((state)=>({
      currentCard: { card: get().cards[state.currentCard.index + 1]||get().cards[0], index: state.currentCard.index + 1== get().cards.length?0:state.currentCard.index + 1 }
    }))
  },

}));
