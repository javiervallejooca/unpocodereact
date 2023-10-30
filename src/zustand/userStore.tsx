import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "../interfaces/user";

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  deleteUser: () => void;
};

const useUserStore = create<UserStore>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    deleteUser: () => set({ user: null }),
  }))
);

export default useUserStore;
