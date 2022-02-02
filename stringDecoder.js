function decoder(code) {
    let eCode = String(code)
    let decodedWord = ""

    for (let i = 0; i < eCode.length; i++) {
        if (isNaN(eCode[i]) === false) {
            i += Number(eCode[i])
        } else {
            decodedWord += eCode[i]
        }
    }

    return decodedWord
}

let word = decoder("2bna0p1mp2osl0e")
console.log(word)