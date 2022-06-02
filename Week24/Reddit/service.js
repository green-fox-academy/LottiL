const conn = require('./db')

const up = 1;
const down = 0;

module.exports = {
    vote,
    up,
    down
}

function vote(req, res, upOrDown) {
    const id = Number(req.params.id);

    if (isNaN(id)){
        res.status(400).send({message: 'Invalid id'});
        return
    }

    let operator = "";

    if (upOrDown === up) {
        operator = "+"
    } else if (upOrDown === down) {
        operator = "-"
    }

    const query1 = 
    `UPDATE posts 
    SET score = score ${operator} 1
    WHERE id = ?
    `;    

    const params1 = [id];

    conn.query(query1, params1, (err, result1) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        }
        if (result1.affectedRows === 0) {
            res.status(404).send({ message: 'not found' });
            return;
        }

        const query2 = `
        SELECT * FROM posts 
        WHERE id = ?
        `;

        const params2 = [id];

        conn.query(query2, params2, (err, result2) => {
            if (err) {
                console.error(err);
                res.status(500).send({ message: err.sqlMessage });
                return;
            }

            res.status(200).send(
                result2[0]
            );
        });
    });
}