console.log('Attribe walay pasay dedo please dedo nah please dedo')

<<<<<<< HEAD
console.log("Attribe walay pasay mut dedo");


module.exports.getCustomerSync = function(id) { 
  console.log('Hans raha hon main..');
  return { id: id, points: 11 };
=======
module.exports.getCustomerSync = function(id) {
  console.log('Hans raha hon main..')
  return {id: id, points: 11}
>>>>>>> f04761284a67073c102ac0e86cc0121d6610d99a
}

module.exports.getCustomer = async function(id) {
  return new Promise((resolve, reject) => {
    console.log('Reading a customer from MongoDB...')
    resolve({id: id, points: 11})
  })
}
