// Se as propriedades ou variáveis personalizadas do CSS forem suportadas
if (window.CSS && CSS.supports("color", "var(--primary)")) {
	const radios = document.querySelectorAll('.input-teste');

	const toggleColorMode = function toggleColorMode(e) {
		//console.log(e.currentTarget.value);
		// Alternar para o modo claro
		if (e.currentTarget.value === "on") {
			// Define o atributo html personalizado
			document.documentElement.setAttribute("color-mode", "dark");
			// Define a preferência do usuário no armazenamento local
			localStorage.setItem("color-mode", "dark");
			return;
		}
		/* Alternar para o modo claro */
		document.documentElement.setAttribute("color-mode", "light");
		localStorage.setItem("color-mode", "light");
	};

	radios.forEach(function (radio) {
		radio.addEventListener("click", toggleColorMode);
	});
} else {
	//esconder o switcher
	const switcherContainer = document.querySelectorAll(".head-widgets")[0];
	switcherContainer.style.display = "none";
}
