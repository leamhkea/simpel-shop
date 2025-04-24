import { create } from "zustand";
import { persist } from "zustand/middleware";

const useItemStore = create(
  persist(
    (set) => ({
      // Vores array som indeholder produkt objekterne
      items: [],

      //   Bruger set for at tilføje eller fjerne. Vi kan tilgå alt der ligge udenfor med state (items[] og addItem).
      // Arrowfunction = return efter set(state)
      addItem: (item) => set((state) => ({ items: state.items.concat(item) })),
    }),
    { name: "storage" }
  )
);
export default useItemStore;

// use client
// { items } = useItemStore
