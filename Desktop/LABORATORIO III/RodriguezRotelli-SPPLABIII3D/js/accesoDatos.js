const url = "http://localhost:3000/monstruos";
const $loader = document.getElementById("spinner");

export const getMonstruos = async () => {
   try {
       let res = await fetch(url);
       if (!res.ok) throw Error(`Error: ${res.status}. ${res.statusText}`);
       return await res.json();
   } catch (err) {
       alert(err.message);
   }
}

export const createMonstruo = async (monstruo) => {
   $loader.classList.remove("ocultar");
   try {
       let res = await fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json;charset=utf-8'
           },
           body: JSON.stringify(monstruo)
       });
       if (!res.ok) throw Error(`Error: ${res.status}. ${res.statusText}`);
       const data = await res.json();
       $loader.classList.add("ocultar");
       return data;
   } catch (err) {
       alert(err.message);
   }
}

export const deleteMonstruo = async (id) => {
   $loader.classList.remove("ocultar");
   try {
       let res = await fetch(url + "/" + id, {
           method: 'DELETE'
       });
       if (!res.ok) throw Error(`Error: ${res.status}. ${res.statusText}`);
       const data = await res.json();
       $loader.classList.add("ocultar");
       return data;
   } catch (err) {
       alert(err.message);
   }
}

export const updateMonstruo = async (id, monstruo) => {
   $loader.classList.remove("ocultar");
   try {
       let res = await fetch(url + "/" + id, {
           method: 'PUT',
           headers: {
               'Content-Type': 'application/json;charset=utf-8'
           },
           body: JSON.stringify(monstruo)
       });
       if (!res.ok) throw Error(`Error: ${res.status}. ${res.statusText}`);
       const data = await res.json();
       $loader.classList.add("ocultar");
       return data;
   } catch (err) {
       alert(err.message);
   }
}