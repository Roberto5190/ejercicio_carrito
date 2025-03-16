
// VARIABLES GLOBALES

// productos
const order = [
    {
        dataIdentifier: "CA00",
        itemTitle: "Libro",
        itemSubtitle: "Subtítulo",
        itemDescripption: `Fusce pulvinar ante vitae dapibus fringilla. In ut odio ligula. Quisque id ipsum
        lacus.Nulla finibus ultricies velit eu ultricies.Proin quis tellus lacinia, congue
        erat nec, ultrices nisl.`,
        itemPrice: "20.50",
        itemImg: "assets/img/libro.jpg",
        dataSale: 60,
        itemOfferPrice: "",
        itemTotalPrice: "20.50",
        itemQuantity: 1,
        categories: ["Libros", "All"]
    },
    {
        dataIdentifier: "CA05",
        itemTitle: "Cuaderno Azul",
        itemSubtitle: "Subtítulo",
        itemDescripption: `Fusce pulvinar ante vitae dapibus fringilla. In ut odio ligula. Quisque id ipsum
        lacus.Nulla finibus ultricies velit eu ultricies.Proin quis tellus lacinia, congue
        erat nec, ultrices nisl.`,
        itemPrice: "7.50",
        itemImg: "assets/img/cauderno.jpg",
        dataSale: 0,
        itemOfferPrice: "",
        itemTotalPrice: "7.50",
        itemQuantity: 1,
        categories: ["Cuadernos", "All"]
    },
    {
        dataIdentifier: "CA09",
        itemTitle: "Cuaderno Kraft",
        itemSubtitle: "Subtítulo",
        itemDescripption: `Fusce pulvinar ante vitae dapibus fringilla. In ut odio ligula. Quisque id ipsum
        lacus.Nulla finibus ultricies velit eu ultricies.Proin quis tellus lacinia, congue
        erat nec, ultrices nisl. Proin quis tellus lacinia, congue
        erat nec, ultrices nisl`,
        itemPrice: "7.50",
        itemImg: "assets/img/cuaderno-kraft-a4.png",
        dataSale: 0,
        itemOfferPrice: "",
        itemTotalPrice: "9.99",
        itemQuantity: 1,
        categories: ["Cuadernos", "All"]
    },
    {
        dataIdentifier: "CA10",
        itemTitle: "Lápiz Azul",
        itemSubtitle: "Subtítulo",
        itemDescripption: `Fusce pulvinar ante vitae dapibus fringilla. In ut odio ligula. Quisque id ipsum
        lacus. Nulla finibus ultricies velit eu ultricies. Proin quis tellus lacinia, congue
        erat nec.`,
        itemPrice: "1.99",
        itemImg: "assets/img/lapiz_azul.webp",
        dataSale: 30,
        itemOfferPrice: "",
        itemTotalPrice: "1.99",
        itemQuantity: 1,
        categories: ["Lápices", "All"]
    },
    {
        dataIdentifier: "CA30",
        itemTitle: "Lápiz Verde",
        itemSubtitle: "Subtítulo",
        itemDescripption: `Fusce pulvinar ante vitae dapibus fringilla. In ut odio ligula. Quisque id ipsum
        lacus. Nulla finibus ultricies velit eu ultricies. Proin quis tellus lacinia, congue
        erat nec.`,
        itemPrice: "1.99",
        itemImg: "assets/img/lapiz_azul.webp",
        dataSale: 35,
        itemOfferPrice: "",
        itemTotalPrice: "1.99",
        itemQuantity: 1,
        categories: ["Lápices", "All"]
    },
    {
        dataIdentifier: "CA35",
        itemTitle: "Lápiz Gráfito",
        itemSubtitle: "Subtítulo",
        itemDescripption: `Fusce pulvinar ante vitae dapibus fringilla. In ut odio ligula. Quisque id ipsum
        lacus. Nulla finibus ultricies velit eu ultricies. Proin quis tellus lacinia, congue
        erat nec.`,
        itemPrice: "1.99",
        itemImg: "assets/img/pencil.jpg",
        dataSale: 60,
        itemOfferPrice: "",
        itemTotalPrice: "1.99",
        itemQuantity: 1,
        categories: ["Lápices", "All"]
    },
    {
        dataIdentifier: "CA20",
        itemTitle: "Rotulador negro",
        itemSubtitle: "Subtítulo",
        itemDescripption: `Fusce pulvinar ante vitae dapibus fringilla. In ut odio ligula. Quisque id ipsum
        lacus. Nulla finibus ultricies velit eu ultricies. Proin quis tellus lacinia, congue
        erat nec, ultrices nisl. Etiam at erat tortor. Nullam quis ullamcorper neque, vel
        scelerisque erat. Integer sit amet hendrerit mauris, et rutrum ipsum. Phasellus
        vitae eros ante.`,
        itemPrice: "3.00",
        itemImg: "assets/img/rotulador_negro.jfif",
        dataSale: 0,
        itemOfferPrice: "",
        itemTotalPrice: "3.00",
        itemQuantity: 1,
        categories: ["Rotuladores", "All"]
    },


];




