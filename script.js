document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display the first movie's details
    fetch('http://localhost:3000/films/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Film details:', data);
      // Update DOM with film details
    })
    .catch(error => {
      console.error('Error fetching film details:', error);
        });

    // Fetch and display the list of all movies
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(movies => {
            const filmsList = document.getElementById('films');
            filmsList.innerHTML = ''; // Clear placeholder
            movies.forEach(movie => {
                const li = document.createElement('li');
                li.classList.add('film', 'item');
                li.textContent = movie.title;
                if (movie.capacity - movie.tickets_sold === 0) {
                    li.classList.add('sold-out');
                }
                li.addEventListener('click', () => {
                    displayMovieDetails(movie);
                });
                filmsList.appendChild(li);
            });
        });

    // Buy Ticket button functionality
    document.getElementById('buy-ticket-button').addEventListener('click', () => {
        const availableTicketsElement = document.getElementById('available-tickets');
        let availableTickets = parseInt(availableTicketsElement.textContent);
        if (availableTickets > 0) {
            availableTicketsElement.textContent = availableTickets - 1;
            updateTicketsSold(availableTickets - 1);
        } else {
            alert('Sold out!');
        }
    });
});

function displayMovieDetails(movie) {
    document.getElementById('poster').src = movie.poster;
    document.getElementById('title').textContent = movie.title;
    document.getElementById('runtime').textContent = `Runtime: ${movie.runtime} minutes`;
    document.getElementById('showtime').textContent = `Showtime: ${movie.showtime}`;
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById('available-tickets').textContent = availableTickets;

    // Update the Buy Ticket button state
    const buyButton = document.getElementById('buy-ticket-button');
    if (availableTickets === 0) {
        buyButton.textContent = 'Sold Out';
        buyButton.disabled = true;
    } else {
        buyButton.textContent = 'Buy Ticket';
        buyButton.disabled = false;
    }
}

function updateTicketsSold(ticketsSold) {
    const movieId = document.getElementById('poster').src.split('/').pop().split('.')[0];
    fetch(`http://localhost:3000/films/${movieId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tickets_sold: ticketsSold })
    })
    .then(response => response.json())
    .then(data => console.log('Updated tickets sold:', data));
}
