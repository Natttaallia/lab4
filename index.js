$(function () {
  $('[data-toggle="popover"]').popover()
});

//смена цвета
$(".changecolor").on("click", ()=>{
	 if($(".colortochange").css("background-color")== "rgb(30, 15, 28)")
	$(".colortochange").css("background-color","rgb(51, 69, 0)");
else
	$(".colortochange").css("background-color","rgb(30, 15, 28)");
$('.MyModal').trigger('colorChange');
});


//модальное окно
$('.MyModal').on("colorChange",()=>{
$('.MyModal').show('slow');
});
$('.MyClose').on("click",()=>{
$('.MyModal').hide('slow');
});


// let data=[{question:"КАК МОЖНО ПЕРЕДАТЬ ЖИВОТНОЕ В ПРИЮТ?",answer:"Приют не место для животного. Тут они не чувствуют себя единственными любимыми, живут друг у друга на головах. Мы физически не в состоянии уделить им столько внимания, сколько они заслуживают.Приведя его в приют, Вы просто сбросите ответственность с себя на нас. Это не сделает Вас хорошим человеком, скорее хитрым.Если жалко бездомное животное, но нет возможности самим лично этим заниматься, возможно Вам придётся просто пройти мимо."},
// {question:"БЕЗОПАСНО ЛИ БРАТЬ ЖИВОТНОЕ ИЗ ПРИЮТА? БОЛЬНЫЕ, СТАРЫЕ…",answer:"Больные животные, или животные недостаточно подготовленные морально не предлагаются потенциальным хозяевам. Существует миф, что нужно брать исключительно котят и щенят, а иначе Вы не сможете их воспитать и наладить контакт. Это непрада. Во-первых, 1-2-3-4-5годовалое животное не старое, оно молодое. Впереди ещё лет 10 жизни. Во-вторых, взяв подрощенного кота или собаку, Вы сразу сможете наслаждаться Вашими отношениями. Не придётся приучать к горшку\выгулу и мыть полы от мочи по 15 раз в день, учить хорошим манерам, не будет бессонных ночей, потому что малыши ооочень активны ночью и т.д. Детский возраст безусловно интересен и прекрасен, но если у Вас реально не так много времени с этим детством справляться, то Вам нужен готовый, подрощенный, воспитанный член семьи."},
// {question:"ЧТО ТАКОЕ РЕГИСТРАЦИЯ ДОМАШНИХ ЖИВОТНЫХ И ДЛЯ ЧЕГО ОНА НУЖНА?",answer:"Регистрация даст возможность привлечь нарушителя к административной или уголовной ответственности. Например, в *** районе был покусан человек собакой породы ***. По базе данных выявляем количество проживающих собак этой породы в указанном районе и определяем владельца — нарушителя. Согласно ст.1187 Гражданского Кодекса Украины собаки, как и автотранспорт, являются источником повышенной опасности. Поэтому, они, как и машины, должны стоять на учете. Ежегодно теряются тысячи собак и кошек, до настоящего времени в городе не было единого реестра животных. Людям, нашедшим потерявшееся животное, некуда было обратиться. Регистрация же дает возможность быстро вернуть хозяину его питомца. Например, найдена собака с жетоном на шее (на жетоне нанесен номер животного). По звонку в КП «Центр обращения с животными» нашедший потеряшку может определить владельца собаки."},
// {question:"ДЕЙСТВИТЕЛЬНО ЛИ СТЕРИЛИЗАЦИЯ – ЛУЧШИЙ СПОСОБ РЕШИТЬ ПРОБЛЕМУ БЕЗДОМНЫХ ЖИВОТНЫХ?",answer:"Стерилизация – эффективный способ регулирования численности бездомных животных. Это сравнительно гуманный и простой метод, ведь практически в каждом городе можно найти ветеринара, который сможет стерилизовать животное.Но нужно учитывать, что сама по себе стерилизация не решает проблему бездомных животных. Довольно большая часть бродячих – это выброшенные или потерянные домашние любимцы. К тому же стерилизация – дорогое мероприятие. Операция для одного бездомного животного (включая медикаменты и передержку) обойдется в среднем в 1500 грн."},
// {question:"КТО В УКРАИНЕ РАБОТАЕТ В ЭТОЙ СФЕРЕ – ВСЕ ТЯНУТ ТОЛЬКО ВОЛОНТЕРЫ ИЛИ ЕСТЬ ГОСУДАРСТВЕННЫЕ ИНИЦИАТИВЫ?",answer:"Понятно, что, когда в стране идет война и очень много людей нуждаются в помощи, бездомные животные для государства уходят на второй план. Поэтому волонтеры сегодня – движущая сила в решении этой проблемы. Каждый день к нам пишут и звонят совершенно разные люди и предлагают свою помощь. Кто-то жертвует деньги, кто-то помогает в приютах, а у кого-то полным-полно полезных идей. Это огромная волна добра и поддержки. Что касается помощи государства, то важным шагом было ратифицирование Верховной Радой Европейской конвенции о защите домашних животных. Для зоозащитников это стало знаковым событием."},
// {question:"КТО БЕРЕТ ЖИВОТНЫХ ИЗ ПРИЮТА?",answer:"Преимущественно собачек из приютов берут женщины 30-50 лет и люди, которые живут в частных домах. Кому-то из них нужен друг, кому-то охранник, но чаще и то, и другое одновременно. Впрочем, в приюты приходят совершенно разные люди: студенты и пенсионеры, госслужащие и бизнесмены. Как-то одну из наших собачек забрал бывший посол Чехии в Украине."}];


