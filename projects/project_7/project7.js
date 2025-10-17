const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) =>{
    insert.innerHTML = `
    <div class='color'>
     <table>
        <tr>
            <th style="margin:2px solid black";>Key</th>
            <th>keyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
     </table>
    </div>
    `
})