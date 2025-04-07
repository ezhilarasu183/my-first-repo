// admin.js
const validAdmins = [
    { username: 'EZHILARASU143', password: 'EZHILARASU143' },
    { username: 'GOWTHAM143', password: 'GOWTHAM143' }
  ];
  
  function loginAdmin() {
    const user = document.getElementById('adminUsername').value;
    const pass = document.getElementById('adminPassword').value;
  
    const isValid = validAdmins.some(
      admin => admin.username === user && admin.password === pass
    );
  
    if (isValid) {
      alert('✅ Logged in successfully');
      document.getElementById('adminPanel').classList.remove('hidden');
    } else {
      alert('❌ Invalid credentials');
    }
  }
  
  function addJob() {
    const jobData = {
      title: document.getElementById('jobTitle').value,
      company: document.getElementById('company').value,
      location: document.getElementById('location').value,
      description: document.getElementById('description').value,
      vacancies: parseInt(document.getElementById('vacancies').value)
    };
  
    fetch('http://localhost:5000/add-job', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          document.getElementById('jobAddedMsg').classList.remove('hidden');
          setTimeout(() => {
            document.getElementById('jobAddedMsg').classList.add('hidden');
          }, 3000);
        } else {
          alert('Failed to add job');
        }
      })
      .catch(err => console.error('Error:', err));
  }
  