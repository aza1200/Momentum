search = document.querySelector("#jsSearch");
const searchInput = search.querySelector("input");
function onHandleSearch(event){
    console.log(search);
    event.preventDefault();
    const url = `https://www.google.com/search?q=${searchInput.value}`;
    window.location.href = url;
}

search.addEventListener("submit",onHandleSearch);