const decimalInput = document.querySelector(".decimal")
const hexInput = document.querySelector(".hex")
const binaryInput = document.querySelector(".binary")
const stringInput = document.querySelector(".string")

const HEX_REGEX = /[0-9a-fA-F]+/

const hexToString = (hex) => {
  let result = ""

  for(let i = 0; i < hex.length; i+=2){
    result += String.fromCharCode(parseInt(hex[i]+hex[i+1], 16))
  }

  return result
}

const binaryToString = (binary) => {
  let result = ""

  for(let i = 0; i < binary.length/8; i++){
    result += String.fromCharCode(parseInt(binary.slice(i*8, (i+1)*8), 2));
    console.log(parseInt(binary.slice(i*8, (i+1)*8)))
  }

  return result
}

decimalInput.addEventListener("input", (e) => {
  const {value} = e.srcElement

  hexInput.value = Number(value).toString(16)
  binaryInput.value = Number(value).toString(2)
})

hexInput.addEventListener("input", (e) => {
  const value = e.srcElement.value.replace(/\s/g, "")

  decimalInput.value = parseInt(value, 16).toString()
  binaryInput.value = parseInt(value, 16).toString(2)
  stringInput.value = hexToString(value) 
})

binaryInput.addEventListener("input", (e) => {
  const value = e.srcElement.value.replace(/\s/g, "")

  decimalInput.value = parseInt(value, 2).toString()
  hexInput.value = parseInt(value, 2).toString(16)
  stringInput.value = binaryToString(value)

})

stringInput.addEventListener("input", (e) => {
  const {value} = e.srcElement

  decimalValue = ""
  binaryValue = ""
  hexValue = ""

  for(let i = 0; i < value.length; i++){
    const number = value.charCodeAt(i)

    decimalValue += number.toString() + " "
    binaryValue += number.toString(2) + " "
    hexValue += number.toString(16) + " "
  }

  decimalInput.value = decimalValue
  binaryInput.value = binaryValue
  hexInput.value = hexValue
})
