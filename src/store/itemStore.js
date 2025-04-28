import { create } from "zustand";
import { persist } from "zustand/middleware";

const useItemStore = create(
  persist(
    (set) => ({
      // Vores array som indeholder produkt objekterne
      items: [],

      //   Bruger set for at tilføje eller fjerne. Vi kan tilgå alt der ligge udenfor med state (items[] og addItem).
      // Arrowfunction = return efter set(state)
      addItem: (item) =>
        set((state) => ({
          items: state.items.concat(item),
        })),
      incQuantity: (itemID) =>
        set((state) => ({
          items: [
            ...state.items.map((item) => {
              if (item.id === itemID) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            }),
          ],
        })),
      decQuantity: (itemID) =>
        set((state) => ({
          items: [
            ...state.items.map((item) => {
              if (item.id === itemID) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            }),
          ],
        })),

      // Denne funktion fjerner et produkt på Remove i basket, så det fjernes fra arrayet
      removeItem: (itemID) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemID),
        })),

      // Denne funktion tømmer hele basket med alle produkter i arrayet
      clearItems: () => set({ items: [] }),
    }),
    { name: "storage" }
  )
);

export default useItemStore;
