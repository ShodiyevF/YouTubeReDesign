// BISMILLAH

var videos = {
    video1: {
        img: `/img/1.jpg`,
        later: '',
        time: 4.15,
        title: 'A Brief History Of Creation',
        views: 80000,
        day: 3,
        creator: 'Dollie Blair'
    },
    video2: {
        img: `/img/2.jpg`,
        later: '',
        time: 8.00,
        title: 'Selecting The Right Hotel',
        views: 123000,
        day: 30,
        creator: 'Dollie Blair'
    },
    video3: {
        img: `/img/3.jpg`,
        later: '',
        time: 5.32,
        title: 'Asteroids',
        views: 43000,
        day: 12,
        creator: 'Dollie Blair'
    },
    video4: {
        img: `/img/4.jpg`,
        later: '',
        time: 6.40,
        title: 'Telescopes 101',
        views: 11000,
        day: 180,
        creator: 'Dollie Blair'
    },
    video5: {
        img: `/img/5.jpg`,
        later: '',
        time: 1.45,
        title: 'Medical Care Is Just',
        views: 18000,
        day: 2,
        creator: 'Dollie Blair'
    },
    video6: {
        img: `/img/6.jpg`,
        later: '',
        time: 2.12,
        title: 'Moon Gazing',
        views: 67000,
        day: 120,
        creator: 'Dollie Blair'
    },
    video7: {
        img: `/img/7.jpg`,
        later: '',
        time: 3.40,
        title: 'Dude You Re Getting A Telescope',
        views: 34000,
        day: 150,
        creator: 'Gussie French'
    },
    video8: {
        img: `/img/8.jpg`,
        later: '',
        time: 2.12,
        title: 'Moon Gazing',
        views: 54000,
        day: 330,
        creator: 'Edward Osborne'
    },
    video9: {
        img: `/img/9.jpg`,
        later: '',
        time: 2.12,
        title: 'Moon Gazing',
        views: 125000,
        day: 120,
        creator: 'Dollie Blair'
    },
    video10: {
        img: `/img/10.jpg`,
        later: '',
        time: 7.36,
        title: 'Astronomy Or Astrology',
        views: 240000,
        day: 120,
        creator: 'Food & Drink'
    },
    video11: {
        img: `/img/11.jpg`,
        later: '',
        time: 2.19,
        title: 'Advertising Outdoors',
        views: 13000,
        day: 15,
        creator: 'Food & Drink'
    },
    video12: {
        img: `/img/12.jpg`,
        later: '',
        time: 9.05,
        title: 'Radio Astronomy',
        views: 1000,
        day: 330,
        creator: 'Food & Drink'
    },
    video13: {
        img: `/img/3.jpg`,
        later: '',
        time: 3.40,
        title: 'A Good Autoresponder',
        views: 45000,
        day: 60,
        creator: 'Food & Drink'
    },
    video14: {
        img: `/img/14.jpg`,
        later: '',
        time: 1.56,
        title: 'Baby Monitor Technology',
        views: 86000,
        day: 7,
        creator: 'Food & Drink'
    },
    video15: {
        img: `/img/15.jpg`,
        later: '',
        time: 4.15,
        title: 'Asteroids',
        views: 123000,
        day: 120,
        creator: 'Food & Drink'
    },
}

var elOneVideoList = document.querySelector('.js-one-right-videos__list')
var elTwoVideoList = document.querySelector('.js-two-right-videos__list')
var elLastVideoList = document.querySelector('.js-last-right-videos__list')


var elListItem = document.createElement('li');
var link = document.createElement('a')

var div1 = document.createElement('div');
div1.classList.add('right-videos__img-wrappper');

var img = document.createElement('img');
img.classList.add('right-videos__img');

var span = document.createElement('span');
span.classList.add('right-videos__time');

var h3 = document.createElement('h3');
h3.classList.add('right-videos__title');

var div2 = document.createElement('div');
div2.classList.add('right-videos__wrapper');

var p1 = document.createElement('p');
p1.classList.add('right-videos__view');

var p2 = document.createElement('p');
p2.classList.add('right-videos__dayago');

var p3 = document.createElement('p');
p3.classList.add('right-videos__channel');

div1.appendChild(img);
div1.appendChild(span);
div2.appendChild(p1);
div2.appendChild(p2);
div2.appendChild(p3);
link.appendChild(div1);
link.appendChild(h3)
link.appendChild(div2);

elListItem.appendChild(link);