// array para almacenar los prodcutos en el carrito
const ordersInCart = []

// almacena los productos de la categoría seleccionada
const selectedCategoryProducts = []



// FUNCIONES 


window.addEventListener("load", (ev) => {
    initselectedCategoryProducts()
    renderCards(selectedCategoryProducts)
    initCategoriesButtonEvents()
    initDrawerEvents();
    initCardsEvents();
});

// #region CARDS
// CARDS
/**
 * Renderiza los productos que pasamos por el parametro en la galeria de cards con HTML dinámico
 */
const renderCards = (filteredProducts) => {
    const cardsGallery = document.querySelector(".gallery");
    cardsGallery.innerHTML = "";

    // for (const card of order) {
    filteredProducts.forEach(card => {
        const cardProduct = document.createElement("div");
        cardProduct.classList.add("cardContainer");
        cardProduct.innerHTML += `
        <div class="card" data-sale="${card.dataSale}" data-identifier="${card.dataIdentifier}">
            <button class="button button_primary fav_button_img">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                    viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z" />
                </svg>
            </button>
            <div class="card_picture">
                <img src="${card.itemImg}" alt="">

            </div>
            <div class="card_content">
                <div class="card_content_top">
                    <div class="card_content_top_left">
                        <div class="card_identifier">CA00</div>
                        <h5 class="card_title">${card.itemTitle}</h5>
                        <h6 class="card_subtitle">${card.itemSubtitle}</h6>
                    </div>
                    <div class="card_content_top_right">
                        <span class="amount">${card.itemPrice}</span>
                        <span class="currency">€</span>
                    </div>
                    <div class="card_description">
                        ${card.itemDescripption}
                    </div>
                </div>
                <div class="card_content_button">
                    <div class="button button_details_card button_primary" data-identifier=${card.dataIdentifier}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path
                                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                    </div>
                    <div class="button button_add_card button_secondary" data-identifier=${card.dataIdentifier}>
                        <div class="card_button_secondary_text">Añadir</div>
                        <div class="card_button_secondary_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </div>
                    </div>
                    <button class="button button_primary fav_button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                            viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
        `;
        cardsGallery.appendChild(cardProduct);
    })

}
// #endregion

// #region CATEGORIES
// CATEGORIES

// initCategories
// incia los eventos de los botones de la sección categorias
const initCategoriesButtonEvents = () => {
    const categoryButtons = document.querySelectorAll('.category_btn'); // Obtener todos los botones de categoría
    // BOTONES CATEGORIAS
    categoryButtons.forEach((button, index) => { // Agregar un evento de clic a cada botón de categoría
        button.addEventListener("click", (ev) => {
            const selectedButton = categoryButtons[index]
            selectedButton.classList.add("opened")

            categoryButtons.forEach(btn => { // Deshabilita todos los botones de categoría no seleccionados
                if (btn !== selectedButton) {
                    btn.classList.remove("opened")
                    selectedCategoryProducts.splice(0, selectedCategoryProducts.length);// Limpiar selectedCategoryProducts

                    const filterTags = document.querySelectorAll(".filter_tag")
                    filterTags.forEach(tag => {  //deja de mostrar todos los tags al seleccionar otro CategoryBtn
                        tag.classList.remove("opened")
                    })
                }

            });

            const selectedCategory = button.dataset.category; // Obtener la categoría
            const filteredProducts = filterProductsByCategory(selectedCategory); // Obtenemos los productos filtrados de la categoría

            if (selectedCategoryProducts === 0) {
                initselectedCategoryProducts()

            } else {
                selectedCategoryProducts.push(...filteredProducts)
            }


            // console.log(selectedCategoryProducts);
            renderFilterTags(selectedCategory)
            renderCards(selectedCategoryProducts)
            initCardsEvents();
        });
    });
}

/**
 * Filtra los productos de order segun la categoría de entrada
 */
