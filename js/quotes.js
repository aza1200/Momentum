const URL = "https://api.adviceslip.com/advice"

 fetch(URL).then(response => response.json().then(data =>{
        const advice = data['slip'].advice;
        const quote = document.querySelector("#quote span:first-child");
        quote.innerText = advice;
    })
 );