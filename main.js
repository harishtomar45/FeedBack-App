let ul = document.querySelector("ul");
let form = document.querySelector("form");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");


const saveTodoApp = (e)=> {
   
    e.preventDefault();

    let li = document.createElement("li");
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
h2.innerText = "Rating :-  " + select.value;
    h3.innerText = "Comment :- " + textarea .value;
li.appendChild(h2);
li.appendChild(h3);
    li.className = "list-group-item";

    let deltbtn = document.createElement('button');
    deltbtn.innerText = "Delete";
    deltbtn.className = "btn btn-danger float-end btn-sm";
    li.appendChild(deltbtn);
    ul.appendChild(li);


    form.reset();

};

form.addEventListener("submit", saveTodoApp);



const deleteElement = (e)=> {
    if(e.target.className.includes("btn-danger")){
        if(window.confirm("Are You Sure!!")){
            ul.removeChild(e.target.parentElement);
        }
    }
}

ul.addEventListener("click", deleteElement);
