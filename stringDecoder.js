function decoder(code) {
    let safeCode = String(code)
    let decodedWord = ""

    for (let i = 0; i < safeCode.length; i++) {
        if (isNaN(safeCode[i]) === false) {
            i += Number(safeCode[i])
        } else {
            decodedWord += safeCode[i]
        }
    }

    return decodedWord
}

let word = decoder("2bna0p1mp2osl0e")
console.log(word)