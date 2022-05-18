export const formatarData = (data,padrao='BR')=>{
    const padroes = {
        "BR":(data)=>data.split('-').reverse().join('/')
    }
    return padroes[padrao](data)
}