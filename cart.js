// ============================================================
// G-FIT STORE — cart.js
// Sistema de carrito de compras con persistencia LocalStorage
// ============================================================

const Cart = (() => {
  const STORAGE_KEY = 'gfit_cart';
  let items = [];

  // ─── Inicializar desde LocalStorage ───────────────────────
  function init() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      items = saved ? JSON.parse(saved) : [];
    } catch (e) {
      items = [];
    }
    renderCart();
    updateCartBadge();
  }

  // ─── Guardar en LocalStorage ───────────────────────────────
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  // ─── Agregar producto ──────────────────────────────────────
  function addItem(productId, size, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;

    const existing = items.find(i => i.productId === productId && i.size === size);
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, product.stock);
    } else {
      items.push({ productId, size, quantity, addedAt: Date.now() });
    }
    save();
    renderCart();
    updateCartBadge();
    showCartNotification(product.name);
    openCartPanel();
  }

  // ─── Eliminar producto ─────────────────────────────────────
  function removeItem(productId, size) {
    items = items.filter(i => !(i.productId === productId && i.size === size));
    save();
    renderCart();
    updateCartBadge();
  }

  // ─── Modificar cantidad ────────────────────────────────────
  function updateQuantity(productId, size, newQty) {
    const item = items.find(i => i.productId === productId && i.size === size);
    if (!item) return;
    const product = getProductById(productId);
    if (newQty < 1) {
      removeItem(productId, size);
    } else {
      item.quantity = Math.min(newQty, product.stock);
      save();
      renderCart();
      updateCartBadge();
    }
  }

  // ─── Vaciar carrito ────────────────────────────────────────
  function clearCart() {
    items = [];
    save();
    renderCart();
    updateCartBadge();
  }

  // ─── Totales ───────────────────────────────────────────────
  function getSubtotal() {
    return items.reduce((sum, item) => {
      const p = getProductById(item.productId);
      return sum + (p ? p.price * item.quantity : 0);
    }, 0);
  }

  function getItemCount() {
    return items.reduce((sum, i) => sum + i.quantity, 0);
  }

  function getItems() {
    return items;
  }

  // ─── Renderizar panel del carrito ──────────────────────────
  function renderCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    const emptyMsg = document.getElementById('cart-empty-msg');
    const cartFooter = document.getElementById('cart-footer');
    if (!container) return;

    container.innerHTML = '';

    if (items.length === 0) {
      if (emptyMsg) emptyMsg.style.display = 'flex';
      if (cartFooter) cartFooter.style.display = 'none';
      return;
    }
    if (emptyMsg) emptyMsg.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';

    items.forEach(item => {
      const product = getProductById(item.productId);
      if (!product) return;
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <div class="cart-item-img">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        </div>
        <div class="cart-item-info">
          <p class="cart-item-name">${product.name}</p>
          <p class="cart-item-size">Talla: <strong>${item.size}</strong></p>
          <p class="cart-item-price">${formatPrice(product.price)}</p>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="Cart.updateQuantity(${item.productId}, '${item.size}', ${item.quantity - 1})" aria-label="Disminuir cantidad">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="Cart.updateQuantity(${item.productId}, '${item.size}', ${item.quantity + 1})" aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
        <div class="cart-item-right">
          <button class="cart-item-remove" onclick="Cart.removeItem(${item.productId}, '${item.size}')" aria-label="Eliminar producto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <p class="cart-item-subtotal">${formatPrice(product.price * item.quantity)}</p>
        </div>
      `;
      container.appendChild(el);
    });

    const subtotal = getSubtotal();
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (totalEl) totalEl.textContent = formatPrice(subtotal);
  }

  // ─── Actualizar badge del ícono ────────────────────────────
  function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = getItemCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  // ─── Abrir/cerrar panel ────────────────────────────────────
  function openCartPanel() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    if (panel) panel.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartPanel() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    if (panel) panel.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ─── Notificación al agregar ───────────────────────────────
  function showCartNotification(productName) {
    let notif = document.getElementById('cart-notification');
    if (!notif) {
      notif = document.createElement('div');
      notif.id = 'cart-notification';
      notif.className = 'cart-notification';
      document.body.appendChild(notif);
    }
    notif.textContent = `✓ "${productName}" agregado al carrito`;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
  }

  // ─── Checkout simulado ─────────────────────────────────────
  function checkout() {
    if (items.length === 0) {
      alert('Tu carrito está vacío. Agrega productos para continuar.');
      return;
    }
    const modal = document.getElementById('checkout-modal');
    if (modal) {
      modal.style.display = 'flex';
      closeCartPanel();
    }
  }

  return {
    init,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getSubtotal,
    getItemCount,
    getItems,
    renderCart,
    openCartPanel,
    closeCartPanel,
    checkout
  };
})();
