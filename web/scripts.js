function ask(question)
{
    //const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');
    responseDiv.style.display = 'block';
    fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
    })
    .then(res => res.json())
    .then(data => {
        responseDiv.innerText = data.response;
        responseDiv.style.display = 'block';
    })
    .catch(error => {
        responseDiv.innerText = 'Erreur: ' + error.message;
        responseDiv.style.display = 'block';
    });
}