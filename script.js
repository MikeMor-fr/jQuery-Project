$(document).ready(function() {

	let $mainMenuItems = $("#main-menu ul").children("li");
	let totalMainMenuItems = $mainMenuItems.length;
	let openedIndex = 2;

	const animateItem = ($item, toOpen, speed) => {
		let $colorImage = $item.find(".color");
		itemParam = toOpen ? {width: "420px"} : {width: "140px"}
		colorImageParam = toOpen ? {left: "0px"} : {left: "140px"}
		$colorImage.animate(colorImageParam, speed);
		$item.animate(itemParam, speed);
	};

	const checkAndAnimateItem = (indexToCheck) => {
		if(openedIndex === indexToCheck) {
				animateItem($mainMenuItems.eq(indexToCheck), false, 250);
				openedIndex = -1;
		} 
		else {
			if(validIndex(indexToCheck)) {
				animateItem($mainMenuItems.eq(openedIndex), false, 250);
				openedIndex = indexToCheck;
				animateItem($mainMenuItems.eq(indexToCheck), true, 250);
			}
		}
	}

	const validIndex = (indexToCheck) => {
		return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
	}

	const init = () => {
		$mainMenuItems.children(".images").click(function() {
			let newIndex = $(this).parent().index();
			let $item = $mainMenuItems.eq(newIndex);
			checkAndAnimateItem(newIndex);
		});

		if(validIndex(openedIndex)) {
			animateItem($mainMenuItems.eq(openedIndex), true, 700)
		};

		$(".button").click(function() {
			let newIndex = $(this).index();
			checkAndAnimateItem(newIndex);
		})
	};

	init();

});