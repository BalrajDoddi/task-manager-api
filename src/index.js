const express = require('express');
require('./db/mongoose');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/users', require('./routers/users'));
app.use('/tasks', require('./routers/tasks'));

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
