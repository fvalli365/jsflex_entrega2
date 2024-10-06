/////////////////////////////////////////////////////
// Aplicación de e-commerce de libros de computación
/////////////////////////////////////////////////////


const base = [
    {
        id : 1,
        lenguaje : "python",
        titulo : "Python for Data Science: A Hands-On Introduction",
        autor : "Yuli Vasiliev",
        anio : "2022",
        precio : 55,
        imagen : "./img/python01.jpg"
    },
    {
        id : 2,
        lenguaje : "python",
        titulo : "Python Crash Course, 2nd Edition",
        autor : "Eric Matthes",
        anio : "2019",
        precio : 56,
        imagen : "./img/python02.jpg"
    },
    {
        id : 3,
        lenguaje : "python",
        titulo : "The Big Book of Small Python Projects: 81 Easy Practice Programs",
        autor : "Al Sweigart",
        anio : "2021",
        precio : 57,
        imagen : "./img/python03.jpg"
    },
    {
        id : 4,
        lenguaje : "python",
        titulo : "Impractical Python Projects: Playful Programming Activities ",
        autor : "Lee Vaughan",
        anio : "2018",
        precio : 58,
        imagen : "./img/python04.jpg"
    },
    {
        id : 5,
        lenguaje : "python",
        titulo : "Serious Python",
        autor : "Julien Danjou",
        anio : "2018",
        precio : 59,
        imagen : "./img/python05.jpg"
    },

    {
        id : 6,
        lenguaje : "javascript",
        titulo : "JavaScript Crash Course",
        autor : "Nick Morgan",
        anio : "2024",
        precio : 65,
        imagen : "./img/js01.jpg"
    },    
    {
        id : 7,
        lenguaje : "javascript",
        titulo : "JavaScript for Kids: A Playful Introduction to Programming",
        autor : "Nick Morgan",
        anio : "2014",
        precio : 66,
        imagen : "./img/js02.jpg"
    },    
    {
        id : 8,
        lenguaje : "javascript",
        titulo : "Eloquent JavaScript, 4th Edition",
        autor : "Marijn Haverbeke",
        anio : "2024",
        precio : 67,
        imagen : "./img/js03.jpg"
    },    
    {
        id : 9,
        lenguaje : "javascript",
        titulo : "La Guia Básica de JavaScript",
        autor : "Miguel A. Arias",
        anio : "2013",
        precio : 68,
        imagen : "./img/js04.jpg"
    },    
    {
        id : 10,
        lenguaje : "javascript",
        titulo : "Creación de componentes en JavaScript Curso practico",
        autor : "Pablo E. Fernández Casado",
        anio : "2023",
        precio : 69,
        imagen : "./img/js05.jpg"
    },    

    {
        id : 11,
        lenguaje : "sql",
        titulo : "SQL para Principiantes",
        autor : "Preston Prescott",
        anio : "2015",
        precio : 75,
        imagen : "./img/sql01.jpg"
    },    
    {
        id : 12,
        lenguaje : "sql",
        titulo : "Aprende SQL",
        autor : "María Mercedes Marqués Andrés, Gregorio Quintana Ortí",
        anio : "2008",
        precio : 76,
        imagen : "./img/sql02.jpg"
    },    
    {
        id : 13,
        lenguaje : "sql",
        titulo : "Practical SQL, 2nd Edition",
        autor : "Anthony DeBarros",
        anio : "2022",
        precio : 77,
        imagen : "./img/sql03.jpg"
    },   
    
    {
        id : 14,
        lenguaje : "c++",
        titulo : "Programación orientada a objetos con C++, 5ª edición.",
        autor : "Fco. Javier Ceballos Sierra",
        anio : "2020",
        precio : 85,
        imagen : "./img/c++01.jpg"
    },    
    {
        id : 15,
        lenguaje : "c++",
        titulo : "C/C++ Curso de programación. 5a. Edición",
        autor : "Francisco Javier Ceballos",
        anio : "2022",
        precio : 86,
        imagen : "./img/c++02.jpg"
    }, 
    {
        id : 16,
        lenguaje : "c++",
        titulo : "C++ cómo programar",
        autor : "Harvey M. Deitel, Paul J. Deitel",
        anio : "2015",
        precio : 87,
        imagen : "./img/c++03.jpg"
    },    

    {
        id : 17,
        lenguaje : "c#",
        titulo : "Aprende a programar en C#",
        autor : "Ángel Arias",
        anio : "2014",
        precio : 95,
        imagen : "./img/cs01.jpg"
    },   
    {
        id : 18,
        lenguaje : "c#",
        titulo : "Microsoft C#. Lenguaje y Aplicaciones. 2ª Edición.",
        autor : "Fco. Javier Ceballos Sierra",
        anio : "2007",
        precio : 96,
        imagen : "./img/cs02.jpg"
    }
] 

console.log(base)

let boton=document.getElementById("boton_busc")

let a = 0

let resultados = []

let libros_agregados = []
let precios_agregados = []
let cant_libros = 0

// Guarda en localStorage