const filterProductsByCategory = (category) => {
    return order.filter(product => product.categories.includes(category));// Devuelve todos los productos que tengan la categoría de entrada
}

/**
 * 
 */
const initDeleteAndCloseCategories = () => {
    const tagDeleteIcon = document.querySelectorAll(".filter_tag_delete_icon");
    const filterTags = document.querySelectorAll(".filter_tag");
    const categoryButtons = document.querySelectorAll('.category_btn');

    const arrayFilterTags = [...filterTags];
    const arrayCategoryButtons = [...categoryButtons];

    tagDeleteIcon.forEach((button, index) => {
        const selectedTag = arrayFilterTags[index];
        button.addEventListener("click", (ev) => {
            selectedTag.classList.remove("opened");
            const filterTagText = selectedTag.querySelector(".filter_tag_text");
            const filterTagInnerText = filterTagText.innerText;

            const categoryIndex = arrayCategoryButtons.findIndex(button => button.dataset.category === filterTagInnerText);

            if (categoryIndex !== -1) { //devuelve el primer btnCategory que coincida con la categoria del filtertag  
                const selectedCategory = arrayCategoryButtons[categoryIndex]; //almacenamos el btnCategory
                selectedCategory.classList.remove("opened"); //eliminamos la clase opened al btnCategory

                // Filtra  los productos que no pertenecen a la categoría seleccionada
                const btnSeleselectedCategory = selectedCategory.dataset.category;
                const deleteSelectedCategoryProducts = selectedCategoryProducts.filter(product => !product.categories.includes(btnSeleselectedCategory));

                selectedCategoryProducts.splice(0, selectedCategoryProducts.length);// Limpiar selectedCategoryProducts
                deleteSelectedCategoryProducts.forEach(product => { //agrega los elementos filtrados
                    selectedCategoryProducts.push(product);
                });

                console.log(selectedCategoryProducts);
                if (selectedCategoryProducts.length > 0) {
                    renderCards(selectedCategoryProducts)
                } else {
                    selectedCategoryProducts.splice(0, selectedCategoryProducts.length);// Limpiar selectedCategoryProducts
                    initselectedCategoryProducts()
                    renderCards(selectedCategoryProducts)
                    initCardsEvents();
                }
            }
        });
    });
};


/**
 * Variables de productos filtrados por categoría
 */
const renderFilterTags = (category) => {

    const filterTags = document.querySelector(".filter_tags")
    const filterTag = document.createElement("div")
    filterTag.classList.add("filter_tag")
    filterTag.classList.add("opened")

    filterTag.innerHTML = `
    <div class="filter_tag_text">${category}</div>
    <div class="filter_tag_delete_icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
            class="bi bi-x-lg" viewBox="0 0 16 16">
            <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
    </div>`
    filterTags.appendChild(filterTag)
    initDeleteAndCloseCategories()
}

    /**
     * Variable de productos filtrados por categoría
     */
    const allProducts = filterProductsByCategory("All");




/**
 * 
 */
const initselectedCategoryProducts = () => {
    const categoryBtn = document.querySelectorAll(".category_btn")
    const allProductsCategory = categoryBtn[0]

    allProductsCategory.classList.add("opened") //Se muestra activo el categoryBtn de Todos
    selectedCategoryProducts.push(...allProducts) //agrega todos los productos al array de categoria seleccionada


    renderFilterTags("All") //renderizamos el filterTag de Todos los productos
    initDeleteAndCloseCategories()
    initCardsEvents()
}


/**
 * Inicializa los eventos de las cards
 */
