# 🌎 Countries Dashboard

A responsive React dashboard to explore countries around the world.
Filter, sort, and paginate country data fetched from the **REST Countries API**.

## Features

- Search countries by name
- Sort by name or population (ascending/descending)
- Pagination for large datasets
- Responsive grid layout with country cards
- Sticky footer with social links and credits
- Loading and error states

## Tech Stack

- React + TypeScript
- Tailwind CSS
- React Testing Library + Jest
- REST Countries API
- Docker for containerized development

## Getting Started

To run locally, follow these steps:
1. Download + install [Docker](https://www.docker.com/products/docker-desktop/)
2. Clone this repository
3. Cd into this directory
4. Run `docker build -t countries-dashboard .` from within the root to build the image
5. Run `docker run -p 3000:3000 countries-dashboard` from within the root to run the container
6. Go to http://localhost:3000

### *for development*
run `docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules countries-dashboard` for live reload

*Data provided by* [REST Countries API](https://restcountries.com/).
