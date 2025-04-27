export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const disableScroll = (value) => {
    var $body = document.body,
        withScroll = window.innerWidth - document.documentElement.clientWidth,
        $objLockOffsetRight = document.querySelector("#js-init-sticky");

	if(!$objLockOffsetRight) return;

    value ? scrollOn() : scrollOff();

    function scrollOn(){
        disableScroll();
        $body.classList.add("disable__scroll");
        $body.style.paddingRight = withScroll + 'px';
        if($objLockOffsetRight.classList.contains('sticky-header')){
            $objLockOffsetRight.style.paddingRight = withScroll + 'px';
        }
    };
    function scrollOff(){
        enableScroll();
        $body.classList.remove("disable__scroll");
        $body.removeAttribute("style");
        $objLockOffsetRight.removeAttribute("style");
    };
    function preventDefault(e){
		e.preventDefault();
	};
    function disableScroll(){
		if($body) $body.addEventListener('onMouseUp', preventDefault, { passive: false })
	};
	function enableScroll(){
		if($body) $body.removeEventListener('onMouseUp', preventDefault, { passive: false });

	};
};
export const initCustomScroll = (anchorPoint) => {
	if(!anchorPoint) return;
	var pointInitScroll = anchorPoint,
		pointHeight = pointInitScroll.clientHeight,
		viewportHeight = window.innerHeight;

	if(viewportHeight <= (pointHeight + 140)){
		pointInitScroll.classList.add('fixed_height');
	};

    new PerfectScrollbar(anchorPoint, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
    });
};
export const scrollTop = () => {
    var btnTop = document.getElementById('js-backtotop');
	if(!btnTop) return;
	window.addEventListener('scroll', showBtn);
	btnTop.addEventListener('click', scrollTop);
	function showBtn(){
		var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		bodyScrollTop > 1000 ? btnTop.classList.add('tt-show') : btnTop.classList.remove('tt-show');
	};
	function scrollTop(){
		if(!window.pageYOffset > 0) return;
		window.scrollTo({top: 0, behavior: 'smooth'});
	};
};
export const priceFormatting = (value) => {
	return new Intl.NumberFormat('en-Us', { style: 'currency', currency: 'USD' }).format(value)
}
/*
	Menu Mobile
*/
export const menuMobile = () => {
    var objMenu = document.getElementById("jsMobileMenu"),
		objMenuNav =  objMenu.querySelector("nav"),
		objMenuHeight = objMenu.offsetHeight;

	if(!objMenu) return false;
	Array.prototype.slice.call(objMenu.querySelectorAll('li')).forEach(function(itemUl){
		checkActiveMenu();
		var obj = itemUl.querySelectorAll('ul').length;
		if(obj > 0){
			itemUl.classList.add('has-submenu');
			itemUl.insertAdjacentHTML('afterbegin', `<div class="link__openSubmenu"></div>`)
		};
	});
	Array.prototype.slice.call(objMenu.querySelectorAll('nav > ul > li')).forEach(function(itemUl){
		if(itemUl.classList.contains('has-submenu')){
			itemUl.classList.add('top-level');
		};
	});
	function removeParent(){
		let rootLi = objMenu.querySelectorAll('.has-submenu .is-active');
		rootLi?.forEach(item => {
			item.classList.remove('itemParentActive')
		})
	};
	function checkActiveMenu(){
		removeParent();
		Array.prototype.slice.call(objMenu.querySelectorAll('.is-active')).forEach(function(itemActive){
			let obj = itemActive.closest(".has-submenu");
			obj?.classList.add('itemParentActive');
			let obj2 = itemActive.closest(".top-level");
			obj2?.classList.add('itemParentActive');
		});
	};
	checkActiveMenu();
	objMenu.addEventListener('click', function(e){
		checkActiveMenu();
		if(e.target && e.target.classList.contains('link__openSubmenu')) showSubmenu(e.target);
		if(e.target && e.target.classList.contains('mobileMenu__back')) stepBack();
	});
	function showSubmenu($target){
		$target.parentNode.classList.add('active');
		setHeight($target);
		var getValueLeft = objMenuNav.style.left || 0,
			setNewValue = parseInt(getValueLeft) - 100;

		objMenuNav.style.left=setNewValue + "%";
		if(!objMenu.classList.contains('submenuVisible')){
			objMenu.classList.add('submenuVisible');
		};
	};
	function setHeight($target){
		console.log('setHeight');
		$target.parentNode.classList.add('active');
		var objMenuHeightNew = $target.parentNode.querySelector("ul").offsetHeight;
		if(objMenuHeight < objMenuHeightNew){
			objMenu.style.minHeight = objMenuHeightNew + 40 + 'px';
		}
	};
	function stepBack(){
		var getValueLeft = objMenuNav.style.left || 0,
			setNewValue = parseInt(getValueLeft) + 100;

		objMenuNav.style.left=setNewValue + "%";
		if(setNewValue == 0){
			objMenu.classList.remove('submenuVisible');
			document.querySelectorAll('#js-mobile-menu li').forEach(function(item){
				if(item.classList.contains('active')) {
					item.classList.remove('active');
				};
			});
		};
		var actives = Array.prototype.slice.call(objMenu.querySelectorAll('li.active'));
		var lastActive = actives[(actives.length - 1)] || false;
		if(lastActive){
			lastActive.classList.remove('active');
		}
		objMenu.style.minHeight = objMenuHeight + 'px';
	};
};
/*
	Сart Value Calculation
*/
export const cartTotalPriceAll = (data) => {
	if(!data) return;
	return Array.isArray(data)
		? data.reduce((accum,item) => accum + (item.price * item.count), 0)
		: 0;
};
export const cartTotalPriceItem = (count, price) => {
	if(!count && !price) return;
	return count * price;
};
/*
	Сart Handle Pay
*/
export const handlePay = async (cartItems) => {
	const res = await fetch('/api/checkout', {
		method: "POST",
		body: JSON.stringify(cartItems),
		headers: {
			"Content-Type": "application/json"
		}
	});
	const session = await res.json();
	window.location = session.url;
};