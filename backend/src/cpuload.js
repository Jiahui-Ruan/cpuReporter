const os = require('os');
const windowsCPU = require('windows-cpu');

const getLoad = (req, res) => {
  if (os.type() == 'Windows_NT') {
    // Windows platform
    windowsCPU.totalLoad((err, loadArr) => {
      if (err) {
        res.status(500).send({error: "something went wrong in windows"});
      } else {
        // loadArr (multi-cpu in percent) => [3, 10]
        let sumLoad = loadArr.reduce((sum, value) => {
          return sum + value;
        }, 0)
        // change to percentage
        sumLoad /= 100;
        let avgLoad = sumLoad / loadArr.length;
        res.status(200).send({
          avgLoad: avgLoad,
          sumLoad: sumLoad,
          cpus: loadArr.length
        })
      }
    })
  } else {
    // UNIX platform
    res.status(200).send({
      avgLoad: os.loadavg()[0] / os.cpus().length,
      sumLoad: os.loadavg()[0],
      cpus: os.cpus().length
    })
  }
}

module.exports = (app) => {
  app.get('/load', getLoad)
}
