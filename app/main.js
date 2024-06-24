
// VARIABLE PRODUCTOS DEL CARRITO
const ordersInCart = [
    // {
    //     dataIdentifier: "",
    //     cardId: "",
    //     cardTitle: "",
    //     cardSubtitle: "",
    //     cardPrice: "",
    //     cardImg: "",
    //     dataSale: "",
    //     cardOfferPrice: "",
    //     cardQuantity:""
    // }
]

// VARIABLES GLOBALES
const cards = document.querySelectorAll(".card")
const modalWindos = document.querySelector(".modal_windows")


console.log(ordersInCart);


// FUNCIONES 
const initDrawerEvents = () => {
    const cartButton = document.querySelector(".header_cart_toggle")
    const drawer = document.querySelector(".drawer")
    const drawerCloseButton = document.querySelector(".drawer_close_button")



    cartButton.addEventListener("click", (ev) => {
        updateDrawerProducts()
        drawer.classList.add("opened")

        const drawerCheckout = drawer.querySelector(".checkout")
        const drawerEmptyCart = drawer.querySelector(".your_cart_is_empty")
        const isCartEmpty = ordersInCart.length === 0;

        if (!isCartEmpty) {
            drawerEmptyCart.classList.remove("opened")
            drawerCheckout.classList.add("opened"); // Si el carrito no está vacío, se muestra el checkout
        } else {
            drawerEmptyCart.classList.add("opened")
            drawerCheckout.classList.remove("opened");// Si el carrito está vacío, se oculta el checkout

        }

    })
    drawerCloseButton.addEventListener("click", (ev) => {
        drawer.classList.remove("opened")

    })
}


const initCardEvents = () => {
    const cards = document.querySelectorAll(".card")

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardButton = card.querySelector(".button_add_card")
        const cardDetails = card.querySelector(".button_details_card")

        cardButton.addEventListener("click", (ev) => {
            const ok = confirm("¿Quieres añadirlo al carrito?")
            if (ok) {
                updateCart(extractInfoFromCard(card))
                updateBubble()
                sumOfPrices()
            }
        })

        cardDetails.addEventListener("click", (ev) => {
            console.log(extractInfoFromCard(card))
        })
    }
}


