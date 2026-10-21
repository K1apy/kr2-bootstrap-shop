const productSelect = document.getElementById('order-product');
const selectedProduct = new URLSearchParams(window.location.search).get('product');

if (productSelect && selectedProduct) {
  const exists = Array.from(productSelect.options)
    .some((option) => option.value === selectedProduct);
  if (exists) {
    productSelect.value = selectedProduct;
  }
}

const orderForm = document.getElementById('order-form');

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const product = productSelect.options[productSelect.selectedIndex].text;
    const quantity = document.getElementById('order-quantity').value;
    const delivery = orderForm.elements.delivery.value === 'pickup'
      ? 'самовывоз' : 'доставка';
    document.getElementById('order-summary-text').textContent =
      `${product} · количество: ${quantity} · ${delivery}.`;
    bootstrap.Modal.getOrCreateInstance(document.getElementById('success-modal')).show();
  });
}
