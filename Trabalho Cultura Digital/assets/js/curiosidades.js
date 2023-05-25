function initializeFaq() {
	const faqs = document.querySelectorAll('.faq');
	faqs.forEach(faq => {
		faq.addEventListener('click', event => {
			const question = event.target.closest('.faq__question');
			if (!question) return;
			const answer = question.nextElementSibling;
			// ocultar resposta aberta anteriormente e mostrar a resposta clicada
			const currentAnswer = faq.querySelector('.faq__answer[aria-hidden="false"]');
			if (currentAnswer === answer) {
				// feche a resposta já aberta
				answer.setAttribute('aria-hidden', 'true');
				answer.parentNode.classList.remove('faq__item--expanded');
				question.setAttribute('aria-expanded', 'false');
			} else {
				// ocultar a resposta aberta anteriormente e mostrar a resposta clicada
				if (currentAnswer) {
					currentAnswer.setAttribute('aria-hidden', 'true');
					currentAnswer.parentNode.classList.remove('faq__item--expanded');
					currentAnswer.previousElementSibling.setAttribute('aria-expanded', 'false');
				}
				answer.setAttribute('aria-hidden', 'false');
				answer.parentNode.classList.add('faq__item--expanded');
				question.setAttribute('aria-expanded', 'true');
			}
		});
	});
}

// Chamada da função para inicializar todos os conjuntos de FAQ
initializeFaq();