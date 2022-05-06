//import {Plotly} from './node_modules/plotly.js-dist';

/* import { Plotly } from 'plotly.js-dist';
Plotly = require('plotly.js-distr'); */

const createTableRow = (app) => `
  <tr>
    <td>${app.dt}</td>
    <td>${app.what}</td>
    <td>${app.place}</td>
  </tr>
`;

const filterByDate = async (event) => {
    const resource = '/api/filter';
    //const response = await fetch(resource);
    //const data = await response.json();

    const requestData = {
        from: document.querySelector('#from').value,
        to: document.querySelector('#to').value
    };

    const response = await fetch(`${resource}?from=${requestData.from}&to=${requestData.to}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        //window.alert(`GET ${resource}`, data.message);
        console.log(`GET ${resource}`, data.message);
        return;
    }

    const rows = data.map(createTableRow);
    console.log(rows)
    document.querySelector('#data-rows').innerHTML = rows.join('');
    //document.querySelector('#result').innerHTML = JSON.stringify(data, null, 4); //itt lehetne a data-n végigmenni (foreach)
};

const handleClick = (event, peeOrPoo) => {
    event.preventDefault();
    createSubmitHandler('POST', '/api/new_output', peeOrPoo)(event);
};

const createSubmitHandler = (method, resource, peeOrPoo) => async (event) => {
    event.preventDefault();

    const requestData = {
        dt: document.querySelector('#when').value,
        what: peeOrPoo,
        place: document.querySelector('#where').value,
    };

    const response = await fetch(resource, {
        method: method,
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const responseData = await response.json();

    if (!response.ok) {
        console.error(responseData.message)
        return;
    }
};

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#search').onclick = filterByDate;
    document.querySelector('#pee').onclick = (event) => { handleClick(event, 'pee') };
    document.querySelector('#poo').onclick = (event) => { handleClick(event, 'poo') };
    document.querySelector('#both').onclick = (event) => { handleClick(event, 'both') };

/*     const TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } ); */
});