var medicamentos = [];

function addMedicamento() {
    event.preventDefault();
    let medicamento = {
        nome: document.querySelector("#nome").value,
        quantidade: document.querySelector("#quantidade").value,
        classe: document.querySelector("#classeMed").value

    }
    medicamentos.push(medicamento);

    document.querySelector("#nome").value = "";
    document.querySelector("#quantidade").value = "";
    document.querySelector("#classeMed").value = "";
 
    renderTable()
}

function renderTable () {
    let table = document.querySelector("#table")
    table.innerHTML = `<tr>  
    <th>ID</th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>
    </tr>`
    for(let i = 0; i < medicamentos.length; i++ ) {
     table.innerHTML += `<tr>  
     <td>${i}</td>
     <td>${medicamentos[i].nome}</td>
     <td>${medicamentos[i].quantidade}</td>
     <td>${medicamentos[i].classe}</td>
     <td><img src="remover.png" widht="27px" height="25px" onclick="removeMed(${i})"></td>
     </tr>`   

    }    
}

function removeMed(index){
    medicamentos.splice(index,1);
    renderTable();
}