export function gerarArrayRange(pagina) {
    let tamanhoDefault = 8
    let incrementoDefault = 4
    if (pagina < 4) {
        incrementoDefault = 8 - pagina
    }
    let arr = Array.from(
        { length: pagina + incrementoDefault },
        (v, k) => k + 1,
    )

    if (arr.length > 8) {
        return arr.slice(
            pagina - (tamanhoDefault / 2 + 1),
            pagina + (tamanhoDefault / 2 + 1),
        )
    }
    return arr
}
