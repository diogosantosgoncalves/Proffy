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
    subject: "1",
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

  //await createProffy(db, {proffyValue, classValue, classSchedulesValues})

  // Consultar os dados inseridos

  // todos os proffys

  const query = await db.all(`
  SELECT classes.*, proffys.*
  FROM proffys
  JOIN classes ON (classes.proffy_id = proffys.id)
  WHERE EXISTS(
    SELECT class_schedule.*
    FROM class_schedule
    where class_schedule.class_id = "1"
    AND class_schedule.weekday = "1"
    AND class_schedule.time_from <= "720"
    AND class_schedule.time_to > "720"
  )
  AND classes.subject = '1'
`)
  console.log(query)

  const selectedProffys = await db.all("SELECT * FROM class_schedule")
  //console.log(selectedProffys)

  // consultar as classes de um determinado professor
  // e trazer junto os dados do professor

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  //console.log(selectClassesAndProffys)


  // o horário que a pessoa trabalha, é das 08h - 18h
  // 
  //
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    where class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

  //console.log(selectClassesSchedules)
})