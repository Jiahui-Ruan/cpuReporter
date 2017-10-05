This is the repo of cpuReporter which aims at monitoring the cpu load

## How to use

First, clone the repo or download it

```bash
$ git clone https://github.com/ruanyf/react-babel-webpack-boilerplate.git
$ cd cpuReporter
```

**Important**: You must install [Node](https://nodejs.org/en/) and [git](https://git-scm.com/downloads) first

Second, open two terminal and `cd` into subfolder `frontend` and `backend`

```bash
$ cd frontend
$ cd backend
```

Third, install the dependencies in each folder

```bash
$ npm install
```

Then, launch the application

```bash
$ npm start
```

Now you should see two new browser window/tab opening and you can see the `frontend` in http://localhost:8080/

You can see the `backend` in http://localhost:3000/ if you want to see the RESTful endpoint you can goto http://localhost:3000/load

Besides, you can change the `max load` when system load is larger than 100% by change the value in the `input field` and `hit return` or `click submit`

## Implementation detail