localStorage.setItem('carrito_items',libros_agregados)
localStorage.setItem('carrito_precios',precios_agregados)
localStorage.setItem('cant_productos',cant_libros)


function disp_result() {
    let ele=document.getElementById("mensaje");
    ele.innerHTML = ""
    let eleb=document.getElementsByClassName("costo_carrito");
    if (eleb) {
        eleb.innerHTML = ""
    }
    let elec=document.getElementsByClassName("boton_comprar");
    if (elec) {
        elec.innerHTML = ""
    }

    texto=document.getElementById("lenguaje").value
    let salida=document.getElementById("resultado")
    switch (texto.toLowerCase()) {
        case "python":
            a=base.filter(e => e.lenguaje == "python")
            salida.innerHTML="Mostrando "+ a.length +" resultados de Python"
            resultados=mostrar_libros(a)
            break
        case "javascript":
            a=base.filter(e => e.lenguaje == "javascript")
            salida.innerHTML="Mostrando "+ a.length +" resultados de Javascript"
            resultados=mostrar_libros(a)
            break
        case "sql":
            a=base.filter(e => e.lenguaje == "sql")
            salida.innerHTML="Mostrando "+ a.length +" resultados de SQL"
            resultados=mostrar_libros(a)
            break
        case "c++":
            a=base.filter(e => e.lenguaje == "c++")
            salida.innerHTML="Mostrando "+ a.length +" resultados de C++"
            resultados=mostrar_libros(a)
            break
        case "c#":
            a=base.filter(e => e.lenguaje == "c#")
            salida.innerHTML="Mostrando "+ a.length +" resultados de C#"
            resultados=mostrar_libros(a)
            break
        default:
            salida.innerHTML="No encontrado. Ingrese nuevamente"
    }
}

function mostrar_libros(libros) {
    let etiq = document.getElementById("resultado")
    for (let libro of libros) {

        const ele = document.createElement("div");
        ele.className = "product_container";
        texto1 = libro.titulo
        texto2 = libro.autor
        texto3 = libro.anio
        texto4 = libro.precio
        texto5 = libro.imagen
        texto6 = libro.id

        ele.innerHTML=`<div class="elemento_2"><img src=${texto5} /></div>
                        <div class="elemento_2">
                        <b>Título:</b> ${texto1}<br>
                        <b>Autor:</b> ${texto2}<br>
                        <b>Año:</b> ${texto3}<br>
                        <b>Precio:</b> ${texto4}<br>
                        <button class="elemento_2" type="button" id="${texto6}" onclick="agrega(${texto6})">Agregar al carrito</button>
                        </div>`

        etiq.appendChild(ele)
    }
}

function agrega(id_agregado) {
    console.log(id_agregado);
    cant_libros++;
    libros_agregados.push(id_agregado)
    precios_agregados.push(base[id_agregado-1].precio)
}


function muestra_carrito() {
    let mmc=document.getElementById("resultado");
    let numb=document.getElementById("resultado");
    for (let i=numb.length;i>=1;i--) {
        numb[i].remove()
    }

    if (cant_libros==0) {
        mmc.innerHTML = "No hay libros seleccionados"
    } else {
        mmc.innerHTML = "Mostrando libros seleccionados"
        lista=document.querySelectorAll(".elemento_2");
        for (l of lista) {
            l.remove()
        }

        let costo=0

        for (libro of libros_agregados) {
            const ele = document.createElement("div");
            ele.className = "product_container";
            texto1 = base[libro-1].titulo
            texto2 = base[libro-1].autor
            texto3 = base[libro-1].anio
            texto4 = base[libro-1].precio
            texto5 = base[libro-1].imagen
            texto6 = base[libro-1].id
            costo = costo + base[libro-1].precio
    
            ele.innerHTML=`<div><img src=${texto5} /></div>
                            <div class="elemento_2 carrito">
                            Título: ${texto1}<br>
                            Autor: ${texto2}<br>
                            Año: ${texto3}<br>
                            Precio: ${texto4}<br>
                            </div>`
    
            mmc.appendChild(ele)
        }
        cost=document.createElement("div");
        cost.setAttribute("class", "costo_carrito");
        cost.innerHTML="Costo total: " + costo + " dólares"
        mmc.appendChild(cost)

        let bc1=document.getElementById("boton_comprar")
        // compra=document.createElement("div")
        // compra.innerHTML = `<button id="boton_compra" type="button" onclick="efectua_compra()">Comprar</button>`
        // mmc.appendChild(compra)
        bc1.innerHTML = `<button id="boton_compra" type="button" onclick="efectua_compra()">Comprar</button>`
    }
}

function efectua_compra() {

    // Guarda los datos en el localStorage
    localStorage.setItem('carrito_items',libros_agregados)
    localStorage.setItem('carrito_precios',precios_agregados)
    localStorage.setItem('cant_productos',cant_libros)    

    let ele=document.getElementById("mensaje");
    ele.innerHTML = "Muchas gracias !!!"

    libros_agregados.length = 0
    precios_agregados.length = 0
    cant_libros = 0
}