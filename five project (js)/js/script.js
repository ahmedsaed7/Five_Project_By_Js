var product_Section = document.getElementById("product-container")

let types = []
let descriptions = []
let names = []
const products = [

    {
        type: "laptop",
        id: 1,
        description: "Details\n\
                        Acer Aspire 5 A515-45G-R1KS\n\
                        AMD Ryzen 7-5700U\n\
                        512GB SSD\n\
                        8GB Ram\n\
                        AMD Radeon RX640 2GB\n\
                        15.6 Inch - DOS\n\
                        Color: gray ",
        name: "Acer Aspire 5",
        price: 700,
        img: "./image/l1.png",
    },
    {
        type: "phone",
        id: 2,
        description: "Details\n\
                        Samsung Galaxy A52\n\
                        Octa-core Snapdragon 720G, 8nm technology\n\
                        128/256 GB\n\
                        8GB Ram , Android 11\n\
                        with Camera Back 64+12+5+5 MP / Front 32 MP\n\
                        6.5 inches, FHD+\n\
                        Battery : 4500 mAh\n\
                        The phone is available in blue, purple, white, and black",
        name: "Samsung Galaxy A52",
        price: 400,
        img: "./image/p1.png",
    },
    {
        type: "laptop",
        id: 3,
        description: "Details\n\
                        Lenovo ThinkPad E14\n\
                        Intel Core i7-1165G7\n\
                        512GB SSD\n\
                        8GB Ram\n\
                        Graphics NVIDIA GeForce MX450 2GB\n\
                        Display 14 FHD (1920x1080) IPS 250nits\n\
                        Color  black",
        name: "Lenovo ThinkPad E14 Gen2",
        price: 1375,
        img: "./image/l2.png",
    },
    {
        type: "laptop",
        id: 4,
        description: "Details\n\
                        Lenovo Ideapad Gaming 3\n\
                        Core I7-12650H\n\
                        16G Ram\n\
                        512 NVME\n\
                        VGA Nvidia 4G RTX 3050Ti\n\
                        15.6 FHD 165Hz\n\
                        Color gray",
        name: "Lenovo Ideapad Gaming 3",
        price: 1482,
        img: "./image/l3.png",
    },
    {
        type: "phone",
        id: 5,
        description: "Details\n\
                        samsung galaxy Z fold 5\n\
                        Octa-core Snapdragon 8 Gen 2, 4nm technology\n\
                        256/512 GB\n\
                        12GB Ram , Android 13\n\
                        with Camera Back 50+12+12 MP / Front 10 MP\n\
                        7.6 inches, FHD+\n\
                        Battery : 4400 mAh\n\
                        The phone is available in black, cream and cyan",
        name: "samsung galaxy Z fold 5",
        price: 2000,
        img: "./image/p2.png",
    },
    {
        type: "laptop",
        id: 6,
        description: "Details\n\
                        HP Probook 450 G9\n\
                        Core I5 - 1235U\n\
                        15.6 HD\n\
                        8GB\n\
                        512GB SSD\n\
                        MX570 2GB - DOS\n\
                        color Silver Aluminum",
        name: "HP Probook 450",
        price: 15000,
        img: "./image/l4.png",
    },
    {
        type: "phone",
        id: 7,
        description: "Details\n\
                        Oppo A18\n\
                        Octa-core Helio G85, 12nm technology\n\
                        64/128 GB\n\
                        4GB Ram , Android 13\n\
                        with Camera Back 8+2 MP / Front 5 MP\n\
                        6.65 inches, HD\n\
                        Battery : 5000 mAh\n\
                        The phone is available in blue and black",
        name: "Oppo A18",
        price: 5000,
        img: "./image/p3.png",
    },
    {
        type: "laptop",
        id: 8,
        description: "Details\n\
                        Lenovo Legion 5 Pron\n\
                        Core I7 12700H \n\
                        32G Ram \n\
                        1TB SSD\n\
                        NVME -VGA Nvidia 6G\n\
                        RTX 3060 -16.0\n\
                        WQXGA 165Hz DOS\n\
                        Color Gery ",
        name: "Lenovo Legion 5 Pro",
        price: 5000,
        img: "./image/l12.png",
    },
    {
        type: "laptop",
        id: 9,
        description: "Details\n\
                        HP VICTUS 15-FA0031DX\n\
                        CI5 12450H\n\
                        8GB RAM\n\
                        SSD 512GB\n\
                        NVIDIA GTX1650 4GB\n\
                        15.6 FHD IPS 144HZ -WIN11\n\
                        Color SILVER",
        name: "HP VICTUS 15",
        price: 58879,
        img: "./image/l11.png",
    },
    {
        type: "laptop",
        id: 10,
        description: "Details\n\
                        Lenovo Legion 7 16ITHg6\n\
                        16'WQXGA Intel Core™ i7-11800H\n\
                        2TB SSD\n\
                        32GB DDR4\n\
                        NVIDIA® GeForce RTX™ 3080\n\
                        Color Selver",
        name: "Lenovo Legion 7 16ITHg6",
        price: 78956,
        img: "./image/l10.png",
    },
    {
        type: "phone",
        id: 11,
        description: "Details\n\
                        Xiaomi Redmi 13C\n\
                        Octa-core Helio G85, 12nm technology\n\
                        128/256 GB\n\
                        4/6/8 GB Ram , Android 13\n\
                        with Camera Back 50+2+0.08 MP / Front 8 MP\n\
                        6.74 inches, HD\n\
                        Battery : 5000 mAh\n\
                        The phone is available in black, blue, white, and green",
        name: "Xiaomi Redmi 13C",
        price:52057,
        img: "./image/p4.png",
    },
    {
        type: "laptop",
        id: 12,
        description: "Details\n\
                        HP Spectre X360 14-ef2013dx\n\
                        Core I7-1355U\n\
                        16G Ram\n\
                        512G NVMe-Intel Iris Xe Graphics\n\
                        13.5 WUXGA Touch-Win 11 Home\n\
                        Color Black ",
        name: "HP Spectre X360 ",
        price: 56987,
        img: "./image/l8.png",
    },

]
let search_result

