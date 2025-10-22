# Ben Attali

## Countries Dashboard

To run locally, follow these steps:
1. Download + install [Docker](https://www.docker.com/products/docker-desktop/)
2. Clone this repository
3. Cd into this directory
4. Run `docker build -t countries-dashboard .` from within the root
5. Run `docker run -p 3000:3000 countries-dashboard` from within the root
6. Go to http://localhost:3000

#### *for development*
run `docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules countries-dashboard` for live reload
