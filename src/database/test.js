const Database = require('./db')
const createProffy = require('./createProffy')



Database.then(async (db) => {

  proffyValue = {
    name: 'Mayk Brito',
    avatar: 'https://avatars0.githubusercontent.com/u/62027609?s=400&u=175142b0bfefc0c5da7461d3bbf20b1c4034e0da&v=4',
    whatsapp: '24998251424',
    bio: 'Apaixonado por tecnologia',
  }
  classValue = {
    subject: "Química",
    cost: "20",
  }
  classSchedulesValues = [
    {
      weekday : 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday : 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  await createProffy(db, {proffyValue, classValue, classSchedulesValues})

  // Consultar os dados inseridos

})