let URL = 'http://localhost:5000/api/pacientes/' 
export async function getPaciente (){
    const res = await fetch(URL);
    return await res.json();
}

export async function getByIdPaciente (id){
    const res = await fetch(URL + id);
    return await res.json();
}


export async function savePaciente (data){
    fetch(URL,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function updatePaciente (id,data){
    fetch(URL + id,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    return true
}

export async function destroyPaciente(id){
    fetch(URL + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return true
}