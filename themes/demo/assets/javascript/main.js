const request = new XMLHttpRequest();
const url = 'parse/parse.php';
request.responseType =	"json";
request.open('POST', url);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        let obj = request.response.channel.item;

        for (let i = 0; i < obj.length; i++) {
            let tableRow = document.createElement('tr');
    
            let title = document.createElement('td');
            title.className = 'title';
            title.innerHTML = obj[i].title + ' / KZT';
            tableRow.appendChild(title);
    
            let value = document.createElement('td');
            value.className = 'value';
            value.innerHTML = obj[i].description;
            tableRow.appendChild(value);

            let change = document.createElement('td');
            change.className = 'value';
            if (obj[i].index == 'UP') {
                change.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>'
            } else {
                change.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-caret-up-fill" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>';
            }
            tableRow.appendChild(change);

            let table = document.getElementById('exchangeRates').querySelector('tbody');
            table.appendChild(tableRow);
        }
    }
});
request.send();