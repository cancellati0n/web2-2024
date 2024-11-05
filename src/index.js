const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const students = [
    {id: 1, name: 'Badalov Alexei', age: 23 },
    {id: 2, name: 'Cusnirov Maxim', age: 22 },
]

app.get('/students', (req, res) => {
    res.send(students)
})

app.get('/students/:id', (req, res) => {
  const students = students.find(student => student.id === parseInt(req.params.id))
  if (!student) {
    return res.status(404).send({ message: 'Student not found'})
  }
  res.send(student)
})

app.post('/students', (req, res) => {
    console.log(req.body)
    const student = {
        id: students.lenght + 1,
        name: req.body.name,
        age: req.body.age,
    }
    students.push(student)
    res.send(student)
})

app.delete('/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id))
    if (!student) {
        return res.status(404). send ({ message: 'Student not found'})
    }
    const index = students.indexOf(student)
    students.splice(index, 1)
    res.send(student)
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})