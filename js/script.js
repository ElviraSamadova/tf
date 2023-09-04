
// BURGER MENU
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('b-menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

$('.center-s').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,

  responsive: [
   {
     breakpoint: 992,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 768,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
    ]
});



// multilanguage
const langArr = {
  h1: {
    en: 'Try an Unusual Holiday in Ismayilli',
    az: 'İsmayıllıda unudulmaz tətil keçirin'
  },

  p: {
    en: ' Unique A-Frame Houses',
    az: 'Unikal A-Frame Evlər'
  },

  nav1: {
    en: 'Cottages',
    az: 'Kotteclər'
  },

  nav2: {
    en: 'Restaurant',
    az: 'Restoran'
  },

  nav4: {
    en: ' Why We?',
    az: 'Niyə Biz?'
  },

  nav5: {
    en: 'Location',
    az: 'Ünvan'
  },

  nav6: {
    en: 'Gallery',
    az: 'Qalereya'
  },

  expbtn:{
    en: 'Explore cottages',
    az: 'Kottecləri kəşf et'
  },

  bm1: {
    en: 'Cottages',
    az: 'Kotteclər'
  },

  bm2: {
    en: 'Restaurant',
    az: 'Restoran'
  },

  bm4: {
    en: ' Why We?',
    az: 'Niyə Biz?'
  },

  bm3: {
    en: 'Location',
    az: 'Ünvan'
  },

  bm5: {
    en: 'Gallery',
    az: 'Qalereya'
  },
 
  // section 2
  navc: {
    en: 'Cottages',
    az: 'Kotteclər'
  },

  london:{
    en: '"London" cottage',
    az: '"London" kotteci'
  },

  l1:{
    en: 'three floors',
    az: 'üç mərtəbə'
  },

  l2:{
    en: 'two double beds',
    az: 'iki nəfərlik çarpayı'
  },

  l3:{
    en: 'sofa',
    az: 'divan'
  },

  l4:{
    en: 'balcony',
    az: 'balkon'
  },

  l5:{
    en: 'personal pool',
    az: 'şəxsi hovuz'
  },

  l6:{
    en: 'terrace',
    az: 'terras'
  },

  oslo:{
    en: '"Oslo" cottage',
    az: '"Oslo" kotteci'
  },
  
  o1:{
    en: 'three floors',
    az: 'üç mərtəbə'
  },

  o2:{
    en: 'two single beds',
    az: 'iki tək çarpayı'
  },

  o3:{
    en: 'sofa',
    az: 'divan'
  },

  o4:{
    en: 'one double bed',
    az: 'bir cüt çarpayı'
  },


  o5:{
    en: 'balcony',
    az: 'balkon'
  },

  o6:{
    en: 'terrace',
    az: 'terras'
  },

  syd:{
    en: '"Sydney" cottage',
    az: '"Sidney" kotteci'
  },

  syd1:{
    en: 'two floors',
    az: 'iki mərtəbə'
  },

  syd2:{
    en: 'two double beds',
    az: 'iki nəfərlik çarpayı'
  },

  syd3:{
    en: 'sofa',
    az: 'divan'
  },

  syd4:{
    en: 'balcony',
    az: 'balkon'
  },

  syd5:{
    en: 'terrace',
    az: 'terras'
  },

  tokio:{
    en: '"Tokio" cottage',
    az: '"Tokio" kotteci'
  },

  t1:{
    en: 'two floors',
    az: 'iki mərtəbə'
  },

  t2:{
    en: 'two double beds',
    az: 'iki nəfərlik çarpayı'
  },

  t3:{
    en: 'sofa',
    az: 'divan'
  },

  t4:{
    en: 'balcony',
    az: 'balkon'
  },

  t5:{
    en: 'terrace',
    az: 'terras'
  },

  sing:{
    en: '"Singapore" cottage',
    az: '"Sinqapur" kotteci'
  },

  sin1:{
    en: 'two floors',
    az: 'iki mərtəbə'
  },

  sin2:{
    en: 'two double beds',
    az: 'iki nəfərlik çarpayı'
  },

  sin3:{
    en: 'sofa',
    az: 'divan'
  },

  sin4:{
    en: 'terrace',
    az: 'terras'
  },

  monako:{
    en: '"Monako" cottage',
    az: '"Monako" kotteci'
  },

  mon1:{
    en: 'two floors',
    az: 'iki mərtəbə'
  },

  mon2:{
    en: 'two double beds',
    az: 'iki nəfərlik çarpayı'
  },

  mon3:{
    en: 'sofa',
    az: 'divan'
  },

  mon4:{
    en: 'terrace',
    az: 'terras'
  },


  rome: {
    en: '"Rome" cottage',
    az: '"Roma" kotteci'
  },

  r1:{
    en: 'three floors',
    az: 'üç mərtəbə'
  },

  r2:{
    en: 'two double beds',
    az: 'iki nəfərlik çarpayı'
  },

  r3:{
    en: 'sofa',
    az: 'divan'
  },

  r4:{
    en: 'terrace',
    az: 'terras'
  },


  mexico: {
    en: '"Mexico" cottage',
    az: '"Mexiko" kotteci'
  },

  mex1:{
    en: 'three floors',
    az: 'üç mərtəbə'
  },

  mex2:{
    en: 'two double beds',
    az: 'iki nəfərlik çarpayı'
  },

  mex3:{
    en: 'sofa',
    az: 'divan'
  },

  mex4:{
    en: 'balcony',
    az: 'balkon'
  },

  mex5:{
    en: 'personal pool',
    az: 'şəxsi hovuz'
  },

  mex6:{
    en: 'terrace',
    az: 'terras'
  },

  // section 3
  br1: {
    en: 'Prices starting from 145 azn',
    az: 'Qiymətlər 145 azn-dən başlayır'
  },

  br2: {
    en: 'Free breakfast for 4 persons',
    az: '4 nəfər üçün pulsuz səhər yeməyi'
  },

  br3: {
    en: 'Free accommodation for children under 5 years old',
    az: '5 yaşa qədər uşaqlar üçün pulsuz yerləşdirmə'
  },

  //section4

  why: {
    en: 'Why we?',
    az: 'Niyə biz?'
  },

  adv1: {
    en: 'exciting views',
    az: 'gözəl mənzərələr'
  },

  adv2: {
    en: 'free parking',
    az: 'pulsuz parkinq'
  },

  adv3: {
    en: 'outdoor breakfast',
    az: 'açıq havada səhər yeməyi'
  },

  adv4: {
    en: "kids' zone",
    az: 'uşaq oyun zonası'
  },

  adv5: {
    en: 'personal pool',
    az: 'şəxsi hovuz'
  },

  adv6: {
    en: 'bath accesioraries',
    az: 'hamam ləvazimatları'
  },

  adv7: {
    en: 'air conditioner',
    az: 'kondisioner'
  },

  adv8: {
    en: 'panoramic windows',
    az: 'panoramik pəncərələr'
  },

  //section 5
  qal: {
    en: 'Gallery',
    az: 'Qalereya'
  },

  //section 6
  wte: {
    en: 'Where To Eat',
    az: 'Restoran'
  },

  rest:{
    en: 'TopchuForest is a charming restaurant nestled amidst nature in Ismayilli. We take pride in serving delicious dishes made from locally-sourced, eco-friendly ingredients. Visit us and immerse yourself in the serene beauty of Topchuforest while enjoying a delightful meal.',
    az: 'TopçuForest İsmayıllıda təbiət qoynunda yerləşən füsunkar restorandır. Biz yerli mənbəli, ekoloji cəhətdən təmiz inqrediyentlərdən hazırlanmış ləzzətli yeməkləri təqdim etməkdən qürur duyuruq. Bizi ziyarət edin və ləzzətli yeməkdən həzz alaraq özünüzü Topçu meşəsinin sakit gözəlliyinə qərq edin.'
  },

  menu: {
    en: 'Download Menu',
    az: 'Menyunu yükləyin'
  },

  //section7
  loc: {
    en: 'Topchu village, Ismayilli-Gabala Road',
    az: 'Topçu kəndi, İsmayıllı-Qəbələ yolu'
  },

  clock: {
    en: ' Open 24/7',
    az: '24/7 açıq'
  },

  //footer
  con: {
    en: 'Contacts',
    az: 'Əlaqə'
  },

  ft1: {
    en: 'Cottages',
    az: 'Kotteclər'
  },

  ft2: {
    en: 'Restaurant',
    az: 'Restoranlar'
  },

  ft3: {
    en: 'Why we?',
    az: 'Niyə biz?'
  },

  rights: {
    en: ' © 2023 TopchuForest. All rights reserved.',
    az: '© 2023 TopchuForest. Bütün hüquqlar qorunur.'
  },

};

document
  .querySelectorAll('.lang button')
  .forEach((b) => b.addEventListener('click', setLang));

function setLang() {
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][this.value];
    }
  }
}


// SCROLL TO TOP 
var scrollElem = document.getElementById("scrollToTop");
window.onscroll = function() {
        if(this.scrollY>400){
            scrollElem.classList.add("active-elem")
        }
        else{
            scrollElem.classList.remove("active-elem")
        }
    }

scrollElem.onclick=function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