const initCardsEvents = () => {
    updateTotalQuantity();
    const cardButtonAddCart = document.querySelectorAll(".button_add_card");
    const cardDetails = document.querySelectorAll(".button_details_card");
    const cardPictureDetails = document.querySelectorAll(".card_picture");
    // BOTÓN AÑADIR AL CARRITO
    cardButtonAddCart.forEach((product, index) => {
        product.addEventListener("click", (ev) => {
            const selectedProduct = selectedCategoryProducts[index];
            console.log(selectedProduct);
            const productIndex = ordersInCart.findIndex(item => item.dataIdentifier === selectedProduct.dataIdentifier);
            const ok = confirm(`¿Quieres añadir ${selectedProduct.itemTitle} al carrito?`);
            if (ok) {
                if (productIndex !== -1) {
                    console.log(ordersInCart[productIndex]);
                    ordersInCart[productIndex].itemQuantity++

                } else {
                    ordersInCart.push({ ...selectedProduct });

                }
                renderCartBubble();
                renderDrawerItemTotalPrice()
                renderDrawerTotalQuantity()
                renderDrawerTotalPrice()
                initModalWindowsCounterEvents()

            }
        });
    });


    // BOTÓN DETALLES DEL PRODUCTO
    cardDetails.forEach((product, index) => {

        product.addEventListener("click", (ev) => {
            const selectedProduct = selectedCategoryProducts[index];
            const productIndex = selectedCategoryProducts.findIndex(item => item.dataIdentifier === selectedProduct.dataIdentifier);
            if (productIndex !== -1) {

                renderModalWindows(selectedProduct)
                initModalWindows()
                initModalWindowsEvents()

            }
        });
    });

    // CARDPICTURE DETALLES DEL PRODUCTO
    cardPictureDetails.forEach((product, index) => {

        product.addEventListener("click", (ev) => {
            const selectedProduct = selectedCategoryProducts[index];
            const productIndex = selectedCategoryProducts.findIndex(item => item.dataIdentifier === selectedProduct.dataIdentifier);
            if (productIndex !== -1) {

                renderModalWindows(selectedProduct)
                initModalWindows()
                initModalWindowsEvents()

            }
        });
    });

};



// #region MODALWINDOWS
// MODALWINDOWS
/**
 * initModalWindows
 */
const initModalWindows = () => {
    const modalWindows = document.querySelector(".modal_windows")
    modalWindows.classList.add("opened")
    const modalWindowsCloseButton = modalWindows.querySelector(".close_icon")

    modalWindowsCloseButton.addEventListener("click", (ev) => {
        const modalWindowsBody = document.querySelector(".modal_window_body")
        modalWindowsBody.innerHTML = ""
        modalWindows.classList.remove("opened")
    })
    resetCounter()

}

let counter = 1
const resetCounter = () => {
    counter = 1

}

/**
 * initModalWindowsCounterEvents
 */
const initModalWindowsCounterEvents = () => {
    const modalWindows = document.querySelector(".modal_windows");
    const modalWindosCounterButtons = document.querySelector(".counter_buttons")
    const mWCounterButtonPlus = modalWindosCounterButtons.querySelector(".counter_buttons_plus")
    const mWCounterButtonMinus = modalWindosCounterButtons.querySelector(".counter_buttons_minus")
    const mWCounterNumber = modalWindows.querySelector(".counter_number")

    const modalWindowsContent = modalWindows.querySelector(".modal_window_content");
    const modalId = modalWindowsContent.dataset.identifier;

    const modalProductIndex = selectedCategoryProducts.findIndex(item => item.dataIdentifier === modalId);
    const product = selectedCategoryProducts[modalProductIndex];


    if (modalProductIndex !== -1) {

        // BOTON +
        mWCounterButtonPlus.addEventListener("click", (ev) => {
            mWCounterNumber.innerText = ++counter
            product.itemQuantity = counter
            // console.log(product);

        })

        // BOTON -
        mWCounterButtonMinus.addEventListener("click", (ev) => {
            if (counter > 1) {
                mWCounterNumber.innerText = --counter
                product.itemQuantity = counter
            }
        })


    }
}
/**
 * initModalWindowsEvents
 */
const initModalWindowsEvents = () => {
    initModalWindowsCounterEvents()
    const modalWindows = document.querySelector(".modal_windows");
    const modalWindowsAddToCart = modalWindows.querySelectorAll(".button_add_card");
    const modalWindowsContent = modalWindows.querySelector(".modal_window_content");
    const modalId = modalWindowsContent.dataset.identifier;

    const modalProductIndex = selectedCategoryProducts.findIndex(item => item.dataIdentifier === modalId);
    const product = selectedCategoryProducts[modalProductIndex];

    if (modalProductIndex !== -1) {

        modalWindowsAddToCart.forEach(button => {
            button.addEventListener("click", (ev) => {
                console.log(product);
                const productIndex = ordersInCart.findIndex(item => item.dataIdentifier === modalId);

                const ok = confirm(`¿Quieres añadir ${product.itemTitle} al carrito?`);
                if (ok) {
                    if (productIndex !== -1) {
                        ordersInCart[productIndex].itemQuantity++;
                    } else {
                        ordersInCart.push({ ...product });
                    }

                    updateTotalQuantity();
                    renderCartBubble();
                    renderDrawerItemTotalPrice();
                    renderDrawerTotalQuantity();
                    renderDrawerTotalPrice();

                    modalWindows.classList.remove("opened")
                }
            });


        });


    }


};

