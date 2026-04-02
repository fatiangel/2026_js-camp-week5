// [作業任務內容]
/*
產品查詢:
getProductById(products, productId) - 根據 ID 查詢產品
getProductsByCategory(products, category) - 根據分類篩選
getDiscountRate(product) - 計算折扣率（如 "8折"）
getAllCategories(products) - 取得不重複分類


購物車計算:
calculateCartOriginalTotal(carts) - 原價總金額
calculateCartTotal(carts) - 售價總金額
calculateSavings(carts) - 省下金額
calculateCartItemCount(carts) - 商品總數量
isProductInCart(carts, productId) - 檢查是否在購物車


購物車操作:
* 提醒：購物車操作的函式需回傳「新陣列」，不可修改原本的 carts 陣列！
addToCart(carts, product, quantity) - 新增商品
updateCartItemQuantity(carts, cartId, newQuantity) - 更新數量
removeFromCart(carts, cartId) - 移除商品
clearCart() - 清空購物車


訂單統計:
calculateTotalRevenue(orders) - 已付款訂單營收
filterOrdersByStatus(orders, isPaid) - 篩選訂單狀態
generateOrderReport(orders) - 產生統計報表
groupOrdersByPayment(orders) - 依付款方式分組

generateOrderReport 回傳格式：
{
  totalOrders: 2,
  paidOrders: 1,
  unpaidOrders: 1,
  totalRevenue: 899,
  averageOrderValue: 1498
}
*/