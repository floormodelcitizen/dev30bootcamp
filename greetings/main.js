let name = ''
let rank = ''
let age = 0


function greeting(name, rank, age) {
  valName = (name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
  valRank = (rank.charAt(0).toUpperCase() + rank.slice(1).toLowerCase())

  switch (true) {
    case (age < 18):
      console.log(`You are too young for the military!`)
      break
    case (valRank === 'Count') && (valName === 'Rugen'):
      console.log(`My valName is Inigo Montoya, you killed my father, prepare to die`)
      break
    case (valRank === 'Captain'):
      console.log(`Aye Aye Captain ${ valName }`)
      break
    case (valRank === 'Private' && age > 40):
      console.log(`What have you been doing with your life ${ valName }?`)
      break
    default:
      console.log(`Hello ${ valRank } ${ valName }, I cannot wait to celebrate your ${ age + 1 }th birthday next year!`)
      break
  }

}

greeting('Rugen', 'Captain', 41)