/**
 * renderModalWindows
 */
const renderModalWindows = (producto) => {
    calculateProductOfferPrice(producto)
    const modalWindowsBody = document.querySelector(".modal_window_body")
    modalWindowsBody.innerHTML = "";

    const productIndex = order.findIndex(product => product.dataIdentifier === producto.dataIdentifier)
    const selectedProduct = order[productIndex]


    const modalWindowsContent = document.createElement("div");
    modalWindowsContent.classList.add("modal_windows_body_content");
    modalWindowsContent.innerHTML = `
    <div class="modal_window_picture"><img src="${selectedProduct.itemImg}" alt=""></div>
    <div class="modal_window_content" data-identifier=${selectedProduct.dataIdentifier}>
        <div class="modal_window_content_text">
            <div class="modal_window_content_top">
                <div class="modal_window_content_title">
                    <div class="title">${selectedProduct.itemTitle}</div>
                    <div class="author">${selectedProduct.itemSubtitle}</div>
                </div>
                <div class="modal_window_content_prices">
                    <div class="offer_amount">${selectedProduct.itemOfferPrice}€</div>
                    <div class="price">${selectedProduct.itemPrice}€</div>
                </div>
            </div>
            <div class="description">${selectedProduct.itemDescripption}</div>
            <div class="offer">
                
                <div class="offer_text">${selectedProduct.dataSale}% de descuento</div>
            </div>
        </div>
    
        <div class="buttons">
            <div class="button button_add_card button_secondary">
                <div class="card_button_secondary_text">Añadir</div>
                <div class="card_button_secondary_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                </div>
            </div>

            <div class="counter_buttons">
                <span class="counter_buttons_plus">
                    +
                </span>
                <span class="counter_buttons_minus">
                    -
                </span>
            </div>

            <button class="counter">
                <span class="counter_number">
                1
                </span>
            </button>

            <div class="sub_buttons">
                <button class="button fav_button button_primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                        <path fill="currentColor"
                            d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z" />
                    </svg>
                </button>
            </div>
        </div>
    
    </div>`;

    modalWindowsBody.appendChild(modalWindowsContent);


    /**
     * Mostrar oferta
     */
    const modalWindos = document.querySelector(".modal_windows")
    const sale = selectedProduct.dataSale

    const availableOffer = sale > 0
    const modalWindowsOffer = modalWindos.querySelector(".offer")
    const modalWindowsOfferAmount = modalWindos.querySelector(".offer_amount")
    const modalWindowsPrice = modalWindos.querySelector(".price")
    if (availableOffer) {   // comprueba si la oferta es mayor a 0 y si es cierto muestra la oferta
        modalWindowsOffer.classList.add("opened")
        modalWindowsOfferAmount.classList.add("opened")
        // modalWindowsPrice.style.textDecoration = `line-through`;
        modalWindowsPrice.classList.add("offer_visible")

    } else {
        modalWindowsOffer.classList.remove("opened")
    }

}




// DRAWER/CARRITO

// initDrawer
/**
 *  Inicializa el drawer/carrito
 */
const initDrawerEvents = () => {
    const cartButton = document.querySelector(".header_cart_toggle")
    const drawer = document.querySelector(".drawer")
    const drawerCloseButton = document.querySelector(".drawer_close_button")

    cartButton.addEventListener("click", (ev) => {
        renderDrawer()
        drawer.classList.add("opened")
        const drawerTotalPrice = drawer.querySelector(".drawer_total_price")
        const drawerCheckout = drawer.querySelector(".checkout")
        const drawerEmptyCart = drawer.querySelector(".your_cart_is_empty")
        const isCartEmpty = ordersInCart.length === 0;

        if (!isCartEmpty) { // Si el carrito no está vacío
            drawerEmptyCart.classList.remove("opened")  //se oculta el mensaje de carrito vacio
            drawerCheckout.classList.add("opened");     //se muestra el checkout
            drawerTotalPrice.classList.add("opened")    //se muestra el precio total del carrito
        } else {            // Si el carrito está vacío
            drawerEmptyCart.classList.add("opened")   // se muestra el mensaje de carrito vacio
            drawerCheckout.classList.remove("opened");// se oculta el checkout
            drawerTotalPrice.classList.remove("opened")  //se oculta el precio total del carrito

        }

        initOrderRemoveEvents()
        initDrawerQuantityCounter()  // inicia los eventos del contador de los productos del carrito
        renderDrawerItemTotalPrice() // renderiza el precioTotal del producto en el carrito
        renderDrawerTotalPrice()     // Renderiza el precio total del carrito

    })
    drawerCloseButton.addEventListener("click", (ev) => {
        drawer.classList.remove("opened")

    })

}

