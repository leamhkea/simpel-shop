import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      items: 2,
      increaseMessages: () => set({ items: get().items + 1 }),
    }),
    {
      name: "message-storage",
    }
  )
);
export default useStore;
