import axios from "axios";

/*const = indicando que vai ser uma variavel de valor fixo, ou seja, não vai mudar
resposta = nome escolhido para a variavel
await = faz uma função assincrona parar para poder esperar pelo retorno da requisição
api = variavel que a gente criou acima que faz a criação da conexão 
post= verbo http usado para realizar o login
url = caminho da requisição 
dados = utiliza somente os campos necessários para a requisição*/

export const api = axios.create({
    baseURL: "https://blogpessoal-1hkr.onrender.com"
})

export const cadastroUsuario = async(url:any, dados:any, setDado:any) => { // exporta e passa os parametro de cadastro
    const resposta = await api.post(url, dados) // espera a requisição e grava resposta
    setDado(resposta.data)
}

export const login = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data.token)
}

export const busca = async(url: any, setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const buscaId = async(url: any,setDado: any, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url,dados,header)
    setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url,dados,header)
    setDado(resposta.data)
}

export const deleteId = async(url: any,header: any) => { 
    await api.delete(url,header)
}
