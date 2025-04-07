const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: String
});

module.exports = mongoose.model('Application', applicationSchema);
