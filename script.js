var text = document.getElementById('type-txt');
var btn = document.getElementById('add-btn');
var unorder = document.getElementById('unorder');

btn.addEventListener('click',()=>{
    if(text.value === ''){
        alert('type somthing here the text');
    }
    else{
        var list = document.createElement('li');
        list.setAttribute('id','marked')
        list.innerHTML = `<p> ${text.value}</p> <i id='del'  class="fa-solid fa-trash"></i>`;
        unorder.append(list);
    }
    text.value = '';
    showList();
})

unorder.addEventListener('click',(e)=>{
    if(e.target.tagName === 'P'){
        e.target.classList.toggle('checked');
        showList();
    }
    else if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
        showList();
    }
    console.log(e);
});
function showList(){
    localStorage.setItem('data',unorder.innerHTML);
}
function showdata(){
    unorder.innerHTML = localStorage.getItem('data');
}
showdata();