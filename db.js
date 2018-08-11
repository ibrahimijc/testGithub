console.log('Attribe walay pasay dedo please dedo nah please dedo')

console.log("Attribe walay pasay mut dedo");


module.exports.getCustomerSync = function(id) { 
  console.log('Hans raha hon main..');
  return { id: id, points: 11 };
module.exports.getCustomerSync = function(id) {
  console.log('Hans raha hon main..')
  return {id: id, points: 11}
}

module.exports.getCustomer = async function(id) {
  return new Promise((resolve, reject) => {
    console.log('Reading a customer from MongoDB...')
    resolve({id: id, points: 11})
  })
}
