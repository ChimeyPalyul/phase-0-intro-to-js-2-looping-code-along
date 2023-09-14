const names = ["jim","carl","pal"]
const event = ['surprise']
const newArray = []


function writeCards(names,event){
    for(let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}

function countDown(i){
    for(let i = 10; i > -1;i-- ){
        console.log(i)
    }
}