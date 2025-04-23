const digiApi = {}

digiApi.getDigimonList = async () => {
    try {

        const resp = await fetch('https://digi-api.com/api/v1/digimon?pageSize=20')
        if (resp.status == 500) throw new Error('error en el servidor')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

digiApi.getDigimon = async (id) => {
    try {

        const resp = await fetch('https://digi-api.com/api/v1/digimon/' + id)
        if (resp.status == 500) throw new Error('error en el servidor')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


digiApi.nextDigimonList = async (url) => {
    try {

        const resp = await fetch(url)
        if (resp.status == 500) throw new Error('error en el servidor')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default digiApi