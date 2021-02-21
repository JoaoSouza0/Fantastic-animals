import initAnimaNumeros from './animaNumeros.js'
export default function AnimaisFecth() {

    async function getAnimals(url) {
        try {

            const animalsGrid = document.querySelector('.numeros-grid')

            const animalsResponse = await fetch(url)
            const animalsDate = await animalsResponse.json()

            animalsDate.forEach((item) => {
                const animalsDiv = createAnimals(item)
                animalsGrid.appendChild(animalsDiv)
            });

            initAnimaNumeros()
        } catch (erro) {
            console.log(erro)
        }
    }

    function createAnimals(animals) {

        const div = document.createElement('div')
        div.classList.add('numero-animal')

        div.innerHTML = `
    <h3>${animals.species}</h3>
     <span data-numero>${animals.number}</span>
    `
        return div
    }

    getAnimals('./animaisAPI.json')

}