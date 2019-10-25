let Objects = [
    {
        img:'https://www.shopskibluemt.com/content/images/thumbs/0000188_downhill-mountain-biking-protection-package_625.jpeg',
        title: 'Downhill Mountain Biking - Protection Package',
        paragrafo: 'Helmet and body armor - Included with bike rental., $50 deposit for helmet & pads, refund upon return.'
    },
    {
        img: 'https://cdn.getyourguide.com/img/tour_img-1183577-146.jpg',
        title: 'Mountain Bike Ride',
        paragrafo: 'Ride some of the longest and most extreme, downhill tracks in South East Asia. Experience the thrill and beauty of downhill mountain biking in this ...'
    },
    {
        img: 'http://www.difusorasjn.com.br/97.3fm/wp-content/uploads/2019/03/downhill2.jpg',
        title: 'Downhill é ...',
        paragrafo: 'descer montanha abaixo como se não houvesse amanhã'
    },
    {
        img: 'https://www.thegap.ie/wp-content/uploads/2019/09/GravityBC_@avdlphoto-145d-510x339.jpg',
        title: 'The GAP Downhill League',
        paragrafo: 'Cycling Ireland rules apply. No U12 All first time riders must complete a waiver'
    }
]

let img = document.querySelector('.main-photo')
let title = document.querySelector('.main-title')
let text = document.querySelector('.text')
let counter = 0;

function right() {
    if (counter < 3) {
        counter++
        img.setAttribute('src', Objects[counter].img)
        title.innerHTML = Objects[counter].title
        text.innerHTML = Objects[counter].paragrafo
    }
    else {
        counter = 0
        img.setAttribute('src', Objects[counter].img)
        title.innerHTML = Objects[counter].title
        text.innerHTML = Objects[counter].paragrafo
    }
}

function left() {
    if (counter > 0) {
        counter--
        img.setAttribute('src', Objects[counter].img)
        title.innerHTML = Objects[counter].title
        text.innerHTML = Objects[counter].paragrafo
    }
    else {
        counter = 3
        img.setAttribute('src', Objects[counter].img)
        title.innerHTML = Objects[counter].title
        text.innerHTML = Objects[counter].paragrafo
    }
}