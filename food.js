let  famous_food_arr= [
    {
        id: 1,
        name: "Лаваш Standart classic",
        price: "24 000 sum",
        img_url: "https://cdn.delever.uz/delever/463f704a-a4df-4696-b7f6-29f1f35c5eb8"
    },
    {
        id: 2,
        name: "Лаваш Куриный Standart Classic",
        price: "22 000 sum",
        img_url: "https://cdn.delever.uz/delever/4db5ad83-b34e-48e8-ad57-b27e7fe96979"
    },

    {
        id: 3,
        name: "Сэндвич Classic острый",
        price: "20 000 sum",
        img_url: "https://cdn.delever.uz/delever/f18f2f88-3683-4515-aeea-65984eccefae"
    },

    {
        id: 4,
        name: "Шаурма Big",
        price: "24 000 sum",
        img_url: "	https://cdn.delever.uz/delever/f7448bb9-fa24-45d7-a075-f6c9d06509c8"
    },
    {
        id: 5,
        name: "Донар Кебаб мясной",
        price: "37 000 sum",
        img_url: "https://cdn.delever.uz/delever/d4db4b28-c365-47ca-8509-0557473f4880"
    },
    {
        id: 6,
        name: "Шаурма Баггет куриный",
        price: "24 000 sum",
        img_url: "https://cdn.delever.uz/delever/e7ae521e-8217-42c8-97a5-9e5ed7b9816b"
    },

    {
        id: 7,
        name: "Дабл Бургер",
        price: "29 000 sum",
        img_url: "	https://cdn.delever.uz/delever/cd7ff0cd-f287-47e0-ad6b-b38d02f8e0ee"
    },
    {
        id: 8,
        name: "Наггетсы L (20 шт)",
        price: "30 000 sum",
        img_url: "https://cdn.delever.uz/delever/4179b4dd-df10-4ebf-b8a5-64e2ae84b609"
    }
]

const container1 = document.getElementById('container2');
let food_arr = ""

famous_food_arr.map(
    (item) => 
    (food_arr += `<div class="card">
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
console.log(food_arr)
container1.innerHTML += food_arr;