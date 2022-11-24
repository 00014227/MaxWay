let adress_arr = [
    {
        id: 1,
        name: "MAX WAY PARUS",
        adress: "улица Шота Руставели, 9А",
        time: "10:00-03:00",
        map: "https://maxway.uz/branch/a925782e-2b43-42df-9f7c-1d98bd4d195e"
    },
    {
        id: 2,
        name: "MAX WAY SAYRAM ",
        adress: "19-й квартал, 119",
        time: "10:00-02:00",
        map: ""
    },
    {
        id: 3,
        name: "MAX WAY FONTAN ",
        adress: "3-й квартал, 21",
        time: "10:00-01:00",
        map: ""
    },
    {
        id: 4,
        name: "MAX WAY MINOR",
        adress: "MaxWay",
        time: "10:00-05:00",
        map: ""
    },
    {
        id: 5,
        name: "MAX WAY MAKSIM GORKIY ",
        adress: "улица Буюк Ипак Йули, 4",
        time: "09:00-04:00",
        map: ""
    },
    {
        id: 6,
        name: "MAX WAY NEXT",
        adress: "улица Бабура, 6",
        time: "10:00-23:00",
        map: ""
    }
]


const container = document.getElementById('main');

let section2 =""

adress_arr.map(
    (item) => 
    (section2 += ` <a href=../filial_details/detail_adress.html?id=${item.id}>
    <div class="card">
        <div>
            <h2>${item.name}</h2>
            <p>${item.adress}</p>
        </div>

        <div class="work_time">
            <p class="asd">Часы работы</p>
            <div class="time">
                <p>Ежедневно:</p>
                <p>${item.time}</p>
            </div>
        </div>
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
    </div>
</a>`)
)

container.innerHTML += section2;