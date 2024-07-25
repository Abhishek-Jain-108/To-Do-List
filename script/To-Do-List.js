let todolist = [];


function render_list()
{
    let list='';

    for(let i=todolist.length-1;i>=0;i--)
        {
            let items = `
            <div>${todolist[i].name}</div>
            <div>${todolist[i].dateelement}</div>
            <div><button onclick="todolist.splice(${i}, 1);render_list();" class="css-delete-button">Delete</button></div>`;
            list += items;
        }
    
    document.querySelector('.js-todo').innerHTML=list;

    localStorage.setItem('todolist', JSON.stringify(todolist));
}

function addtodo()
{
    let inputelement = document.querySelector('.js-name-input').value.toUpperCase();;
    let dateelement = document.querySelector('.js-date-input').value;

    

    todolist.push({name:inputelement,dateelement:dateelement});
    
    render_list();

    document.querySelector('.js-name-input').value='';
    document.querySelector('.js-date-input').value='';

}

function load_todolist() 
{
    const storedList = localStorage.getItem('todolist');
    if (storedList) {
        todolist = JSON.parse(storedList);
    }
    render_list();
}

function onenter()
{
    if(event.key==='Enter')addtodo();
}

window.onload = load_todolist;