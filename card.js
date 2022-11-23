let  maxiBox= [
    {
        id: 1,
        name: "Макси Бокс Популярный КЦ",
        price: "35000 sum",
        img_url: "https://cdn.delever.uz/delever/e6992346-4df7-4779-b355-8b44eb14ebbc"
    },
    {
        id: 2,
        name: "Макси бокс Ретро КЦ",
        price: "30000 sum",
        img_url: "https://cdn.delever.uz/delever/4d809e07-3c11-4772-a0ba-ed3340b41f83"
    },

    {
        id: 3,
        name: "Макси Бокс Традиция КЦ",
        price: "30000 sum",
        img_url: "https://cdn.delever.uz/delever/2881db69-ffbe-433b-92e8-66576b76c32f"
    },

    {
        id: 4,
        name: "Макси Бокс Тренд КЦ",
        price: "30000 sum",
        img_url: "https://cdn.delever.uz/delever/4581112d-de53-4430-8a14-48f367d306c8"
    }
]

const container = document.getElementById('container');
let box_arr = ""

maxiBox.map(
    (item) => 
    (box_arr += `<div class="card">
    <img class="card_img" src="${item.img_url}" alt="">
    <div class="card2_part">
        <h3>${item.name}</h3>
        <div class="bottom_card">
            <span class="cost">${item.price}</span>
            <button class="btn_card">Выбрать</button>
        </div>
    </div>
</div>`)

);

container.innerHTML += box_arr