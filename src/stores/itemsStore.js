import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialItems } from '../lib/constants';

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,

      addItem: (newItemText) => {
        const newItem = {
          id: Date.now(),
          text: newItemText.trim(),
          packed: false,
        };
        set((state) => ({
          items: [...state.items, newItem],
        }));
      },
      deleteItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      toggleItemPacked: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          ),
        }));
      },
      removeAllItems: () => {
        set(() => ({
          items: [],
        }));
      },
      resetToInitial: () => {
        set(() => ({
          items: initialItems,
        }));
      },
      markAllAsComplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            packed: true,
          })),
        }));
      },
      markAllAsInComplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            packed: false,
          })),
        }));
      },
      allItemsAmount: () => {
        return initialItems.length;
      },
    }),
    { name: 'items' }
  )
);
