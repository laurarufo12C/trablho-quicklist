const itens = []

function addItem() {
    const itemName = document.querySelector("#item").value

    const item = {
        naame: itemName,
        checked: false
    }

    itens.push(item)
}