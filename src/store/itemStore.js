import { create } from "zustand";
import { persist } from "zustand/middleware";

const useItemStore = create(
  persist(
    (set, get) => ({
      // Vores array som indeholder produkt objekterne
      items: [],

      // Tilføjer et item til arrayet
      addItem: (item) =>
        set((state) => ({
          items: state.items.concat(item),
        })),

      // Øger mængden af et item
      incQuantity: (itemID) =>
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === itemID) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }),
        })),

      // Sænker mængden af et item, men aldrig under 1
      decQuantity: (itemID) =>
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === itemID) {
              const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
              return { ...item, quantity: newQuantity };
            } else {
              return item;
            }
          }),
        })),

      // Gør quantity dynamisk i basketicon og kurven
      itemSum: () =>
        get().items.reduce(
          (accumulator, currentValue) => accumulator + currentValue.quantity,
          0
        ),

      // Sammenlægger den totale pris af alle produkterne afhængigt af quantity
      totalPrice: () =>
        get()
          .items.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.price * currentValue.quantity,
            0
          )
          .toFixed(2),

      // Fjerner et item helt
      removeItem: (itemID) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemID),
        })),

      // Tømmer hele kurven
      clearItems: () => set({ items: [] }),
    }),
    { name: "storage" }
  )
);

export default useItemStore;
