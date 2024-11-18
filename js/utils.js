// * Localstorage a ekleme yapacak fonksiyon
export const saveToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// * LocalStorage dan verileri alan fonksiyon
export const getFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

// * Sepet toplamını bulan fonksiyon
export const calculateCartTotal = (cart) => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // reduce metodu bir dizideki tüm elemanların üzerinden bir işlem gerçekleştirerek bir değer döndürür.İlk parametre olarak bir callback function ister.İkinci değer olaraksa bir başlangıç değeri ister
};

// * Sepet iconunu güncelleyen fonksiyon
export const updateCartIcon = (cart) => {
  // Sepet iconuna ve quatity değerine eriş
  const cartIcon = document.querySelector("#cart-icon");
  const i = document.querySelector(".bxs-shopping-bag");

  // Sepetteki toplam ürün sayısına eriş
  let totalQuantity = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  // Sepet iconunun yanındaki quantity değerini güncelle
  i.setAttribute("data-quantity", totalQuantity);
};
