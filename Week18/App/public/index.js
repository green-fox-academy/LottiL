//import {Plotly} from './node_modules/plotly.js-dist';

/* import { Plotly } from 'plotly.js-dist';
Plotly = require('plotly.js-distr'); */

const createTableRow = (app) => `
  <tr>
    <td>${new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
}).format(new Date(app.dt))
    }</td>
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

    const response = await fetch(`${resource}?from=${requestData.from}&to=${requestData.to}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        //window.alert(`GET ${resource}`, data.message);
        console.log(`GET ${resource}`, data.message);
        return;
    }

    const rows = data.map(createTableRow);
    document.querySelector('#data-rows').innerHTML = rows.join('');
    const diagram = document.getElementById('graphical');
    const x1 = crateDataForGraph(data, 'pee', 'diaper');
    const x2 = crateDataForGraph(data, 'pee', 'toilet');
    const x3 = crateDataForGraph(data, 'poo', 'diaper');
    const x4 = crateDataForGraph(data, 'poo', 'toilet');
    const millisecondInADay = 1000 * 60 * 60 * 24;
    const layout = {
        margin: { t: 0 },
        bargap: 0.05,
    };
    const peeToDiaper = {
        x: x1,
        name: "pee to diaper",
        type: "histogram",
        xbins: {
            end: x1[x1.length - 1],
            size: millisecondInADay,
            start: x1[0]
        }
    }
    const peeToToilet = {
        x: x2,
        name: "pee to toilet",
        type: "histogram",
        xbins: {
            end: x2[x2.length - 1],
            size: millisecondInADay,
            start: x2[0]
        }
    }
    const pooToDiaper = {
        x: x3,
        name: "poo to diaper",
        type: "histogram",
        xbins: {
            end: x3[x3.length - 1],
            size: millisecondInADay,
            start: x3[0]
        }
    };

    const pooToToilet = {
        x: x4,
        name: "poo to toilet",
        type: "histogram",
        xbins: {
            end: x4[x4.length - 1],
            size: millisecondInADay,
            start: x4[0]
        }
    };
    const graphData = [peeToDiaper, peeToToilet, pooToDiaper, pooToToilet];
    Plotly.newPlot(diagram, graphData, layout);
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
    document.querySelector('#both').onclick = (event) => { handleClick(event, 'pee'); handleClick(event, 'poo') };
});

function crateDataForGraph(data, peeOrPoo, where) {
    let newArray = [];
    data.forEach(e => {
        if (e.what === peeOrPoo && e.place === where) {
            newArray.push(e.dt);
        }
    });
    return newArray;
}