const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sgt'
});

connection.connect((err) => {
    if (err) {
        console.log('There was an error: ', err)
    }else{
        console.log('Connected to database');
    }
});

//RETRIEVE STUDENT DATA
app.get('/students', (req, res, next) => {
    let query = 'SELECT * FROM ?? WHERE status = 1';
    let inserts = ['student_data'];
    let sql = mysql.format(query, inserts);

    connection.query(sql, (err, results, fields) => {
        if(err) return next(err);

        const output = {
            success: true,
            data: results
        }
        res.json(output);
    })
})

//RETRIEVE TEACHER DATA
app.get('/teachers', (req, res, next) => {
    let query = 'SELECT * FROM ?? WHERE status = 1';
    let inserts = ['teacher_data'];
    let sql = mysql.format(query, inserts);

    connection.query(sql, (err, results, fields) => {
        if(err) return next(err);

        const output = {
            success: true,
            data: results
        }
        res.json(output);
    })
})

//INSERT STUDENT TO TABLE
app.post('/students/addstudent', (req, res, next) => {
    const { name, grade, course_name } = req.body;

    let query = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?)';
    let inserts = ['student_data', 'name', 'grade', 'course_name', name, grade, course_name];

    let sql = mysql.format(query, inserts);
    console.log("This is the formatted SQL", sql);
    connection.query(sql, (err, results, fields) => {
        if (err) return next(err);
        const output = {
            success : true,
            data: results
        }
        res.json(output);
    })
})

//INSERT TEACHER TO TABLE
app.post('/students/addteacher', (req, res, next) => {
    const { name, course_name, class_size } = req.body;

    let query = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?)';
    let inserts = ['teacher_data', 'name', 'course_name', 'class_size', name, course_name, class_size];

    let sql = mysql.format(query, inserts);
    console.log("This is the formatted SQL", sql);
    connection.query(sql, (err, results, fields) => {
        if (err) return next(err);
        const output = {
            success : true,
            data: results
        }
        res.json(output);
    })
})

//SOFT DELETE SELECTED STUDENT FROM TABLE
app.post('/students/delete', (req, res, next) => {
    const { id } = req.body;

    let query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    let inserts = ['student_data', 'status', '0', 'id', id];

    let sql = mysql.format(query, inserts);
    console.log("This is the formatted SQL", sql);
    connection.query(sql, (err, results, fields) => {
        if (err) return next(err);
        const output = {
            success : true,
            data: results
        }
        res.json(output);
    })
});

//SOFT DELETE SELECTED TEACHER FROM TABLE
app.post('/teachers/delete', (req, res, next) => {
    const { id } = req.body;

    let query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    let inserts = ['teacher_data', 'status', '0', 'id', id];

    let sql = mysql.format(query, inserts);
    console.log("This is the formatted SQL", sql);
    connection.query(sql, (err, results, fields) => {
        if (err) return next(err);
        const output = {
            success : true,
            data: results
        }
        res.json(output);
    })
});

//EDIT STUDENT IN TABLE
app.post('/students/edit', (req, res, next) => {
    const { id, name, course, grade } = req.body;

    let query = 'UPDATE ?? SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?'
    let inserts = ['student_data', 'name', name, 'course_name', course, 'grade', grade, 'id', id]

    let sql = mysql.format(query, inserts);
    console.log('This is the formatted SQl', sql);
    connection.query(sql, (err, results, fields) => {
        if(err) return next(err)
        const output = {
            success: true,
            data: results
        }
        res.json(output)
    })
})


app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});