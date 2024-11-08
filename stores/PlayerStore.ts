import { Role } from "@/interfaces/RoleInterface";
import { create } from "zustand";

type State = {
  Name: string;
  Role: Role;
  HasPlayed: boolean;
  Alive: boolean;
};

type Action = {
  updateName: (Name: State["Name"]) => void;
  updateRole: (Role: State["Role"]) => void;
  updateAliveState: () => void;
  updateHasPlayed: (HasPlayed: State["HasPlayed"]) => void;
};

export const usePlayerStore = create<State & Action>((set) => ({
  Name: "",
  Role: {} as Role,
  HasPlayed: false,
  Alive: true,

  updateName: (name) => set(() => ({ Name: name })),
  updateRole: (role) => set(() => ({ Role: role })),
  updateAliveState: () => set((state) => ({ Alive: !state.Alive })),
  updateHasPlayed: (status) => set(() => ({ HasPlayed: status })),
}));
