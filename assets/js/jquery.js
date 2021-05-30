// $('#hide').click(function (e) {
//     e.preventDefault();
//     $('.hideable').hide(2000, () => {
//         alert('siz paneli baghladiniz');
//     });
// });

// $('#show').click(function (e) {
//     e.preventDefault();
//     // 600ms - slow
//     // 200ms - fast
//     $('.hideable').show(1000, () => {
//         alert('siz paneli gordunuz');
//     });
// });
const element = $('.fadeable');

$('.fade-in').on('click', () => {
    element.fadeIn();
});


$('.fade-out').on('click', () => {
    element.fadeOut();
});

$('.fade-toggle').on('click', () => {
    element.fadeToggle(1000);
})

$('.fade-to').on('click', (e) => {
    e.preventDefault();
    element.fadeTo(1000, 1);
});

$('.slide-toggle').on('click', () => {
    element.slideToggle(1000);
});

$('.animate').on('click', function () {
    element.animate({ left: '200px' }, 3000);
});

$('.stop').on('click', function () {
    element.stop();
});

// $('.change-element').on('click', function () {
//     element.css('background-color', 'red').slideUp(2000).slideDown(2000).fadeOut(1000).fadeIn(1000)
// });

$('.change-element').on('click', () => {
    $('.paragraph').html('<button class="button">Click me</button>');
    $('<button class="button">Click me</button>').appendTo($('.hello'));
    // $('.paragraph').html();
});

// const element = document.createElement('button');

$('#link-element').attr({
    'href': 'fb.com',
    'id': 'link-element-2',
    class: 'class'
});

$('.button').innerHeight

