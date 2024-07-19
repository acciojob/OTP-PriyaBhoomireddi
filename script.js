const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            inputs[index].value = '';
            setTimeout(() => {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            if (inputs[index].value === '') {
                if (index > 0) {
                    setTimeout(() => {
                        inputs[index - 1].focus();
                    }, 10);
                }
            } else {
                inputs[index].value = '';
            }
        }
    });
});

inputs[0].focus();
