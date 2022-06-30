alert('Hey! Let me also enjoy the Eid!🐮');
onload = () => {
	/* 	Swal.fire({
		title: 'Eid Mubarak!',
		text: 'Hey! Let me also enjoy the Eid!🐮',
		confirmButtonText: 'Why not?'
	}); */

	

	const eidWish = document.querySelector('#eid-wish');

	const happyButton = document.querySelector('#happy-button');
	const extremelyHappyButton = document.querySelector(
		'#extremely-happy-button'
	);
	const longMoo = document.querySelector('#long-moo');
	const shortMoo = document.querySelector('#short-moo');

	const headNormal = document.querySelector('#HeadNormal');
	const mouthOpen = document.querySelector('#MouthOpen');
	const mouthOpenShrunk = document.querySelector('#MouthOpenShrunk');

	const topTail = document.querySelector('#TopTail');
	const middleTail = document.querySelector('#MiddleTail');
	const bottomTail = document.querySelector('#BottomTail');

	const hideHead = () => (headNormal.style.display = 'none');
	const showHead = () => (headNormal.style.display = 'block');
	const hideOpenMouth = () => (mouthOpen.style.display = 'none');
	const showOpenMouth = () => (mouthOpen.style.display = 'block');
	const hideMouthOpenShrunk = () => (mouthOpenShrunk.style.display = 'none');
	const showMouthOpenShrunk = () => (mouthOpenShrunk.style.display = 'block');

	const hideTopTail = () => (topTail.style.display = 'none');
	const showTopTail = () => (topTail.style.display = 'block');
	const hideMiddleTail = () => (middleTail.style.display = 'none');
	const showMiddleTail = () => (middleTail.style.display = 'block');
	const hideBottomTail = () => (bottomTail.style.display = 'none');
	const showBottomTail = () => (bottomTail.style.display = 'block');

	const showMessage = () => {
		eidWish.style.color = 'steelblue';
	};

	const normalState = () => {
		showHead();
		hideOpenMouth();
		hideMouthOpenShrunk();
		hideTopTail();
		hideMiddleTail();
		showBottomTail();
	};

	const extremelyHappyState = () => {
		hideHead();
		hideOpenMouth();
		showMouthOpenShrunk();
		showTopTail();
		hideMiddleTail();
		hideBottomTail();
	};

	const happyState = () => {
		hideHead();
		showOpenMouth();
		hideMouthOpenShrunk();
		hideTopTail();
		showMiddleTail();
		hideBottomTail();
	};

	normalState();

	const toggleNormalState = () => {
		setTimeout(() => {
			normalState();
		}, 2000);
	};

	happyButton.addEventListener('click', e => {
		extremelyHappyState();
		if (shortMoo.paused) {
			shortMoo.play();
			happyButton.innerHTML = 'You are awesome!';
			extremelyHappyButton.innerHTML = 'Make me Cry out of Joy!';
		}
		toggleNormalState();
		showMessage();
	});

	extremelyHappyButton.addEventListener('click', e => {
		happyState();
		if (longMoo.paused) {
			longMoo.play();
			extremelyHappyButton.innerHTML = 'You are out of the world!';
			happyButton.innerHTML = 'Make me happy!';
		}
		toggleNormalState();
		showMessage();
	});
};
