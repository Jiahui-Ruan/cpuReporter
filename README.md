This is the repo of cpuReporter which aims at monitoring the cpu load

## How To Use

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

## CPU Load
In order to calculate the load of cpu, we must first understand the term `load` vs `load average`.

Here is some explanation excerpts from [how to geek](https://www.howtogeek.com/194642/understanding-the-load-average-on-linux-and-other-unix-like-systems/)

On Unix-like systems, including Linux, the system load is a measurement of the computational work the system is performing. This measurement is displayed as a number. A completely idle computer has a load average of 0. Each running process either using or waiting for CPU resources adds 1 to the load average. So, if your system has a load of 5, five processes are either using or waiting for the CPU.

On its own, the load number doesn’t mean too much. A computer might have a load of 0 one split-second, and a load of 5 the next split-second as several processes use the CPU. Even if you could see the load at any given time, that number would be basically meaningless.

To monitor the `load average` of Linux System, the easiest way is to [run the uptime command](https://www.howtogeek.com/194186/bragging-rights-how-to-find-your-computers-uptime-and-installation-date/) and here is an example of load avager output:

```
load average: 1.05, 0.70, 5.09
```

From left to right, these numbers show you the average load over the last one minute, the last five minutes, and the last fifteen minutes. In other words, the above output means:

```
load average over the last 1 minute: 1.05

load average over the last 5 minutes: 0.70

load average over the last 15 minutes: 5.09
```

But what does the above numbers really mean? Assuming you’re using a single-CPU system, the numbers tell us that:

```
over the last 1 minute: The computer was overloaded by 5% on average. On average, .05 processes were waiting for the CPU. (1.05)

over the last 5 minutes: The CPU idled for 30% of the time. (0.70)

over the last 15 minutes: The computer was overloaded by 409% on average. On average, 4.09 processes were waiting for the CPU. (5.09)
```

Besides, what if you have a system with multiple CPUs or a multi-core CPU. For example, if you have a load average of 2 on a single-CPU system, this means your system was overloaded by 100 percent — the entire period of time, one process was using the CPU while one other process was waiting. On a system with two CPUs, this would be complete usage — two different processes were using two different CPUs the entire time. On a system with four CPUs, this would be half usage — two processes were using two CPUs, while two CPUs were sitting idle.

To understand the load average number, you need to know how many CPUs your system has. A load average of 6.03 would indicate a system with a single CPU was massively overloaded, but it would be fine on a computer with 8 CPUs.

## Back-End

First, as mentioned before, even [run the uptime command](https://www.howtogeek.com/194186/bragging-rights-how-to-find-your-computers-uptime-and-installation-date/) return same result in value, it may have different meaning in various system with different number of cores in CPU.

Second, as the [OS package document of NodeJS](https://nodejs.org/api/os.html) told us that `os.loadavg()` returns an array containing the 1, 5, and 15 minute load averages in UNIX system, but it would return an array of 3 zero in Windows.

To overcome these two problem and implement the backend, we first need to determined which operating system we are using with the help of `os.type()`

When it comes to a Windows system, we need to import a NPM package named [windows-cpu](https://github.com/KyleRoss/windows-cpu) which provides us an API named [totalLoad(cb)](https://github.com/KyleRoss/windows-cpu#totalloadcb) to get the realtime total load in percentage for all processes running on the current machine per CPU. We can calculate the average of all the values in array, and returns it in the RESTful API.

On the other hand, we can use the [OS package](https://nodejs.org/api/os.html) in Unix-like system to get the number of cores by calculating the length of `os.cpus()` which returns an array containing information about the computer's CPUs. Divide the first value of return array of `os.loadavg()` by the number of cores to get the realtime cpu load.

To sum, I returns 3 value in the `/load` endpoint:

```
avgLoad => realtime average load

sumLoad => realtime sum load

cpus => number of cores
```

## Front-End

Sticking to the principle of `the simpler is the better`, I use a simple React/Redux boilerplate on [Github](https://github.com/StephenGrider/ReduxSimpleStarter)

As the mockup reference shows, I need to build at least two element and as all the data comes from the `/load` endpoint of backend, I choose to use `Redux` to control the data flow. At the same time, the system load may exceed 100% when the system is busy. In order to better monitor the scale of cpu, I add one more component that has an input filed to change the scale of the upper round slider and the lower history chart.

By the way, to make component more reusable, I separate `containers` which are classes have direct connection to redux and use data from data flow, from `components` which are classes have no direct connection to redux and can be reusable in many places.

During the rapid development process, I got help from a JQuery plugin named [RoundSlider](http://roundsliderui.com/demos.html) and a NPM package named [react-sparklines](https://github.com/borisyankov/react-sparklines). I encapsulate them by adding personalized parameter inside so that it became a reusable component in my project. 
