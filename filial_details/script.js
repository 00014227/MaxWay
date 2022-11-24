const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

console.log(myParam)

let arrData = [
    {id: 1,
    name: "MAX WAY PARUS",
    adress: "улица Катартал, 60/5",
    time: "09:00-03:00",
    phone: "940599779",
    orient: "ТЦ Парус",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.05818024488!2d69.20033381851457!3d41.285838222685854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31d4186d05%3A0x4cd8244d2671d50c!2zNjAsIDUgUWF0YXJ0b2wga28nY2hhc2ksINCi0L7RiNC60LXQvdGCIDEwMDA5NywgVXpiZWtpc3Rhbg!5e0!3m2!1sen!2s!4v1669139093400!5m2!1sen!2s"},
    {id: 2,
    name: "MAX WAY Sayram",
    adress: "19-й квартал, 119",
    time: "09:00-03:00",
    phone: "",
    orient: "Рынок сайрам.",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.05818024488!2d69.20033381851457!3d41.285838222685854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31d4186d05%3A0x4cd8244d2671d50c!2zNjAsIDUgUWF0YXJ0b2wga28nY2hhc2ksINCi0L7RiNC60LXQvdGCIDEwMDA5NywgVXpiZWtpc3Rhbg!5e0!3m2!1sen!2s!4v1669139093400!5m2!1sen!2s"
    },
     {id: 3,
    name: "MAX WAY FONTAN",
    adress: "3-й квартал, 21",
    time: "09:00-03:00",
    phone: "",
    orient: "Медиа парк",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.05818024488!2d69.20033381851457!3d41.285838222685854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31d4186d05%3A0x4cd8244d2671d50c!2zNjAsIDUgUWF0YXJ0b2wga28nY2hhc2ksINCi0L7RiNC60LXQvdGCIDEwMDA5NywgVXpiZWtpc3Rhbg!5e0!3m2!1sen!2s!4v1669139093400!5m2!1sen!2s"
    },
      {id: 4,
    name: "MAX WAY MINOR",
    adress: "MaxWay",
    time: "09:00-03:00",
    phone: "",
    orient: "бывший кинотеатр Казахстан",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.05818024488!2d69.20033381851457!3d41.285838222685854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31d4186d05%3A0x4cd8244d2671d50c!2zNjAsIDUgUWF0YXJ0b2wga28nY2hhc2ksINCi0L7RiNC60LXQvdGCIDEwMDA5NywgVXpiZWtpc3Rhbg!5e0!3m2!1sen!2s!4v1669139093400!5m2!1sen!2s"
    },
      {id: 5,
    name: "MAX WAY MAKSIM GORKIY",
    adress: "3-й квартал, 21",
    time: "09:00-03:00",
    phone: "",
    orient: "Медиа парк",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.05818024488!2d69.20033381851457!3d41.285838222685854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31d4186d05%3A0x4cd8244d2671d50c!2zNjAsIDUgUWF0YXJ0b2wga28nY2hhc2ksINCi0L7RiNC60LXQvdGCIDEwMDA5NywgVXpiZWtpc3Rhbg!5e0!3m2!1sen!2s!4v1669139093400!5m2!1sen!2s"
    },
    {id: 6,
    name: "MAX WAY NEXT",
    adress: "улица Бабура, 6",
    time: "10:00-21:00",
    phone: "",
    orient: "Некст",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.05818024488!2d69.20033381851457!3d41.285838222685854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31d4186d05%3A0x4cd8244d2671d50c!2zNjAsIDUgUWF0YXJ0b2wga28nY2hhc2ksINCi0L7RiNC60LXQvdGCIDEwMDA5NywgVXpiZWtpc3Rhbg!5e0!3m2!1sen!2s!4v1669139093400!5m2!1sen!2s"
    },
]

let currentData = {
}


switch (Number(myParam)) {
    case 1:
        currentData = arrData[0]
        break;
    case 2:
        currentData = arrData[1]
        break;
    case 3:
        currentData = arrData[2]
        break;
    case 4: 
        currentData = arrData[3]
        break;
    case 5:
        currentData = arrData[5]
        break;
    default:
        break;
}

console.log(currentData)

const container = document.querySelector('.main');

container.innerHTML = `<div class="box">
<div>
    <h2>${currentData.name}</h2>
    <div class="container_adress">
    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
            </path>
        </svg>
        <p>Адрес:</p>
        <p>${currentData.adress}</p>
    </div>

    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
        <p>Часы работы:</p>
        <p>${currentData.time}</p>
    </div>

    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
        <p>Номер телефона:</p>
        <p>${currentData.phone}</p>
    </div>

    <div class="info">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path></svg>
        <p>Ориентир:</p>
        <p>${currentData.orient}</p>
        </div>
    </div>    
    <img class="image_way" src="https://maxway.uz/images/Rectangle/max-way.png" alt="">
</div>
<div class="map">
    <iframe src="${currentData.iframe}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>`;