let carts = [];
let fav_products = [];
let index;
if (localStorage.getItem("index")) {
    index = +localStorage.getItem("index");

    if (localStorage.getItem("carts")) {
        carts = JSON.parse(localStorage.getItem("carts"));
    }
    if (carts[index]) {
    } else { carts.push([]); }
    if (localStorage.getItem("fav_products")) {
        fav_products = JSON.parse(localStorage.getItem("fav_products"));
    }
    if (fav_products[index]) {
    } else fav_products.push([]);
}

const ATC = () => {
    return `
            <i class="fas fa-shopping-bag mr-1"></i>Add to cart
    `
}

const RFC = () => {
    return `
            <i class="fas fa-shopping-bag mr-1"></i>Remove from cart 
    `
}

const drwButton = (id) => {
    let t;

    if (carts[index]) {
        t = carts[index].find(p => p.id == id)
    }
    if (t) {
        return RFC();
    } else return ATC();

}
let fa = "far fa-heart"

const drwHeart = (id) => {
    let t
    if (fav_products[index]) {
        t = fav_products[index].find(p => p.id == id)
    }
    if (t) {
        return "fas fa-heart"
    } else return "far fa-heart"

}
products.map((item) => {

    types.push(item.type)
    descriptions.push(item.description)
    names.push(item.name)
})

getItem = (id) => {
    let item = products.find(p => p.id == id)
    return item;
}

const ProductItem = () => {
    let product_drw = []
    if (search_result) {
        product_drw = search_result
    } else product_drw = products;

    let product = product_drw.map((item) => {

        item.TotalPrice = 0
        item.count = 1;

        return `<div class="product-item pb-3">
                <div class="figure">
                    <img src=${item.img} alt="${item.name}" />
                    <div class="product-info">
                        <div class="d_col" >
                            <span>${item.name}</span>
                            <i class="${drwHeart(item.id)}"name="${item.id}"></i>
                        </div>
                        <p>${item.description}</p>
                    </div>
                </div>
                    <div class="d_col">
                        <button name="${item.id}" class="btn btn-sm ml-1 mt-1">${drwButton(item.id)}</button>
                        <b class="price">${item.price} $</b>
                    </div>
            </div>
        `
    })

    product_Section.innerHTML = product.join(" ");

    let addToCart = document.querySelectorAll(".product-item .d_col button")
    addToCart.forEach((z) => {
        z.style.backgroundColor = "#729dcace";
        z.style.boxShadow = "0 0 0 0"

        if (z.innerHTML === ATC()) {
            z.style.backgroundColor = "#729dcace";
        } else if (z.innerHTML === RFC()) z.style.backgroundColor = "#cf8088d5"

        z.onclick = function () {

            let carts = [];
            let fav_products = [];
            let index;
            if (localStorage.getItem("index")) {
                index = +localStorage.getItem("index");

                if (localStorage.getItem("carts")) {
                    carts = JSON.parse(localStorage.getItem("carts"));
                }
                if (carts[index]) {
                } else { carts.push([]); }
                if (localStorage.getItem("fav_products")) {
                    fav_products = JSON.parse(localStorage.getItem("fav_products"));
                }
                if (fav_products[index]) {
                } else fav_products.push([]);
            }

            if (userName) {
                let id = z.getAttribute("name")
                let item = getItem(id);

                if (z.innerHTML === ATC()) {
                    z.innerHTML = RFC();
                    z.style.backgroundColor = "#cf8088d5";
                    carts[index].push(item);
                    localStorage.setItem("carts", JSON.stringify(carts));
                } else {
                    z.innerHTML = ATC();
                    z.style.backgroundColor = "#729dcace"
                    carts[index].splice(carts[index].findIndex(p => p.id == id), 1);
                    localStorage.setItem("carts", JSON.stringify(carts));
                }

                Productbag();
            } else {
                setTimeout(() => {
                    window.location = "login.html";
                }, 400)
            }
        }
    })
    let heart_icon = document.querySelectorAll(".product-item .product-info i")

    heart_icon.forEach((z) => {
        z.onclick = function () {
            let id = z.getAttribute("name")
            let item = getItem(id);
            if (z.className === "fas fa-heart") {
                z.className = "far fa-heart";
                fav_products[index].splice(fav_products[index].findIndex(p => p.id == id), 1);
                localStorage.setItem("fav_products", JSON.stringify(fav_products));
            } else {
                z.className = "fas fa-heart";
                fav_products[index].push(item);
                localStorage.setItem("fav_products", JSON.stringify(fav_products));
            }
        }

    })

}

ProductItem();

////////////////////////////////////////////////////////////////////////

function search(value) {
    let selected = document.querySelector(".custom-select")
    let i = 2;
    
    if (+selected.value > -1)
        i = +selected.value

    let arr = [types, names, descriptions]
    var indexes = []
    arr[i].forEach((v, ii) => {
        if (v.toUpperCase().indexOf(value.toUpperCase().trim()) != -1) {
            indexes.push(ii)
        }
    })
    search_result = []
    indexes.forEach((it) => {
        search_result.push(products[it])
    })

    ProductItem();
}

////////////////////////////////////////////////////////////////////////////





