

let url = "https://jsonplaceholder.typicode.com/photos";

function getData(url){
    const req = new XMLHttpRequest();

    req.onreadystatechange = function(){

        const data = req.responseData;
        console.log(data);

    };

    req.open("GET", url, true);
}

getData(url);