const initModalWindows = () => {
    // itera por la colección cards y para cada uno de los elementos crea una variable card
    for (const card of cards) {
        const detailsButton = card.querySelector(".button_details_card")
        const title = card.querySelector(".card_title").innerText
        const subtitle = card.querySelector(".card_subtitle").innerText
        const price = +card.querySelector(".amount").innerText.replace(",", ".")
        const id = card.dataset.identifier
        const description = card.querySelector(".card_description").innerText.trim()
        const sale = card.dataset.sale
        const pictureSrc = card.querySelector(".card_picture img").src

        detailsButton.addEventListener("click", (ev) => {
            modalWindos.dataset.identifier = id
            modalWindos.querySelector(".title").innerText = title
            modalWindos.querySelector(".author").innerText = subtitle
            modalWindos.querySelector(".price").innerText = price.toFixed(2) + "€"
            modalWindos.querySelector(".description").innerText = description
            modalWindos.querySelector(".offer_amount").innerText = sale
            modalWindos.querySelector(".modal_window_picture img").src = pictureSrc

            modalWindos.querySelector(".modal_window_picture img").addEventListener("load", (ev) => {
                modalWindos.classList.add("opened")
            })

            // comprueba si la oferta es mayor a 0 y si es cierto muestra la oferta
            const availableOffer = sale > 0
            const modalWindowsOffer = modalWindos.querySelector(".offer")
            if (availableOffer) {
                modalWindowsOffer.classList.add("opened")
            } else {
                modalWindowsOffer.classList.remove("opened")
            }

        })
    }

    const modalWindowsCloseIcon = modalWindos.querySelector(".close_icon")
    const modalWindowsAddToCart = modalWindos.querySelector(".button_add_card")
    modalWindowsCloseIcon.addEventListener("click", (ev) => {
        resetCounter()
        modalWindos.classList.remove("opened")
    })

    // modalWindowsCounter
    const modalWindosCounter = document.querySelector(".counter")
    const modalWindosCounterButtons = document.querySelector(".counter_buttons")
    const mWCounterButtonPlus = modalWindosCounterButtons.querySelector(".counter_buttons_plus")
    const mWCounterButtonMinus = modalWindosCounterButtons.querySelector(".counter_buttons_minus")
    const mWCounterNumber = modalWindosCounter.querySelector(".counter_number")
    let counter = 0
    const resetCounter = () => {
        counter = 1
        mWCounterNumber.innerText = counter
    }

    mWCounterButtonPlus.addEventListener("click", (ev) => {
        mWCounterNumber.innerText = ++counter


    })
    mWCounterButtonMinus.addEventListener("click", (ev) => {
        if (counter > 1) {
            mWCounterNumber.innerText = --counter
        }
    })


    // AddToCart
    modalWindowsAddToCart.addEventListener("click", (ev) => {
        /**
         * código anterior que dependía del html de modalWindow
         */
        // const modalTitle = modalWindos.querySelector(".title").innerText
        // const modalSubtitle = modalWindos.querySelector(".author").innerText
        // const modalPrice = +modalWindos.querySelector(".price").innerText.replace(",", ".").replace("€", "") * mWCounterNumber.innerText
        // const modalId = modalWindos.dataset.identifier
        // const modalImg = modalWindos.querySelector(".modal_window_picture img").src
        // const modalSale = +modalWindos.querySelector(".offer_amount").innerText
        // const cardContent = {
        //     dataIdentifier: modalId,
        //     cardId: modalId,
        //     cardTitle: modalTitle,
        //     cardSubtitle: modalSubtitle,
        //     cardPrice: modalPrice,
        //     cardImg: modalImg,
        //     dataSale: modalSale,
        //     cardOfferPrice: calculateOfferPrice(modalPrice, modalSale),
        //     cardQuantity: mWCounterNumber.innerText
        // }

        const modalId = modalWindos.dataset.identifier;
        //condición de búsqueda. Esta función se ejecuta para cada elemento del array ordersInCart.
        const productId = ordersInCart.findIndex(product => product.dataIdentifier == modalId); //devuelve el índice de esa coincidencia. Si no encuentra ninguna coincidencia = -1
        if (productId !== -1) {
            const foundProduct = ordersInCart[productId];
            const modalTitle = foundProduct.cardTitle;
            const modalSubtitle = foundProduct.cardSubtitle;
            const modalPrice = foundProduct.cardPrice * foundProduct.cardQuantity
            const modalImg = foundProduct.cardImg;
            const modalSale = foundProduct.dataSale;
            const modalQuantity = mWCounterNumber.innerText;

            const cardContent = {
                dataIdentifier: modalId,
                cardId: modalId,
                cardTitle: modalTitle,
                cardSubtitle: modalSubtitle,
                cardPrice: modalPrice,
                cardImg: modalImg,
                dataSale: modalSale,
                cardOfferPrice: calculateOfferPrice(modalPrice, modalSale),
                cardQuantity: modalQuantity
            }
            console.log(cardContent);
            const ok = confirm("Quieres añadirlo al carrito?")
            if (ok) {
                updateCart(cardContent)
                resetCounter()
                updateBubble()
                sumOfPrices()
                modalWindos.classList.remove("opened")
            }
        }

    })

}


initDrawerEvents()
initCardEvents()
initModalWindows()






const updateCart = (cardContent) => {
    /**
     * busca un producto en el array ordersInCart que tenga la misma dataIdentifier que cardContent.dataIdentifier
     * y devuelve el índice de esa coincidencia. Si no encuentra ninguna coincidencia, productId será igual a -1.
     */
    const productIndex = ordersInCart.findIndex(product => product.dataIdentifier == cardContent.dataIdentifier);
    console.log(productIndex)
    if (productIndex !== -1) {
        ordersInCart[productIndex].cardQuantity += cardContent.cardQuantity
    } else {
        ordersInCart.push(cardContent)
    }
    console.log(ordersInCart)
}

const updateBubble = () => {
    const headerBubble = document.querySelector(".header .bubble")
    headerBubble.innerText = updateTotalQuantity()
    headerBubble.classList.add("opened")
}

const sumOfPrices = () => {
    const drawerTotalPriceAmount = document.querySelector(".drawer_total_price_amount")
    const drawerTotalPriceText = document.querySelector(".drawer_total_price_text")

    let sumTotal = 0
    for (let i = 0; i < ordersInCart.length; i++) {
        sumTotal += ordersInCart[i].cardPrice
    }
    drawerTotalPriceAmount.innerHTML = `
    ${sumTotal}€
    `
    drawerTotalPriceText.innerHTML = "Total"
}

// obtiene el total de productos en el carrito
const updateTotalQuantity = () => {
    // suma total de todas las .cardQuantity que hay en el carrito
    let sum = 0
    for (let i = 0; i < ordersInCart.length; i++) {
        sum += +ordersInCart[i].cardQuantity
    }
    return sum
}



