import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("lumiere_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  // Lưu vào localStorage khi cart thay đổi
  useEffect(() => {
    localStorage.setItem("lumiere_cart", JSON.stringify(cart));
  }, [cart]);

  // ➤ ADD ITEM
  function addItem(product, qty = 1) {
    const firstSize = product.productSizes?.[0] || {};
    const price = firstSize.price || 0;

    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + qty } : p
        );
      }

      // Lưu 1 bản product tối giản + extra price
      return [...prev, {
        id: product.id,
        name: product.name,
        image: product.image,
        price,
        qty
      }];
    });
  }

  // ➤ UPDATE QTY
  function updateQty(id, qty) {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(1, qty) } : p
      )
    );
  }

  // ➤ REMOVE ITEM
  function removeItem(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  // ➤ CLEAR CART
  function clearCart() {
    setCart([]);
  }

  // ➤ Total items
  const totalCount = cart.reduce((s, i) => s + i.qty, 0);

  // ➤ Total price
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        updateQty,
        removeItem,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
