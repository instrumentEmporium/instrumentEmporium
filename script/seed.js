/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db');
const {User} = require('../server/db/models');
const {Instrument} = require('../server/db/models');

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!

    const instruments = await Promise.all([
      Instrument.create({name: 'Piano', type: 'Keyboard', price: '250', quantity: '24', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice piano', rating: '4'}),
      Instrument.create({name: 'Guitar', type: 'String', price: '150', quantity: '15', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice guitar', rating: '3'}),
      Instrument.create({name: 'Violin', type: 'String', price: '350', quantity: '37', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice violin', rating: '4'}),
      Instrument.create({name: 'Saxophone', type: 'Woodwind', price: '400', quantity: '9', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice saxophone', rating: '4'}),
      Instrument.create({name: 'Flute', type: 'Woodwind', price: '115', quantity: '52', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice flute', rating: '3'}),
      Instrument.create({name: 'Drums', type: 'Percussion', price: '1500', quantity: '22', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice pair of drums', rating: '5'}),
      Instrument.create({name: 'Harp', type: 'String', price: '900', quantity: '7', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice harp', rating: '3'}),
      Instrument.create({name: 'Trombone', type: 'Brass', price: '2800', quantity: '4', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is one of the best trombones out there', rating: '5'}),
      Instrument.create({name: 'Ukulele', type: 'String', price: '80', quantity: '41', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice ukulele', rating: '4'}),
      Instrument.create({name: 'Trumpet', type: 'Brass', price: '999', quantity: '19', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice trumpet', rating: '4'}),
      Instrument.create({name: 'French horn', type: 'Brass', price: '299', quantity: '39', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice french horn', rating: '4'}),
      Instrument.create({name: 'Tuba', type: 'Brass', price: '4999', quantity: '12', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine and expensive tuba', rating: '5'}),
      Instrument.create({name: 'Didgeridoo', type: 'Brass', price: '50', quantity: '72', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine didgeridoo', rating: '4'}),
      Instrument.create({name: 'Cello', type: 'String', price: '499', quantity: '32', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine cello', rating: '4'}),
      Instrument.create({name: 'Viola', type: 'String', price: '450', quantity: '18', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice viola', rating: '4'}),
      Instrument.create({name: 'Double bass', type: 'String', price: '999', quantity: '10', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine and expensive double bass', rating: '4'}),
      Instrument.create({name: 'Bassoon', type: 'Woodwind', price: '899', quantity: '24', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine and expensive bassoon', rating: '4'}),
      Instrument.create({name: 'Clarinet', type: 'Woodwind', price: '399', quantity: '41', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine and expensive clarinet', rating: '3'}),
      Instrument.create({name: 'Bagpipes', type: 'Woodwind', price: '1499', quantity: '7', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine and expensive bagpipe', rating: '4'}),
      Instrument.create({name: 'Contrabassoon', type: 'Woodwind', price: '14999', quantity: '4', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine and expensive contrabassoon', rating: '5'}),
      Instrument.create({name: 'Bass drums', type: 'Percussion', price: '199', quantity: '21', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine and expensive bass drum', rating: '4'}),
      Instrument.create({name: 'Tabla', type: 'Percussion', price: '299', quantity: '16', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine tabla', rating: '4'}),
      Instrument.create({name: 'Xylophone', type: 'Percussion', price: '799', quantity: '26', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine xylophone', rating: '4'}),
      Instrument.create({name: 'Triangle', type: 'Percussion', price: '99', quantity: '49', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine triangle', rating: '4'}),
      Instrument.create({name: 'Tambourine', type: 'Percussion', price: '199', quantity: '24', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine tambourine', rating: '5'}),
      Instrument.create({name: 'Marimba', type: 'Percussion', price: '599', quantity: '6', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very fine marimba', rating: '4'}),
      Instrument.create({name: 'Accordion', type: 'Keyboard', price: '299', quantity: '31', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice accordion', rating: '4'}),
      Instrument.create({name: 'Organ', type: 'Keyboard', price: '2500', quantity: '3', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice organ', rating: '5'}),
      Instrument.create({name: 'Harpsichord', type: 'Keyboard', price: '550', quantity: '5', imageUrl: 'http://www.fillmurray.com/300/300', description: 'This is a very nice harpsichord', rating: '4'}),
    ])


  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
