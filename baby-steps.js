const _ = require('lodash')
console.log(_.sum(process.argv.slice(2,process.argv.length).map(n=> n= +n)))