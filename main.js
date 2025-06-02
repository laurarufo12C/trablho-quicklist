const itens = []

function addItem() {
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: false
    }

    itens.push(item)

    document.querySelector("#item").value = ""

    showItensList()
}

function showItensList(){
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    itens.map((item, index) => {
        sectionList.innerHTML += `
            <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}">

                    <div class="custom-checkbox">
                        <img src="./assets-20250601T213559Z-1-001/assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}">${item.name}</label>
                </div>

                <button onclick="removeItem('${item.name}')">
                    <img src="./assets-20250601T213559Z-1-001/assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
        `
    })
}

function removeItem(itemName) {
    const itemIndex = itens.findIndex((item) => item.name === itemName)

    if(itemIndex !== -1){
        itens.splice(itemIndex, 1)
    }

    showItensList()
}