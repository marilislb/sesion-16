function mostrar() {
    const name = document.getElementByld('name').value;
    const email = document.getElementByld('email').value;
    let cont = document.getElementById('enviar');
    if (cont.style.display == 'none') {
        cont.style.display = 'block';
        if (name == "" || email === "") {
            alert('Por favor, completa todos los campos.');
            Event.preventDefault();
        } else {
            alert('¡Formulario enviado correctamente!');
        }
    }

}