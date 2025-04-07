async function fetchJobs() {
    let response = await fetch('http://localhost:5000/jobs');
    let jobs = await response.json();

    let jobList = document.getElementById("job-list");
    jobList.innerHTML = "";

    jobs.forEach(job => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${job.title}</strong> at ${job.company} - ${job.location} <br>
            <em>${job.description}</em><br>
            <strong>Vacancies:</strong> ${job.vacancies} <br>
            <button onclick="applyJob('${job._id}')">Apply</button>
        `;
        jobList.appendChild(li);
    });
}

async function applyJob(jobId) {
    let response = await fetch('http://localhost:5000/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId })
    });

    let result = await response.json();
    
    let messageBox = document.getElementById("success-message");
    messageBox.classList.remove("hidden");
    setTimeout(() => {
        messageBox.classList.add("hidden");
    }, 3000);
}

window.onload = fetchJobs;
