# Flatdango Movie Ticketing Application

Flatdango is a web application that allows users to browse and purchase movie tickets from Flatiron Movie Theater. This project is built using HTML, CSS, and JavaScript, and it interacts with a JSON server to fetch and display movie data.

## Features

- Display the details of the first movie, including its poster, title, runtime, showtime, and available tickets.
- Show a menu of all movies available at Flatiron Movie Theater.
- Buy tickets for a movie, with real-time updates on available tickets displayed.
- Responsive design for both desktop and mobile devices.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_folder>
   
Start the JSON server:

npx json-server --watch db.json
Open index.html in your web browser.

## Project Structure
index.html: Main HTML file for the Flatdango application.
styles.css: CSS file for styling the application.
script.js: JavaScript file for fetching movie data and handling user interactions.
db.json: JSON file serving as a mock database for movie information.

## Usage
Upon loading the page, the details of the first movie are displayed.
Click on any movie in the menu to view its details.
Purchase tickets by clicking the "Buy Ticket" button, with immediate updates on ticket availability.

## Credits
Developed by Nick Kibet.