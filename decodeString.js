// Write your code below this line
let atoz = 'abcdefghijklmnopqrstuvwxyz'

let decoder = string => {
    let decodedString = ''
    let stringToShift = string.replace(/[0-9]/,'')
    let shiftNum = parseInt(string.replace(/[a-z]/g,''))

    for(let i = 0; i<stringToShift.length; i++){
        let index = atoz.indexOf(stringToShift[i]) + shiftNum
        if(atoz.includes(stringToShift[i]) && index < 26){
            decodedString += atoz.charAt(index)
        }else{
            decodedString += atoz.charAt(index - atoz.length)
        }
    }
    console.log(decodedString)
}

decoder('1a') // prints "b"
decoder('3ce') // prints "fh"
decoder('2fcjjm') // prints "hello"
decoder('4xwjwjw') // prints "banana"