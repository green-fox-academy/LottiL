const createTableRow = (bookinfo) => `
  <tr>
    <td>${bookinfo.book_name}</td>
    <td>${bookinfo.aut_name}</td>
    <td>${bookinfo.cate_descrip}</td>
    <td>${bookinfo.pub_name}</td>
    <td>${bookinfo.book_price}</td>
  </tr>
`;

const retrieveBooks = async () => {
    const resource = '/api/allBooks';
    const response = await fetch(resource);
    const data = await response.json();

    if (!response.ok) {
        showError(`GET ${resource}`, data.message);
        return;
    }


    const rows = data.map(createTableRow);
    document.querySelector('#book-rows').innerHTML = rows.join('');
};

window.addEventListener('DOMContentLoaded', () => {
    retrieveBooks();
});