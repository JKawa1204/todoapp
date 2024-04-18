const express = require('express');
const cors = require('cors');
const { createtodo } = require('./types');
const { todo } = require('./db');
const app = express();


app.use(express.json());
app.use(cors({}));

app.post('/todos', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createtodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            'msg': 'You have given the wrong inputs.'
        });
        return;
    }

    try {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });

        res.json({
            'msg': 'Todo is created.'
        });
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({
            'msg': 'Error creating todo.'
        });
    }
});

app.get('/todos', async function(req, res) {
    try {
        const todos = await todo.find();
        res.json({ todos });
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({
            'msg': 'Error fetching todos.'
        });
    }
});

app.put('/completed', async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = createtodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            'msg': 'You have given the wrong inputs.'
        });
        return;
    }

    try {
        await todo.findByIdAndUpdate(req.body._id, { completed: true });
        res.json({
            'msg': 'Todo marked as completed.'
        });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({
            'msg': 'Error updating todo.'
        });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
