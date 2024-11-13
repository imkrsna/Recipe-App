// importing modules
const config = require('./utils/config');
const logger = require('./utils/logger');

// importing server
const app = require('./app');

// starting server
app.listen(config.PORT, () => logger.info(`Server running at port: ${PORT}`));