/**
 * Inicializa el Counter del drawer/carrito
 */
const initDrawerQuantityCounter = () => {
    const drawerProducts = document.querySelectorAll(".drawer_products");

    drawerProducts.forEach((product, index) => {

        // BOTON +
        const drawerCounterButtonPlus = product.querySelector(".counter_buttons_plus");
        drawerCounterButtonPlus.addEventListener("click", (ev) => {
            const selectedProduct = ordersInCart[index];

            selectedProduct.itemQuantity++;
            renderCartBubble();
            renderDrawerItemTotalPrice()
            renderDrawerTotalQuantity()
            renderDrawerTotalPrice()
            renderProgressBar()
        });

        // BOTON -
        const drawerCounterButtonMinus = product.querySelector(".counter_buttons_minus");
        drawerCounterButtonMinus.addEventListener("click", (ev) => {
            const selectedProduct = ordersInCart[index];

            if (selectedProduct.itemQuantity > 1) {
                selectedProduct.itemQuantity--;

                renderCartBubble();
                renderDrawerTotalQuantity()
                renderDrawerItemTotalPrice()
                renderDrawerTotalPrice()
                renderProgressBar()
            }
        });

    });
};

/**
 * Inicializa eliminar un producto del drawer/carrito
 */
const initOrderRemoveEvents = () => {
    const drawerProducts = document.querySelectorAll(".drawer_products");

    drawerProducts.forEach((product, index) => {
        const drawerRemoveOrderButton = product.querySelector(".drawer_products_info_delete")
        drawerRemoveOrderButton.addEventListener("click", (ev) => {
            const selectedProduct = ordersInCart[index]
            removeFromCart(selectedProduct.dataIdentifier)
            renderCartBubble();
        })
    })
}

/**
 * 
 */
const removeFromCart = (dataIdentifier) => {
    const productIndex = ordersInCart.findIndex(product => product.dataIdentifier === dataIdentifier);

    if (productIndex !== -1) {
        ordersInCart.splice(productIndex, 1); // Elimina el producto del carrito
        renderDrawer();                       // Actualiza la visualización del carrito
        renderCartBubble();                   // Actualiza la burbuja del carrito si es necesario
        initDrawerQuantityCounter()  // inicia los eventos del contador de los productos del carrito
        calculateDrawerTotalPrice()
        renderDrawerItemTotalPrice() // renderiza el precioTotal del producto en el carrito
        renderDrawerTotalPrice()     // Renderiza el precio total del carrito
        initOrderRemoveEvents()

        if (ordersInCart.length == 0) {
            const drawer = document.querySelector(".drawer")
            const drawerTotalPrice = document.querySelector(".drawer_total_price");
            const drawerCheckout = drawer.querySelector(".checkout")
            const drawerEmptyCart = drawer.querySelector(".your_cart_is_empty")

            drawerTotalPrice.classList.remove("opened");
            drawerEmptyCart.classList.add("opened")   // se muestra el mensaje de carrito vacio
            drawerCheckout.classList.remove("opened");// se oculta el checkout
        }

    } else {
        console.log("El producto no se encontró en el carrito.");
    }
};

// renderDrawer
/**
 * Renderiza los productos de OrdersInCart en el drawer/carrito
 * actualizando el precio total y la cantidad total de productos
 */
const renderDrawer = () => {
    renderDrawerTotalPrice()
    renderDrawerTotalQuantity()
    renderDrawerProducts()
    renderProgressBar()
}

/**
 * Renderiza los Productos en el drawer/carrito con HTML dinámico
 */
