const mongoose = require('mongoose');
const Job = require('./models/jobModel'); // Import Job model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobPortal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error:", err));

// Sample job data
const jobs = [
    { title: "Software Developer", company: "Google", location: "Bangalore", description: "Develop high-quality software.", vacancies: 10 },
    { title: "AI Engineer", company: "Microsoft", location: "Hyderabad", description: "Work on AI models and solutions.", vacancies: 10 },
    { title: "Frontend Developer", company: "Amazon", location: "Chennai", description: "Build user interfaces.", vacancies: 10 },
    { title: "Cloud Engineer", company: "IBM", location: "Pune", description: "Develop cloud solutions.", vacancies: 10 },
    { title: "Cybersecurity Analyst", company: "Cisco", location: "Delhi", description: "Monitor security threats.", vacancies: 10 },
    { title: "Full Stack Developer", company: "Facebook", location: "Mumbai", description: "Develop front-end and back-end applications.", vacancies: 10 },
    { title: "Data Scientist", company: "Tesla", location: "Hyderabad", description: "Analyze and process data for AI models.", vacancies: 10 },
    { title: "DevOps Engineer", company: "Red Hat", location: "Kolkata", description: "Automate deployment and CI/CD.", vacancies: 10 },
    { title: "Blockchain Developer", company: "Ripple", location: "Bangalore", description: "Develop decentralized applications.", vacancies: 10 },
    { title: "Embedded Systems Engineer", company: "Intel", location: "Noida", description: "Develop hardware-integrated software.", vacancies: 10 }
];

// Insert jobs into MongoDB
const insertJobs = async () => {
    try {
        await Job.insertMany(jobs);
        console.log("✅ Jobs added successfully!");
        mongoose.connection.close(); // Close connection after insertion
    } catch (err) {
        console.error("❌ Error adding jobs:", err);
    }
};

insertJobs();
