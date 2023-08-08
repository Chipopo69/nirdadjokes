javascript
const jokesURL = "joke.jasons"

function showRandomJoke() {
    fetch(jokesURL)
        .then(response => response.json())
        .then(jokes => {
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            document.getElementById('joke-title').textContent = randomJoke.title;
            document.getElementById('joke-text').textContent = randomJoke.joke;
            document.getElementById('joke-container').style.display = 'block';
        })
        .catch(error => {
            console.log('Error fetching jokes:', error);
        });
}