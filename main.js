// --- Demo data ---
        const PRODUCTS = [
            // Modules - All Out of Stock
            {id: 'mod-esp32-dev', name: 'ESP32 Dev Module', price: 0, category: 'Modules', tag: 'Wi‑Fi • BT', status: 'Out of Stock', imageUrl: 'image1.jpeg'},
            {id: 'mod-motor-driver', name: 'Motor Driver', price: 0, category: 'Modules', tag: 'L298N', status: 'Out of Stock', imageUrl: 'image2.jpeg'},
            {id: 'mod-oled-display', name: 'OLED Display', price: 0, category: 'Modules', tag: '0.96" I2C', status: 'Out of Stock', imageUrl: 'image3.jpeg'},
            {id: 'mod-temp-sensor', name: 'Temperature Sensor', price: 0, category: 'Modules', tag: 'DHT11', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=Temp+Sensor'},
            {id: 'mod-voltage-sensor', name: 'Voltage Sensor', price: 0, category: 'Modules', tag: 'Analog', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=Voltage+Sensor'},
            {id: 'mod-arduino-nano', name: 'Arduino Nano', price: 0, category: 'Modules', tag: 'Compact', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=Arduino+Nano'},
            {id: 'mod-arduino-uno', name: 'Arduino Uno', price: 0, category: 'Modules', tag: 'Standard', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=Arduino+Uno'},

            // PCB (only general 2-layer PCB as a product, the service will be a dedicated section) - Out of Stock
            {id: 'pcb-2layer-product', name: '2-Layer PCB (Generic)', price: 0, category: 'PCB', tag: 'General', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=2-Layer+PCB'},

            // Our Products - In Stock (Prices updated as requested)
            {id: 'prod-usb-lamp', name: 'USB Lamp', price: 99, category: 'Product', tag: 'Energy Eff.', status: 'In Stock', imageUrl: 'https://placehold.co/150x150/E0F2FE/1E40AF?text=USB+Lamp'},
            {id: 'prod-batt-12v', name: 'Battery Pack 12V', price: 599, category: 'Product', tag: 'Li-ion', status: 'In Stock', imageUrl: 'https://placehold.co/150x150/E0F2FE/1E40AF?text=12V+Battery+Pack'},
            {id: 'prod-batt-16v', name: 'Battery Pack 16V', price: 899, category: 'Product', tag: 'Li-ion', status: 'In Stock', imageUrl: 'https://placehold.co/150x150/E0F2FE/1E40AF?text=16V+Battery+Pack'},
            {id: 'prod-batt-24v', name: 'Battery Pack 24V', price: 1349, category: 'Product', tag: 'Li-ion', status: 'In Stock', imageUrl: 'https://placehold.co/150x150/E0F2FE/1E40AF?text=24V+Battery+Pack'},
            // The 'prod-batt-36v' entry has been removed as requested.

            // Power Banks - Out of Stock
            {id: 'prod-pb-2k', name: 'Power Bank 2000mAh', price: 0, category: 'Product', tag: 'Portable', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=Powerbank+2K'},
            {id: 'prod-pb-6k', name: 'Power Bank 6000mAh', price: 0, category: 'Product', tag: 'Compact', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=Powerbank+6K'},
            {id: 'prod-pb-12k', name: 'Power Bank 12000mAh', price: 0, category: 'Product', tag: 'High Cap.', status: 'Out of Stock', imageUrl: 'https://placehold.co/150x150/F0F4F8/3B82F6?text=Powerbank+12K'},

            // Tech Support - In Stock (30-min consultation removed)
            {id: 'ts-coding', name: 'Tech Support: Coding & Libraries', price: 299, category: 'T.S', tag: 'Software Help', status: 'In Stock', imageUrl: 'https://placehold.co/150x150/E0F2FE/1E40AF?text=Coding+Support'},
            {id: 'ts-firmware', name: 'Firmware Flashing Service', price: 249, category: 'T.S', tag: 'ESP/AVR', status: 'In Stock', imageUrl: 'https://placehold.co/150x150/E0F2FE/1E40AF?text=Flashing+Service'},

            // New test product
            {id: 'test-upi-item', name: 'UPI Test Product', price: 1, category: 'Product', tag: 'Test Only', status: 'In Stock', imageUrl: 'https://placehold.co/150x150/FFD700/000000?text=Test+Item'},
        ];

        // --- Utilities ---
        const formatINR = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(v);

        // --- Render products ---
        const grid = document.getElementById('productGrid');
        const countEl = document.getElementById('statItems');

        function render(products) {
            countEl.textContent = products.length + '+';
            grid.innerHTML = products.map(p => `
                <article class="card" data-id="${p.id}" data-category="${p.category}" aria-label="${p.name}">
                    <div class="thumb">
                        <img src="${p.imageUrl}" alt="${p.name}" onerror="this.onerror=null;this.src='file:///C:/Users/Prathamesh/Desktop/Eco_Website/Images%20Of%20Item/Esp32.png';" />
                    </div>
                    <div class="content">
                        <h3 class="title">${p.name}</h3>
                        <div class="meta">
                            <span class="chip">${p.tag}</span>
                            <strong class="price">${p.status === 'Out of Stock' ? 'N/A' : formatINR(p.price)}</strong>
                        </div>
                        <div class="meta" style="margin-top:12px">
                            <button class="add" data-add="${p.id}" ${p.status === 'Out of Stock' ? 'disabled' : ''}>
                                ${p.status === 'Out of Stock' ? 'Out of Stock' : 'Add to cart'}
                            </button>
                            <span class="chip" style="color: ${p.status === 'Out of Stock' ? 'var(--danger)' : 'var(--success)'};">${p.status}</span>
                        </div>
                    </div>
                </article>`).join('');
        }

        // Initial render
        render(PRODUCTS);

        // --- Filtering ---
        const pills = document.querySelectorAll('.pill');
        let currentFilter = 'all';
        pills.forEach(p => p.addEventListener('click', () => {
            pills.forEach(x => x.setAttribute('aria-selected', 'false'));
            p.setAttribute('aria-selected', 'true');
            currentFilter = p.dataset.filter;
            applyFilterAndSearch();
        }));

        // --- Search ---
        const search = document.getElementById('search');
        search.addEventListener('input', applyFilterAndSearch);

        function applyFilterAndSearch() {
            const q = search.value.toLowerCase().trim();
            const filtered = PRODUCTS.filter(p => {
                const byCat = currentFilter === 'all' || p.category === currentFilter;
                const byText = !q || p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
                return byCat && byText;
            });
            render(filtered);
        }

        // Footer year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Footer category quick-jump sets filter
        document.querySelectorAll('[data-jump]').forEach(a => a.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = a.dataset.jump;
            pills.forEach(x => x.setAttribute('aria-selected', String(x.dataset.filter === cat)));
            currentFilter = cat; applyFilterAndSearch();
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        }));

        // --- Cart logic ---
        const cart = new Map();
        const btnCart = document.getElementById('btnCart');
        const cartDrawer = document.getElementById('cartDrawer');
        const closeCart = document.getElementById('closeCart');
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartSubtotal = document.getElementById('cartSubtotal');

        const customerDetailsForm = document.getElementById('customerDetailsForm');
        const proceedToPaymentBtn = document.getElementById('proceedToPaymentBtn');
        const checkoutBtn = document.getElementById('checkoutBtn'); // The actual UPI checkout button
        const checkoutFormMsg = document.getElementById('checkoutFormMsg');

        function redrawCart() {
            let total = 0;
            cartItems.innerHTML = '';
            for (const [id, qty] of cart) {
                const p = PRODUCTS.find(x => x.id === id);
                if (!p || p.status === 'Out of Stock') {
                    cart.delete(id);
                    continue;
                }
                const line = p.price * qty; total += line;
                const el = document.createElement('div');
                el.className = 'item';
                el.innerHTML = `
                    <div style="width:48px; height:48px; border-radius:12px; background:rgba(79,70,229,.15); display:grid; place-items:center">
                        <img src="${p.imageUrl}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;" onerror="this.onerror=null;this.src='https://placehold.co/48x48/0f172a/e2e8f0?text=Img';"/>
                    </div>
                    <div>
                        <div style="font-weight:600">${p.name}</div>
                        <div class="note">${p.category} • ${p.tag}</div>
                    </div>
                    <div style="text-align:right">
                        <div class="qty">
                            <button aria-label="Decrease" data-dec="${id}">−</button>
                            <span>${qty}</span>
                            <button aria-label="Increase" data-inc="${id}">+</button>
                        </div>
                        <div style="margin-top:6px; font-weight:700">${formatINR(line)}</div>
                    </div>`;
                cartItems.appendChild(el);
            }
            cartCount.textContent = [...cart.values()].reduce((a,b)=>a+b,0);
            cartSubtotal.textContent = formatINR(total);

            // Show/hide customer details form based on cart content
            if (cart.size > 0) {
                customerDetailsForm.style.display = 'flex'; // Use flex to match its CSS display
                checkoutBtn.style.display = 'none'; // Hide UPI button initially
            } else {
                customerDetailsForm.style.display = 'none';
                checkoutBtn.style.display = 'none';
            }


            cartItems.querySelectorAll('[data-inc],[data-dec]').forEach(btn => btn.addEventListener('click', (e) => {
                const id = btn.dataset.inc || btn.dataset.dec;
                const p = PRODUCTS.find(x => x.id === id);
                if (!p || p.status === 'Out of Stock') return;
                const q = cart.get(id) || 0;
                if (btn.dataset.inc) cart.set(id, q + 1);
                else cart.set(id, Math.max(0, q - 1));
                if (cart.get(id) === 0) cart.delete(id);
                redrawCart();
            }));
        }

        document.body.addEventListener('click', (e) => {
            const addBtn = e.target.closest('[data-add]');
            if (addBtn && !addBtn.disabled) {
                const id = addBtn.dataset.add;
                cart.set(id, (cart.get(id) || 0) + 1);
                redrawCart();
                cartDrawer.classList.add('open');
                cartDrawer.setAttribute('aria-hidden','false');
            }
        });

        btnCart.addEventListener('click', () => {
            cartDrawer.classList.add('open');
            cartDrawer.setAttribute('aria-hidden','false');
            redrawCart(); // Ensure cart content and form visibility are correct when opening
        });
        closeCart.addEventListener('click', () => { cartDrawer.classList.remove('open'); cartDrawer.setAttribute('aria-hidden','true'); });

        // --- Handle "Proceed to Payment" ---
        proceedToPaymentBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default form submission

            const customerName = document.getElementById('customerName').value.trim();
            const customerEmail = document.getElementById('customerEmail').value.trim();
            const customerMobile = document.getElementById('customerMobile').value.trim();
            const customerAddress = document.getElementById('customerAddress').value.trim();

            if (!customerName || !customerEmail || !customerMobile || !customerAddress) {
                checkoutFormMsg.textContent = 'Please fill in all required contact and address details.';
                checkoutFormMsg.style.color = 'var(--danger)';
                return;
            }
            // Basic email validation (more robust validation should be on backend)
            if (!/\S+@\S+\.\S+/.test(customerEmail)) {
                checkoutFormMsg.textContent = 'Please enter a valid email address.';
                checkoutFormMsg.style.color = 'var(--danger)';
                return;
            }
            // Basic mobile number validation (10 digits)
            if (!/^\d{10}$/.test(customerMobile)) {
                checkoutFormMsg.textContent = 'Please enter a valid 10-digit mobile number.';
                checkoutFormMsg.style.color = 'var(--danger)';
                return;
            }


            // All details collected, hide this form and show UPI button
            customerDetailsForm.style.display = 'none';
            checkoutBtn.style.display = 'block'; // Show the UPI checkout button
            checkoutFormMsg.textContent = ''; // Clear any previous messages
        });


        // --- UPI Checkout Logic ---
        const upiMessageModal = document.getElementById('upiMessageModal');
        const closeUpiModal = document.getElementById('closeUpiModal');
        const upiLinkElement = document.getElementById('upiLink');
        const upiQrCanvasElement = document.getElementById('upiQrCanvas'); // Get the Canvas element for QR code rendering

        checkoutBtn.addEventListener('click', () => {
            const totalAmount = parseFloat(cartSubtotal.textContent.replace('₹', '').replace(/,/g, ''));
            if (isNaN(totalAmount) || totalAmount <= 0) {
                console.log('Your cart is empty or total amount is invalid for UPI payment.');
                // Optionally show a message to the user in the cart drawer
                checkoutFormMsg.textContent = 'Your cart is empty or total amount is invalid for UPI payment.';
                checkoutFormMsg.style.color = 'var(--danger)';
                return;
            }

            const upiId = '9381276726@fam';
            const payeeName = 'ElectroSig.in';
            const transactionRef = `ESIG${Date.now()}`;

            const customerName = document.getElementById('customerName').value.trim();
            const customerEmail = document.getElementById('customerEmail').value.trim();
            const customerMobile = document.getElementById('customerMobile').value.trim();
            const customerAddress = document.getElementById('customerAddress').value.trim();

            const orderDetails = {
                products: Array.from(cart.entries()).map(([id, qty]) => {
                    const product = PRODUCTS.find(p => p.id === id);
                    return {
                        name: product.name,
                        price: product.price,
                        quantity: qty,
                        subtotal: product.price * qty
                    };
                }),
                cartTotal: totalAmount,
                customer: {
                    name: customerName,
                    email: customerEmail,
                    mobile: customerMobile,
                    address: customerAddress
                },
                transactionId: transactionRef // Optional: Include in data sent
            };

            // Log order details to console for simulated email capture
            console.log(`--- Order Details (to be sent to electrosig2@gmail.com) ---`);
            console.log(`Customer Name: ${orderDetails.customer.name}`);
            console.log(`Customer Email: ${orderDetails.customer.email}`);
            console.log(`Customer Mobile: ${orderDetails.customer.mobile}`);
            console.log(`Customer Address: ${orderDetails.customer.address}`);
            console.log(`Cart Total: ${formatINR(orderDetails.cartTotal)}`);
            console.log(`Products:`, orderDetails.products);
            console.log(`Transaction Reference: ${orderDetails.transactionId}`);
            console.log(`---------------------------------------------------------`);


            // Constructing the UPI deep link
            const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${totalAmount.toFixed(2)}&cu=INR&tr=${transactionRef}&mc=0000`;

            upiLinkElement.href = upiUrl;
            upiLinkElement.textContent = upiUrl;

            if (upiQrCanvasElement) {
                new QRious({
                    element: upiQrCanvasElement,
                    value: upiUrl,
                    size: 200
                });
            } else {
                console.error("UPI QR code canvas element not found!");
            }

            upiMessageModal.classList.add('open');
        });

        closeUpiModal.addEventListener('click', () => {
            upiMessageModal.classList.remove('open');
            // Optionally clear cart or reset form after closing UPI modal
            cart.clear();
            redrawCart();
            customerDetailsForm.reset(); // Clear the customer details form
            customerDetailsForm.style.display = 'flex'; // Show customer form again for next order
            checkoutBtn.style.display = 'none'; // Hide UPI button
        });


        // Support form (demo)
        function submitSupport() {
            const msg = document.getElementById('supportMsg');
            msg.textContent = 'Ticket submitted! Please note that for actual email delivery, a backend service is required to send this to electrosig2@gmail.com.';
            msg.style.color = 'var(--success)';
            console.log('Support Ticket Submitted (requires backend for email delivery to electrosig2@gmail.com)');
            setTimeout(()=> msg.textContent = '', 8000);
        }

        // PCB Request Form (demo)
        function submitPcbRequest() {
            const msg = document.getElementById('pcbMsg');
            msg.textContent = 'PCB request submitted! We\'ll review your design and get back to you. (requires backend for email delivery to electrosig2@gmail.com)';
            msg.style.color = 'var(--success)';
            console.log('PCB Request Submitted (requires backend for email delivery to electrosig2@gmail.com)');
            setTimeout(()=> msg.textContent = '', 8000);
        }

        // Project Request Form (demo)
        function submitProjectRequest() {
            const msg = document.getElementById('projectMsg');
            msg.textContent = 'Project inquiry submitted! We\'ll contact you to discuss your idea. (requires backend for email delivery to electrosig2@gmail.com)';
            msg.style.color = 'var(--success)';
            console.log('Project Inquiry Submitted (requires backend for email delivery to electrosig2@gmail.com)');
            setTimeout(()=> msg.textContent = '', 8000);
        }

        const specialBtn = document.querySelector("[data-add='test-upi-item']");

        if (specialBtn) {
            specialBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            window.location.href = "test.html"; // put your file name here
            });
        }