const renderDrawerProducts = () => {
    const drawerProducts = document.querySelector(".drawer_content_body");
    drawerProducts.innerHTML = "";

    // por cada producto añadido al carrito se crea un Element div y en el pintamos cada uno
    for (const product of ordersInCart) {
        const drawerProduct = document.createElement("div");
        drawerProduct.classList.add("drawer_products");
        calculateProductOfferPrice(product)

        drawerProduct.innerHTML = `
                <div class="drawer_products_img">
                    <img src="${product.itemImg}" alt="">
                </div>
                <div class="drawer_products_info">
                    <div class="drawer_products_info_text">
                        <div class="drawer_products_info_title">${product.itemTitle}</div>
                        <div class="drawer_products_info_subtitle">${product.itemSubtitle}</div>
                        <div class="drawer_products_info_delete">X Eliminar</div>
                    </div>
                    
                    <div class="drawer_products_info_prices">
                        <button class="counter" data-productId="${product.dataIdentifier}">
                            <span class="counter_buttons_minus">-</span>
                            <span class="counter_number">${product.itemQuantity}</span>
                            <span class="counter_buttons_plus">+</span>
                        </button>
                
                        <div class="info_prices">
                            <div class="drawer_products_info_offer_price">${product.itemOfferPrice}€</div>
                            <div class="drawer_products_info_price">${product.itemPrice}€</div>
                        </div> 
                        
                    </div>
                </div>
            `;

        drawerProducts.appendChild(drawerProduct);

        // si hay oferta
        // se muestra el precio de oferta también

        const drawerOfferPrice = drawerProduct.querySelector(".drawer_products_info_offer_price");
        const drawerPrice = drawerProduct.querySelector(".drawer_products_info_price");
        const productSale = +product.dataSale

        const avOffer = productSale > 0; // Verificar si hay una oferta para el producto
        if (avOffer) {
            drawerPrice.classList.add("offer");
            drawerOfferPrice.classList.remove("opened");
        } else {
            drawerPrice.classList.remove("offer");
            drawerOfferPrice.classList.add("opened");
        }

    }
}

/**
 * Renderiza la cantidad total de Productos en el drawer/carrito
 */
const renderDrawerTotalQuantity = () => {
    const drawerContent = document.querySelector(".drawer_content")
    const cartLenght = drawerContent.querySelector(".cart_lenght")
    // si hay productos en el carrito se muestra la cantidad
    if (ordersInCart.length > 0) {
        cartLenght.innerText = `Productos: ${updateTotalQuantity()}`;
    } else {
        cartLenght.innerText = ``;
    }
}




/**
 * Renderiza y calcula el precio total del carrito
 * y lo muestra si hay productos en él
 */
const renderDrawerTotalPrice = () => {
    const drawerTotalPrice = document.querySelector(".drawer_total_price")
    const drawerTotalPriceText = drawerTotalPrice.querySelector(".drawer_total_price_text")
    const drawerTotalPriceAmount = drawerTotalPrice.querySelector(".drawer_total_price_amount")
    const drawer = document.querySelector(".drawer")
    const drawerCheckout = drawer.querySelector(".checkout")
    const drawerEmptyCart = drawer.querySelector(".your_cart_is_empty")

    if (ordersInCart.length > 0) { //si hay productos en el carrito:
        drawerTotalPriceText.innerText = "Total"
        drawerTotalPriceAmount.innerText = `${calculateDrawerTotalPrice()}€`
    } else {
        drawerEmptyCart.classList.add("opened")   // se muestra el mensaje de carrito vacio
        drawerCheckout.classList.remove("opened");// se oculta el checkout
    }
}

/**
 *  renderiza el precioTotal del producto en el carrito
 */
const renderDrawerItemTotalPrice = () => {
    const drawerProducts = document.querySelectorAll(".drawer_products");

    drawerProducts.forEach((product, index) => {
        const drawerProductsInfo = product.querySelector(".drawer_products_info");
        const drawerProductItemPrice = drawerProductsInfo.querySelector(".drawer_products_info_price")
        const drawerProductItemOfferPrice = drawerProductsInfo.querySelector(".drawer_products_info_offer_price")

        const selectedProduct = ordersInCart[index]
        // console.log(selectedProduct);
        const productSale = +ordersInCart[index].dataSale

        const avOffer = productSale > 0;    // verifica si hay una oferta para el producto
        const drawerPriceToUse = avOffer ? drawerProductItemOfferPrice : drawerProductItemPrice; // si hay oferta se usa el selector correcto para mostrar el precio

        const calculateDrawerItemPrice = calculateItemTotalPrice(selectedProduct)  // calcula el precioTotal del producto del carrito
        drawerPriceToUse.innerText = `${calculateDrawerItemPrice.toFixed(2)}€`;

        selectedProduct.itemTotalPrice = calculateDrawerItemPrice.toFixed(2)       // asigna al .itemTotalPrice del poducto seleccionado 
        // console.log(selectedProduct.itemTotalPrice)


        const drawerCounterNumber = drawerProductsInfo.querySelector(".counter_number")
        drawerCounterNumber.innerText = selectedProduct.itemQuantity  // ACTUALIZA EL CONTADOR de cada producto en el drawer

    })
};

