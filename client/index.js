async function main() {
    buttonlink();
    
}
function buttonlink(){
    const form = document.querySelector('.icon-wrapper');
    form.addEventListener('click',click);
}
async function click(event) {
    let keyword = document.querySelector('#search-field').value;
    console.log(keyword);

    fetch(`http://localhost:3000/autocomplete?keyword=${keyword}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            const keywordlist = document.querySelector('.autocomplete-results');
            keywordlist.innerHTML='';
            for (var i = 0; i < myJson.length; i++) {
                const result_list = document.createElement('li');
                result_list.innerHTML = `${myJson[i]}`;
                keywordlist.append(result_list);
                console.log(myJson[i]);
            }
        });
}
document.addEventListener('DOMContentLoaded', main);
