# Movie Survey

Simple movie survey application created with [React](https://react.dev/). Application backend is mocked with [Express](https://expressjs.com/).

Application is deployed with [Vercel](https://vercel.com) and can be tested on following link: [Movie Survey](https://movie-survey.vercel.app/). Express backend code is automatically converted to [serverless function](https://vercel.com/docs/concepts/functions/serverless-functions) by Vercel.

# Running locally (development and testing)

1. Clone repository: `git clone git@github.com:tvrbosic/movie-survey.git`
2. Install frontend npm packages: `cd movie-survey && npm install`
3. Enter api folder and install backend npm packages: `cd api/ && npm install`
4. Back to root folder and run npm script to start both frontend and backend: `cd .. && npm run dev`

# Running with Docker

1. Clone repository: `git clone git@github.com:tvrbosic/movie-survey.git`
2. Position yourself to project root folder: `cd movie-survey`
3. Build docker images:
   - `sudo docker build api/ -t movie-survey-api `
   - `sudo docker build . -t movie-survey-ui`
4. Run docker containers:
   - `sudo docker run -p 3001:3001 movie-survey-api`
   - `sudo docker run -p 3000:3000 movie-survey-ui`

# Running with Docker compose

1. Clone repository: `git clone git@github.com:tvrbosic/movie-survey.git`
2. Position yourself to project root folder: `cd movie-survey`
3. Run docker-compose: `sudo docker-compose up`

# Environment files

## env

```
REACT_APP_API_URL=http://localhost:3001/
```

## env.production

```
REACT_APP_API_URL=https://movie-survey.vercel.app/
```

# Packages used

- [Chakra UI v2.5](https://chakra-ui.com/)
- [Axios v1.3](https://axios-http.com/)
- [React v18.2](https://react.dev/)
- [React Hook Form v7.43](https://react-hook-form.com/)
- [React Router v6.10](https://reactrouter.com/en/main)
- [Framer Motion v10.10](https://www.framer.com/motion/)
- [React Icons v4.8](https://react-icons.github.io/react-icons/)
- [Typescript v4.9](https://www.typescriptlang.org/)