const renderProgressBar = () => {
    const progressBar = document.querySelector('.free_delivery_progress_bar');
    const totalPrice = calculateDrawerTotalPrice(); // Función que devuelve el precio total del carrito
    const maxPrice = 70; // Precio máximo deseado para completar la barra

    const percentage = (totalPrice / maxPrice) * 100; // Calcular el porcentaje
    progressBar.style.width = `${percentage}%`;

    const freDeliveryText = document.querySelector(".free_delivery_text")
    if (calculatePriceProgressBar() < 0) {
        freDeliveryText.innerText = "¡Has conseguido el envío gratis!"
        
    } else {
        freDeliveryText.innerText = `Te quedan ${calculatePriceProgressBar()}€ para conseguir el envío gratis`
    }
    
};

const calculatePriceProgressBar = () => {
    const deliveryPrice = (70 - calculateDrawerTotalPrice())
    return deliveryPrice.toFixed(2)
} 

// cálculos del Drawer
/**
 * Calcula el precio total del drawer/carrito
 */
const calculateDrawerTotalPrice = () => {
    let sumTotal = 0;

    for (const product of ordersInCart) {
        const totalPrice = calculateItemTotalPrice(product) //calcula el precio final de cada producto
        sumTotal += +totalPrice; //sumamos los precios de todos los productos para obtener  el total
    }
    const cartTotalPrice = sumTotal.toFixed(2);
    return cartTotalPrice; // devuelve precio total del carrito
};


/**
 *  calcula el precio total del producto seleccionado multiplicandolo por la cantidad del producto,
 *  teniendo en cuenta si tiene oferta o no 
 */
const calculateItemTotalPrice = (product) => {
    const productIndex = ordersInCart.findIndex(item => item.dataIdentifier === product.dataIdentifier);    //buscamos en el carrito el producto seleccionado con .finIndex()
    let sumTotal = 0
    if (productIndex !== -1) {
        const productPrice = +ordersInCart[productIndex].itemPrice;
        const productQuantity = +ordersInCart[productIndex].itemQuantity;
        const productOfferPrice = +ordersInCart[productIndex].itemOfferPrice
        const productSale = +ordersInCart[productIndex].dataSale

        const avOffer = productSale > 0; // Verificar si hay una oferta para el producto
        const priceToUse = avOffer ? productOfferPrice : productPrice; // Si hay oferta, se usa el precio de oferta, de lo contrario, se usa el precio normal

        sumTotal += priceToUse * productQuantity; // obtiene y suma el precio total de cada producto(precioInicial * cantidadProducto)
        ordersInCart[productIndex].itemTotalPrice = sumTotal


    }
    return sumTotal;
};




// CART BUBBLE
/**
 * Actualiza y asigna al numero de la burbuja la itemQuantity
 */
const renderCartBubble = () => {
    const headerBubble = document.querySelector(".header .bubble")
    headerBubble.innerText = updateTotalQuantity()
    headerBubble.classList.add("opened")
    if (headerBubble.innerText > 0) {   //si el .innerText de headerBubble es mayor que 0 se muestra, si no se oculta
        headerBubble.classList.add("opened")
    } else {
        headerBubble.classList.remove("opened")
    }

}

/**
 * Actualiza el total de la suma de todas las .itemQuantity de ordersInCart 
 */
const updateTotalQuantity = () => {
    let quantity = 0
    for (let i = 0; i < ordersInCart.length; i++) {
        quantity += ordersInCart[i].itemQuantity  // suma total de todos las cantidades de productos que hay en el carrito
    }
    return quantity
}
/**
 * Calcula el .itemOfferPrice del producto en el array ordersInCart
 */
const calculateProductOfferPrice = (product) => {
    const productPrice = +product.itemPrice;
    const productSale = +product.dataSale;

    if (productSale > 0) {
        const discountedPrice = productPrice - (productPrice * productSale / 100);
        const itemOfferPrice = discountedPrice.toFixed(2);
        product.itemOfferPrice = itemOfferPrice;
        return itemOfferPrice;
    }
    return productPrice.toFixed(2);
};


/**
 * Calcula el precio de oferta
 */
const calculateOfferPrice = (precioInicial, descuento, cantidad) => {

    const precioFinal = precioInicial - (precioInicial * descuento / 100); // Calcula el precio final restando el descuento al precio inicial
    const precioFinalOferta = precioFinal * cantidad
    return precioFinalOferta.toFixed(2);

};



const renderSpanCart = () => { }
const renderChart = () => { }
const renderModalWindow = () => { }



const initUpdateCartEvents = () => { }











