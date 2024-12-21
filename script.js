const form = document.getElementById('form-validacao');

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

function validaCampo() {
    const campoA = document.getElementById('numero1');
    const campoB = document.getElementById('numero2');
    if (campoA.value >= campoB.value) {
        alert("O campo A é maior que o campo B");
    }
}

console.log(form);
