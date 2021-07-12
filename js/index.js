let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const styles = e.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count++;
		} else {
			count = 0;
		}
		value.style.color = count > 0 ? '#00f' : count < 0 ? '#ff0000' : '#222';
		value.textContent = String(count);
	});
});
