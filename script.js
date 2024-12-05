document.getElementById('reclamoForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:8000/message', { // Cambiar al puerto correcto del backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    if (response.ok) {
        alert('Reclamación enviada con éxito.');
    } else {
        alert('Hubo un problema al enviar la reclamación.');
    }
});
