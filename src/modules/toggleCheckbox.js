export default function toggleCheckbox() {
	const checkBox = document.querySelectorAll('.filter-check_checkbox');

	checkBox.forEach(function (element) {
		element.addEventListener('change', function() {
			if (this.checked)
				this.nextElementSibling.classList.add('checked');
			else 
				this.nextElementSibling.classList.remove('checked');	
		});
	});
}