// Actualiza la ventana del carrito 
const updateDrawerProducts = () => {
            const drawerProducts = document.querySelector(".drawer_content_body");
    drawerProducts.innerHTML = "";

    const drawerContent = document.querySelector(".drawer_content")
    const cartLenght = drawerContent.querySelector(".cart_lenght")

    // si hay productos en el carrito se muestra la cantidad
    if (ordersInCart.length > 0) {
        cartLenght.innerText = `Productos: ${updateTotalQuantity()}`;
    } else {
        cartLenght.innerText = ``;
    }

    // por cada producto añadido al carrito se crea un Element div y en el pintamos cada uno
    for (const product of ordersInCart) {
        const drawerProduct = document.createElement("div");
        drawerProduct.classList.add("drawer_products");

        drawerProduct.innerHTML = `
            <div class="drawer_products_img">
                <img src="${product.cardImg}" alt="">
            </div>
            <div class="drawer_products_info">
                <div class="drawer_products_info_text">
                    <div class="drawer_products_info_title">${product.cardTitle}</div>
                    <div class="drawer_products_info_subtitle">${product.cardSubtitle}</div>
                    <div class="drawer_products_info_delete">X Eliminar</div>
                </div>
                
                <div class="drawer_products_info_prices">
                    <button class="counter">
                        <span class="counter_buttons_minus">
                            -
                        </span>
                        <span class="counter_number">
                            ${product.cardQuantity}
                        </span>
                        <span class="counter_buttons_plus">
                        +
                        </span>
                    </button> 
                    <div class="info_prices">
                        <div class="drawer_products_info_offer_price">${product.cardOfferPrice}€</div>
                        <div class="drawer_products_info_price">${product.cardPrice}€</div>
                    </div> 
                    
                </div>
            </div>
        `;

        drawerProducts.appendChild(drawerProduct);

        // si el precio inicial del producto no coincide con el precio de oferta
        // se muestra el precio de oferta también
        const avOffer = product.cardPrice == product.cardOfferPrice;
        const drawerOfferPrice = drawerProduct.querySelector(".drawer_products_info_offer_price");
        const drawerPrice = drawerProduct.querySelector(".drawer_products_info_price");

        if (!avOffer) {
            drawerPrice.classList.add("offer");
            drawerOfferPrice.classList.remove("opened");
        } else {
            drawerPrice.classList.remove("offer");
            drawerOfferPrice.classList.add("opened");
        }


        const counterButtonPlus = drawerProduct.querySelector('.counter_buttons_plus');
        const counterButtonMinus = drawerProduct.querySelector('.counter_buttons_minus');
        const counterNumber = drawerProduct.querySelector('.counter_number');


        counterButtonPlus.addEventListener('click', () => {
            product.cardQuantity++;
            counterNumber.innerText = product.cardQuantity;
            cartLenght.innerText = `Productos: ${updateTotalQuantity()}`;
            drawerPrice.innerText = `${totalPrice()}€`
            console.log(product.cardQuantity);
        });

        counterButtonMinus.addEventListener('click', () => {
            if (product.cardQuantity > 1) {
                product.cardQuantity--;
                counterNumber.innerText = product.cardQuantity;
                cartLenght.innerText = `Productos: ${updateTotalQuantity()}`;

            }
        });

        
    }
};

const totalPrice = () => {
    let sumTotal = 0
    for (const product of ordersInCart) {
        const cardPrice = product.cardPrice
        const cardOfferPrice = product.cardOfferPrice
        const avOffer = cardPrice == cardOfferPrice
        if (!avOffer) {
            cardPrice == cardOfferPrice
        }
        sumTotal += cardPrice
    }
    return sumTotal
}
//Retorna la informacion del card en un objeto cardContent{}
const extractInfoFromCard = (card) => { //HTMLElement
    const cardTitle = card.querySelector(".card_title").innerText
    const cardSubtitle = card.querySelector(".card_subtitle").innerText
    const cardPrice = +card.querySelector(".amount").innerText.replace(",", ".")
    const cardId = card.querySelector(".card_identifier")
    const dataIdentifier = card.dataset.identifier
    const dataSale = card.dataset.sale
    const cardImg = card.querySelector(".card_picture img").src

    const cardContent = {
        dataIdentifier: dataIdentifier,
        cardId: cardId,
        cardTitle: cardTitle,
        cardSubtitle: cardSubtitle,
        cardPrice: cardPrice,
        cardImg: cardImg,
        dataSale: dataSale,
        cardOfferPrice: calculateOfferPrice(cardPrice, dataSale),
        cardQuantity: 1
    }

    return cardContent
}


// calcaula el precio de oferta
const calculateOfferPrice = (precioInicial, descuento) => {

    // Calcular el precio final restando el descuento al precio inicial
    const precioFinal = precioInicial - (precioInicial * descuento / 100);

    return precioFinal.toFixed(2);
};


