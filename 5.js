document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('header button[data-icon="menu"]');
    const headerNav = document.querySelector('header nav');

    if (menuBtn && headerNav) {
        menuBtn.addEventListener('click', () => {
            headerNav.classList.toggle('hidden');
            menuBtn.classList.toggle('bg-surface-variant');
        });
    }

    const heroSlider = document.getElementById('hero-slider');
    const prevBtn = document.querySelector('section button[data-icon="chevron_left"]');
    const nextBtn = document.querySelector('section button[data-icon="chevron_right"]');

    const heroSlidesData = [
        {
            title: 'ҚИСМҲОИ БАЛАНД-СИФАТ',
            accent: 'БАРОИ АВТОМОБИЛИ ШУМО',
            text: 'Таҷҳизоти касбӣ ва қисмҳои эҳтиётии аслӣ аз брендҳои пешрафтаи ҷаҳон.',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9NvEhvp4kiHY5hHtdmVft_fZt_1Judfl-sUu2UVno098QxbbSIGbLUwkVv281id4Jo_Yi423edl92ykJkzeS_COqbTSEIOf2IWfCnXWfMe3in2ZsmpSi2hfhAAZF0SXEkkOdA877EgpYKb11AEhPfPMqxgksRTBxqxLgUZcliRerwPelyFo-eXluZjPd0-E-u5WjF97yh_R3Rgbg_TWwNe1qPm5GiWNNJ_dclpVGWF-jGXnZs3n6QWw'
        },
        {
            title: 'ТЕХНИКАИ ПУРТАЪСИС',
            accent: 'БАРОИ ИСТИФОДАИ ПУРРА',
            text: 'Ҳамаи маҳсулот бо сифат ва кафолат барои мошинҳои шумо.',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfPjZq3OO1ZEYpA6QVyN4r08H28t1pPELZvjM0Nt4oJ_7lonFVCDI86KtpIaLqp7O9Ed_GUYjylEXGl7MBZhlQTlqMni6HgEk5ZXzP-M-KY-obj7a-dCn2UfeMAxgep3iTDCFO904La7M0yh1q6EgvDW9_uYuWVECEuUVVBxbNyW0lqruAw-Rj6frZadZO9VCpZ5naYQm9wzl64CmqIVjdn6wG0ILs39BxM7zXYEkMLEHqQkbIL2HZUA'
        },
        {
            title: 'ХИЗМАТИ ТЕЗ',
            accent: 'ҲАМА ЧИЗ ДАР ЯК ҶО',
            text: 'Савдо, насб ва маслиҳат аз ҷониби мутахассисони мо.',
            bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASTcrt7Gm2ernFy-VCWVFukh3eW_wjnr36nfMEYQC0kH0GSIPhgh5j9HffR1sBz0C_uwBq4bB1akChTpBByOg2OCNSdgbgARa9KVhW1KFcQ1-K_7o8OReWtY1OFpNK4EB6gYWNxq3cKeaUa6XZL6JIiws6SUYR_7pFyf-D9trHGO6EsMDV1Vq-f5Vg4ja_rkgL7PEINIouBYsAo5w33o-JlVm7_P0J6wupnv0fqtdjNiQ1S5C_2tEyAQ'
        }
    ];

    if (heroSlider && heroSlidesData.length) {
        heroSlider.innerHTML = '';
        heroSlidesData.forEach((slideData) => {
            const slide = document.createElement('div');
            slide.className = 'absolute inset-0 transition-opacity duration-1000 opacity-0';
            slide.innerHTML = `
                <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                <div class="w-full h-full bg-cover bg-center" style="background-image: url('${slideData.bg}')"></div>
                <div class="absolute inset-0 z-20 flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">
                    <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-white">${slideData.title}<br/><span class="text-secondary">${slideData.accent}</span></h1>
                    <p class="font-body-lg text-body-lg mb-8 max-w-xl text-surface-variant">${slideData.text}</p>
                    <div class="flex gap-4">
                        <button class="bg-secondary text-on-secondary px-8 py-3 font-label-md uppercase tracking-wider hover:bg-secondary-container transition-all active:scale-95">ҲОЛО ХАРИДАН</button>
                        <button class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 font-label-md uppercase tracking-wider hover:bg-white/20 transition-all">КАТАЛОГ</button>
                    </div>
                </div>
            `;
            heroSlider.appendChild(slide);
        });

        const slides = Array.from(heroSlider.children);
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
                slide.style.pointerEvents = i === index ? 'auto' : 'none';
            });
        };

        showSlide(currentSlide);

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    const modal = document.getElementById('promo-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');
    const overlay = document.getElementById('modal-overlay');
    const promoActionButtons = document.querySelectorAll('[data-action="close-promo"]');
    const supportFab = document.getElementById('support-fab');

    const openModal = () => {
        if (modal && modalContent) {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.classList.add('opacity-100');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }
    };

    const closeModal = () => {
        if (modal) {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modal.classList.remove('opacity-100');
        }
    };

    if (modal) {
        window.addEventListener('load', () => setTimeout(openModal, 1500));
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    promoActionButtons.forEach((button) => button.addEventListener('click', closeModal));
    if (supportFab) supportFab.addEventListener('click', openModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
    });

    const container = document.getElementById('best-sellers-container');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    if (container && leftBtn) {
        leftBtn.addEventListener('click', () => container.scrollBy({ left: -350, behavior: 'smooth' }));
    }

    if (container && rightBtn) {
        rightBtn.addEventListener('click', () => container.scrollBy({ left: 350, behavior: 'smooth' }));
    }

    const cartCount = document.getElementById('cart-count');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartPanel = document.getElementById('cart-panel');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const closeCartButton = document.getElementById('close-cart');
    const openCartButtons = document.querySelectorAll('[data-action="open-cart"]');
    const cartState = [];

    const openCart = () => {
        if (!cartDrawer || !cartPanel || !cartOverlay) return;
        cartDrawer.classList.remove('pointer-events-none');
        cartDrawer.classList.add('pointer-events-auto');
        cartOverlay.classList.remove('opacity-0');
        cartPanel.classList.remove('translate-x-full');
        cartPanel.classList.add('translate-x-0');
    };

    const closeCart = () => {
        if (!cartDrawer || !cartPanel || !cartOverlay) return;
        cartDrawer.classList.add('pointer-events-none');
        cartDrawer.classList.remove('pointer-events-auto');
        cartOverlay.classList.add('opacity-0');
        cartPanel.classList.add('translate-x-full');
        cartPanel.classList.remove('translate-x-0');
    };

    const renderCart = () => {
        if (!cartItems || !cartTotal || !cartCount) return;

        const totalItems = cartState.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = cartState.reduce((sum, item) => sum + item.price * item.qty, 0);

        cartCount.textContent = String(totalItems);
        cartTotal.textContent = `${totalPrice} TJS`;

        if (!cartState.length) {
            cartItems.innerHTML = '<div class="text-center text-on-surface-variant py-10">Корзина холӣ аст. Маҳсулотро интихоб кунед.</div>';
            return;
        }

        cartItems.innerHTML = cartState.map((item) => `
            <div class="flex items-center justify-between border border-outline-variant rounded p-3 mb-3">
                <div>
                    <p class="font-semibold text-primary">${item.name}</p>
                    <p class="text-sm text-on-surface-variant">${item.qty} × ${item.price} TJS</p>
                </div>
                <span class="text-secondary font-semibold">${item.price * item.qty} TJS</span>
            </div>
        `).join('');
    };

    const updateCart = (productName, productPrice) => {
        const existingItem = cartState.find((item) => item.name === productName);

        if (existingItem) {
            existingItem.qty += 1;
        } else {
            cartState.push({ name: productName, price: productPrice, qty: 1 });
        }

        renderCart();
        openCart();
    };

    openCartButtons.forEach((button) => button.addEventListener('click', openCart));
    if (closeCartButton) closeCartButton.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeCart();
    });

    document.querySelectorAll('[data-action="add-cart"]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            updateCart(button.dataset.productName || 'Маҳсулоти интихобшуда', Number(button.dataset.productPrice || 0));

            button.classList.remove('bg-primary');
            button.classList.add('bg-secondary', 'ring-2', 'ring-secondary');
            button.innerHTML = '<span class="material-symbols-outlined" data-icon="check">check</span>';

            setTimeout(() => {
                button.classList.remove('bg-secondary', 'ring-2', 'ring-secondary');
                button.classList.add('bg-primary');
                button.innerHTML = '<span class="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>';
            }, 800);
        });
    });

    renderCart();
    closeCart();

    const newsletterSubmit = document.getElementById('newsletter-submit');
    const newsletterEmail = document.getElementById('newsletter-email');

    if (newsletterSubmit && newsletterEmail) {
        newsletterSubmit.addEventListener('click', () => {
            const email = newsletterEmail.value.trim();
            if (!email) {
                newsletterEmail.focus();
                return;
            }
            newsletterSubmit.textContent = 'ОБУНА ШУД';
            newsletterSubmit.disabled = true;
            setTimeout(() => {
                newsletterSubmit.textContent = 'ОБУНА';
                newsletterSubmit.disabled = false;
                newsletterEmail.value = '';
            }, 2000);
        });
    }

    document.querySelectorAll('header nav a').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});