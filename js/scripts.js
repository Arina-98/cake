const countryNames = ['Калифорния', 'Южная Дакота', 'Техас', 'Мичиган', 'Флорида']
const countryText = ['Посещение Калифорнии было незабываемым. Я насладился красотами пляжей Лос-Анджелеса, впечатлился мощью скал Йосемити и ощутил неповторимую атмосферу Сан-Франциско. Этот штат поразил меня своим разнообразием и красотой,и я обязательно хочу вернуться сюда снова.',
'Посещение Южной Дакоты оказалось удивительным опытом. Я была впечатлена ее красивыми природными пейзажами, особенно в Национальном парке Бэдлендс. Обязательно стоит посетить этот замечательный штат, чтобы насладиться его уникальными достопримечательностями.',
'Мое посещение Техаса было незабываемым. Я была поражена разнообразием этого штата, начиная от духа аутентичности Остина и веселья Сан-Антонио, до современности и культурного наследия Далласа. Путешествие по Техасу открыло для меня удивительные природные красоты, исторические места и богатую культурную сцену.',
'Мое посещение Мичигана было восхитительным. От красоты озера Мичиган и исторических достопримечательностей в Детройте до прогулок по островному раю Макинак - каждый момент в этом штате оставил яркое впечатление.',
'Флорида поразила меня своими изумительными видами и приветливыми жителями. Незабываемые впечатления остались от поездок на воздушных кувырках по болотам и наблюдения за живописными закатами на побережье.']
const countryImages = ['slCalifornia', 'slSouthdakota', 'slTexas', 'slMichigan', 'slFlorida']

function set_window(id, value) 
{
	let window = document.getElementById(id);
	if (value == true) {
		document.body.style.overflow = 'hidden';
		window.classList.add('visible');
	}
	else {
		document.body.style = null;
		window.classList.remove('visible');
	}
}

function set_payment() 
{
	alert('Спасибо за оплату!')
}

function setCountryInfo(index)
{
	var name = document.getElementById('country-name');
	name.innerText = countryNames[index];

	var description = document.getElementById('country-description');
	description.innerText = countryText[index];

	for (let i = 1; i < 5; i++) 
	{
		var img = document.getElementById('slider-img-' + i);
		img.style.backgroundImage="url(images/" + countryImages[index] + i + ".png)";
	}

	set_window('window-country',true);
}