const app = require('./src/config/server');
const database = require('./src/config/database');
const port = 3000;

app.listen(port, () => {
	console.log(`Online server on port ${port}`);
});
