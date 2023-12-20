const crud = document.getElementById("crud-system")
const input = document.getElementById('crud-create-text')

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        crud_add()
    }
})

function askinput(texto) {
    return window.prompt(texto)
}


function crud_add() {
    texto = input.value
    quantidade = document.getElementsByClassName("crud-item").length
    crud.innerHTML += `
    <div class="crud-item" id="crud_item_${quantidade}">
        <div class="crud-info">
            <p class="crud-text" id="crud_edit_${quantidade}">${texto}</p>
        </div>
        <div class="crud-options">
            <button class="crud-edit crud-button" onclick="crud_edit(event)"  data-itemid="crud_edit_${quantidade}">Editar</button>
            <button class="crud-delete crud-button" onclick="crud_delete(event)" data-itemid="crud_item_${quantidade}">Apagar</button>
        </div>
    </div>`

    input.value = ""
    input.focus()
}

function crud_edit(e) {
    const item_id = e.target.dataset.itemid
    const elemento = document.getElementById(item_id)

    elemento.innerHTML = askinput("Editar item")
}

function crud_delete(e) {
    if (window.confirm("Apagar item?")) {
        const item_id = e.target.dataset.itemid
        const elemento = document.getElementById(item_id)
        elemento.remove()
    }
}