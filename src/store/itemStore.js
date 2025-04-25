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
    }),
    { name: "storage" }
  )
);
const productDeleteFromBasket = (deleteItem) => {
  const newItem = items.filter((item) => item !== deleteItem);
  addItem(newItem);

  productDeleteFromBasket;
};

export default useItemStore;

// use client
// { items } = useItemStore

// (state.items.find((el) => el.id === item.id).quantity = 2)
// [...state.items, { ...item, quantity: 1 }]