// let jsonData=JSON.stringify(data);
// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
// download(jsonData, 'data.json', 'text/plain');

const URL="data.json";

let questions=[];

$.ajax({ 
	  url: URL,
	  dataType : "json",
	  success: function(data){
	  	// console.log(data[0].question);

	  	let context=`
  <div class="col-12 col-md-6 ">	  	
	  	<ul class='list-unstyled'>
  <li class='media'>
    <img class='mr-3' src='img/person.png' alt='Generic placeholder image'>
    <div class='media-body'>
      <h5 class='mt-0 mb-1 text-uppercase'>${data[0].question}<span class='badge badge-secondary'>New</span></h5>
		${data[0].answer}
    </div>
  </li>
  <li class='media my-4'>
    <img class='mr-3' src='img/person2.png' alt='Generic placeholder image'>
    <div class='media-body'>
      <h5 class='mt-0 mb-1 text-uppercase'>${data[1].question}</h5>
		${data[1].answer}
    </div>
  </li>
  <li class='media'>
    <img class='mr-3' src='img/person4.png' alt='Generic placeholder image'>
    <div class='media-body'>
      <h5 class='mt-0 mb-1 text-uppercase'>${data[2].question}</h5>
      ${data[2].answer}
    </div>
  </li>
</ul>
  </div>
<div class='col-12 col-md-6'>
<ul class='list-unstyled'>
  <li class='media'>
    <img class='mr-3' src='img/person3.png' alt='Generic placeholder image'>
    <div class='media-body'>
      <h5 class='mt-0 mb-1 text-uppercase'>${data[3].question}<span class='badge badge-secondary'>New</span></h5>
      ${data[3].answer}
    </div>
  </li>
  <li class='media my-4'>
    <img class='mr-3' src='img/person.png' alt='Generic placeholder image'>
    <div class='media-body'>
      <h5 class='mt-0 mb-1 text-uppercase'>${data[4].question}</h5>
      ${data[4].answer}
    </div>
  </li>
  <li class='media'>
    <img class='mr-3' src='img/person2.png' alt='Generic placeholder image'>
    <div class='media-body'>
      <h5 class='mt-0 mb-1 text-uppercase'>${data[5].question}</h5>
  ${data[5].answer}
     </div>
  </li>
</ul>`;
	  	$('.insertJQuery').html(context);
	  }

});
$(document).ready(function(){
  $('.slick-slider').slick({
  infinite: true,
    speed: 350,
// определяем скорость перелистывания
  slidesToShow: 2,
  //количество слайдов, которые выводятся на экране
  slidesToScroll: 2
  //количество слайдов, которые перелистываются за один раз
});
});