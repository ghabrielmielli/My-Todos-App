# My-Todos-App

## About the project

![Application showcase](https://github.com/ghabrielmielli/My-Todos-App/blob/master/applicationShowcase.png?raw=true)

A basic, yet functional, todos app exploring basic to intermediate concepts in web development. I made this for learning + portfolio purposes.

### Built with

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Vue.js 2.x](https://vuejs.org/)


## Getting started

### Database Configuration

First, you should put MySQL up and running.
> Installing and configuring database steps is beyond the scope of this project.

Now, open the `dbconfig.js` file on the directory: `.../back/database/dbconfig.js`. There, you shall change the code that follows with your settings:

```javascript
//Connects to mysql using the provided credentials
const db = mysql.createConnection({
	host: "YOUR HOST HERE", //localhost
	user: "YOUR USER HERE",
	password: "YOUR PASSWORD HERE",
	port: THE_PORT_NUMBER_HERE, //8889
});
```

### Installation

Follow these steps to put the application up and running.
> Please note that [**npm**](https://www.npmjs.com/get-npm) is required, so make sure you have it.

#### Back-end

First, open the project folder on your terminal, navigate into the 'back' folder, and run the npm install command, as follows:

```bash
cd back
npm install
```

#### Front-end

After the installation is done, navigate into the 'front' folder, and run the npm install command, as follows:

```bash
cd ../front
npm install
```

Now you're good to go. Let's run the project!

### Running the app

We're going to do this in **two terminals**. So first, open two terminal tabs on the root of the application. On **the first tab**, let's run our server, as follows:

```bash
cd back
npm run dev
```

Now, let's jump into **the second tab** and serve the application's client:

```bash
cd front
npm run serve
```

Done! Now, looking at the terminal, you should see that the website is running. Just click on the link provided to open it!

```bash
 DONE  Compiled successfully in 200ms

  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.X.XXX:8080/
```
> Remember: To stop the application from running, you should type `CTRL+C` (or `Command+C`on Mac) on both terminals!

## Application Usage

A welcome message **shall be presented** the first time the website is opened, and each time it verifies there are no *categories* created by the user.

Through the welcome pop up, you can access the **User Manual**, as well as **clicking on the '?' icon on the top right of the screen** at any time you need.

## Contact

Ghabriel Mielli - <ghabrielmielli@hotmail.com>

## License

[MIT](https://choosealicense.com/licenses/mit/) Copyright © 2020 Ghabriel Mielli O J de Coctovitz

## Acknowledgements

- [Vuetify](https://vuetifyjs.com/en/)
- [Vuex](https://vuex.vuejs.org/)
- [Express.js](https://expressjs.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [node mysql](https://www.npmjs.com/package/mysql)



