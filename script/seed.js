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
const {Instrument, Review, User} = require('../server/db/models');

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!

    const user = await Promise.all([
      User.create({email: 'dummy@user.com', password: '123', firstName: 'Dummy', lastName: 'User', phoneNumber: '9192121', addressLine1: 'Dummy Street 7', addressLine2: 'apartment 9', city: 'Queens', state: 'NY', zip: '11000'}),
      User.create({email: 'dummy@user2.com', password: '123', firstName: 'Dummy2', lastName: 'User2', phoneNumber: '9192121', addressLine1: 'Dummy Street 7', addressLine2: 'apartment 9', city: 'Queens', state: 'NY', zip: '11000'}),
      User.create({email: 'dummy@user3.com', password: '123', firstName: 'Dummy3', lastName: 'User3', phoneNumber: '9192121', addressLine1: 'Dummy Street 7', addressLine2: 'apartment 9', city: 'Queens', state: 'NY', zip: '11000'}),
      User.create({email: 'dummy@user4.com', password: '123', firstName: 'Dummy4', lastName: 'User4', phoneNumber: '9192121', addressLine1: 'Dummy Street 7', addressLine2: 'apartment 9', city: 'Queens', state: 'NY', zip: '11000'}),
      User.create({email: 'dummy@user5.com', password: '123', firstName: 'Dummy5', lastName: 'User5', phoneNumber: '9192121', addressLine1: 'Dummy Street 7', addressLine2: 'apartment 9', city: 'Queens', state: 'NY', zip: '11000'})
    ])

    const instruments = await Promise.all([
      Instrument.create({name: 'Piano', type: 'Keyboard', price: '250', quantity: '24', imageUrl: 'https://www.yamaha.com/en/musical_instrument_guide/common/images/piano/parts_viewer01.jpg', description: 'This is a very nice piano', rating: '4', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Better_demostration_B55-64.ogg'}),
      Instrument.create({name: 'Guitar', type: 'String', price: '150', quantity: '15', imageUrl: 'https://www.long-mcquade.com/files/10372/lg_V3_EN_C40.jpg', description: 'This is a very nice guitar', rating: '3', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Classical_guitar_scale.ogg'}),
      Instrument.create({name: 'Violin', type: 'String', price: '350', quantity: '37', imageUrl: 'https://thefinancialconsulting.com/wp-content/uploads/2018/02/Violin-Market.jpg', description: 'This is a very nice violin', rating: '4', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Violin_sounds_and_techniques.ogg'}),
      Instrument.create({name: 'Saxophone', type: 'Woodwind', price: '400', quantity: '9', imageUrl: 'http://wpmanager.buffet-group.com/buffet/wp-content/uploads/sites/4/2016/05/bc8101_full-1592x600.jpg', description: 'This is a very nice saxophone', rating: '4', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Basinstreetblues-first8bars.ogg'}),
      Instrument.create({name: 'Flute', type: 'Woodwind', price: '115', quantity: '52', imageUrl: 'https://www.thomann.de/pics/bdb/280440/5650888_800.jpg', description: 'This is a very nice flute', rating: '3', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Bach_-_Partita_For_Solo_Flute_-_Modern_Flute_-_1._Allemande.ogg'}),
      Instrument.create({name: 'Drums', type: 'Percussion', price: '1500', quantity: '22', imageUrl: 'https://www.stebaldrums.com/wp-content/uploads/2015/04/45th-1.jpg', description: 'This is a very nice pair of drums', rating: '5', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Rock_beat_ride_cymbal.ogg'}),
      Instrument.create({name: 'Harp', type: 'String', price: '900', quantity: '7', imageUrl: 'https://www.salviharps.com/wp-content/uploads/2016/05/Rainbow_SG.jpg', description: 'This is a very nice harp', rating: '3', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/17929B-Fantasia.ogg'}),
      Instrument.create({name: 'Trombone', type: 'Brass', price: '2800', quantity: '4', imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products1274-1200x1200-725532.jpg', description: 'This is one of the best trombones out there', rating: '5', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Jazz_Trombone.ogg'}),
      Instrument.create({name: 'Ukulele', type: 'String', price: '80', quantity: '41', imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/MU40-Soprano-Ukulele-Natural/J22069000001000-00-500x500.jpg', description: 'This is a very nice ukulele', rating: '4', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ukulele_chords.ogg'}),
      Instrument.create({name: 'Trumpet', type: 'Brass', price: '999', quantity: '19', imageUrl: 'https://images.reverb.com/image/upload/s---haqclbt--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1479765046/dxcs3ukjgww3inurthon.png', description: 'This is a very nice trumpet', rating: '4', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Rollin_at_5_%28ISRC_USUAN1400029%29.mp3'}),
      Instrument.create({name: 'French horn', type: 'Brass', price: '299', quantity: '39', imageUrl: 'https://www.paxman.org.uk/Files/102843/Img/17/Yamaha-YHR567-French-Horn.png', description: 'This is a very nice french horn', rating: '4'}),
      Instrument.create({name: 'Tuba', type: 'Brass', price: '4999', quantity: '12', imageUrl: 'https://media.wwbw.com/is/image/MMGS7/YBB-641-Professional-Rotary-Tuba/461362000000000-00-500x500.jpg', description: 'This is a very fine and expensive tuba', rating: '5'}),
      Instrument.create({name: 'Didgeridoo', type: 'Brass', price: '50', quantity: '72', imageUrl: 'https://www.tigermusic.co.uk/images/product/large/MDI001.jpg', description: 'This is a very fine didgeridoo', rating: '4'}),
      Instrument.create({name: 'Cello', type: 'String', price: '499', quantity: '32', imageUrl: 'https://www.sharmusic.com/productimages/image.axd/i.lc11+44/w.2000/h.2000/carlo+lamberti+%23174%3B+sonata+cello+-+4+4+size_.jpg', description: 'This is a very fine cello', rating: '4'}),
      Instrument.create({name: 'Viola', type: 'String', price: '450', quantity: '18', imageUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/SVA-175-Premier-Student-Series-Viola-Outfit-15-in.-Outfit/H84811000002000-00-500x500.jpg', description: 'This is a very nice viola', rating: '4'}),
      Instrument.create({name: 'Double bass', type: 'String', price: '999', quantity: '10', imageUrl: 'https://www.rimmersmusic.co.uk/images/antoni-adb05-1-4-double-bass-1-4-bag-p21553-25870_image.jpg', description: 'This is a very fine and expensive double bass', rating: '4'}),
      Instrument.create({name: 'Bassoon', type: 'Woodwind', price: '899', quantity: '24', imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products1247-1200x1200-89950.jpg', description: 'This is a very fine and expensive bassoon', rating: '4'}),
      Instrument.create({name: 'Clarinet', type: 'Woodwind', price: '399', quantity: '41', imageUrl: 'https://chesbroretail.com/wp-content/uploads/sites/18/2015/06/light-clarinet.jpg', description: 'This is a very fine and expensive clarinet', rating: '3'}),
      Instrument.create({name: 'Bagpipes', type: 'Woodwind', price: '1499', quantity: '7', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwe6wcpYL._SL1000_.jpg', description: 'This is a very fine and expensive bagpipe', rating: '4'}),
      Instrument.create({name: 'Contrabassoon', type: 'Woodwind', price: '14999', quantity: '4', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61MmeA6ui4L._SY550_.jpg', description: 'This is a very fine and expensive contrabassoon', rating: '5'}),
      Instrument.create({name: 'Bass drums', type: 'Percussion', price: '199', quantity: '21', imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/Vision-Birch-Bass-Drum-Jet-Black-22x18/H71967000002002-00-500x500.jpg', description: 'This is a very fine and expensive bass drum', rating: '4'}),
      Instrument.create({name: 'Tabla', type: 'Percussion', price: '299', quantity: '16', imageUrl: 'https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products20039-1200x1200-239075.jpg', description: 'This is a very fine tabla', rating: '4'}),
      Instrument.create({name: 'Xylophone', type: 'Percussion', price: '799', quantity: '26', imageUrl: 'https://media.guitarcenter.com/is/image/MMGS7/2-2-3-Octave-Xylophone-Padauk-Wood-Bars-with-Resonators/J21715000001001-00-500x500.jpg', description: 'This is a very fine xylophone', rating: '4'}),
      Instrument.create({name: 'Triangle', type: 'Percussion', price: '99', quantity: '49', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/4164d6BP9QL.jpg', description: 'This is a very fine triangle', rating: '4'}),
      Instrument.create({name: 'Tambourine', type: 'Percussion', price: '199', quantity: '24', imageUrl: 'https://static.wixstatic.com/media/4083ca_491dbbbcdd484518875a7412ff7b3af6.png/v1/crop/x_0,y_0,w_967,h_660/fill/w_580,h_396,al_c,usm_0.66_1.00_0.01/4083ca_491dbbbcdd484518875a7412ff7b3af6.png', description: 'This is a very fine tambourine', rating: '5'}),
      Instrument.create({name: 'Marimba', type: 'Percussion', price: '599', quantity: '6', imageUrl: 'https://www.thomann.de/pics/bdb/155131/8905302_800.jpg', description: 'This is a very fine marimba', rating: '4'}),
      Instrument.create({name: 'Accordion', type: 'Keyboard', price: '299', quantity: '31', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/919TdhhfcwL._SL1500_.jpg', description: 'This is a very nice accordion', rating: '4'}),
      Instrument.create({name: 'Organ', type: 'Keyboard', price: '2500', quantity: '3', imageUrl: 'http://www.stmartinoftourschurch.org/wp-content/uploads/2011/12/Organ-Console.jpg', description: 'This is a very nice organ', rating: '5'}),
      Instrument.create({name: 'Harpsichord', type: 'Keyboard', price: '550', quantity: '5', imageUrl: 'http://www.baroquemusic.org/Hieronymus%20Albrecht%20Hass%20Harpsichord%20(Hamburg,%201740).jpg', description: 'This is a very nice harpsichord', rating: '4'})
    ])

    const reviews = await Promise.all([
      Review.create({subject: 'This is my favorite piano ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 1, userId: 1}),
      Review.create({subject: 'This is my favorite guitar ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 2, userId: 2}),
      Review.create({subject: 'This is my favorite violin ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 3, userId: 3}),
      Review.create({subject: 'This is my favorite saxophone ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 4, userId: 4}),
      Review.create({subject: 'This is my favorite flute ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 5, userId: 5}),
      Review.create({subject: 'This is my favorite drums ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 6, userId: 1}),
      Review.create({subject: 'This is my favorite harp ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 7, userId: 2}),
      Review.create({subject: 'This is my favorite trombone ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 8, userId: 3}),
      Review.create({subject: 'This is my favorite ukulele ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 9, userId: 4}),
      Review.create({subject: 'This is my favorite trumpet ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 10, userId: 5}),
      Review.create({subject: 'This is my favorite french horn ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 11, userId: 1}),
      Review.create({subject: 'This is my favorite didgeridoo ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 12, userId: 2}),
      Review.create({subject: 'This is my favorite tuba ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 13, userId: 3}),
      Review.create({subject: 'This is my favorite cello ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 14, userId: 4}),
      Review.create({subject: 'This is my favorite viola ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 15, userId: 5}),
      Review.create({subject: 'This is my favorite clarinet ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 16, userId: 1}),
      Review.create({subject: 'This is my favorite bagpipes ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 17, userId: 2}),
      Review.create({subject: 'This is my favorite bassoon ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 18, userId: 3}),
      Review.create({subject: 'This is my favorite double bass ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 19, userId: 4}),
      Review.create({subject: 'This is my favorite contrabassoon ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 20, userId: 5}),
      Review.create({subject: 'This is my favorite bass drum ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 21, userId: 1}),
      Review.create({subject: 'This is my favorite tabla ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 22, userId: 2}),
      Review.create({subject: 'This is my favorite xylophone ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 23, userId: 3}),
      Review.create({subject: 'This is my favorite triangle ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 24, userId: 4}),
      Review.create({subject: 'This is my favorite tambourine ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 25, userId: 5}),
      Review.create({subject: 'This is my favorite accordion ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 26, userId: 1}),
      Review.create({subject: 'This is my favorite marimba ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 27, userId: 2}),
      Review.create({subject: 'This is my favorite organ ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 28, userId: 3}),
      Review.create({subject: 'This is my favorite harpsichord ever', body: 'I love this instrument because it plays amazing and the instrument emporium team is great. They helped me with picking the right instrument for me and my 5 year old son. Recommend, will deff buy again from Instrument Emporium ', rating: 5, instrumentId: 29, userId: 4})
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
