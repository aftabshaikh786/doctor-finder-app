async function searchDoctor() {
  const searchQuery = document.getElementById('searchInput').value.trim(); // Get the search term and remove extra spaces
  const response = await fetch(`http://localhost:5000/api/doctors?specialization=${encodeURIComponent(searchQuery)}`);
  
  if (response.ok) {
    const data = await response.json();
    if (Array.isArray(data)) {
      displayDoctors(data);
    } else {
      console.error('Invalid data format received.');
    }
  } else {
    console.error('Error fetching doctors:', response.status);
  }
}

function displayDoctors(doctors) {
  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = ''; // Clear previous results

  if (doctors.length === 0) {
    resultDiv.innerHTML = 'No doctors found for this search.';
    return;
  }

  doctors.forEach(doctor => {
    const doctorDiv = document.createElement('div');
    doctorDiv.classList.add('doctor');
    doctorDiv.innerHTML = `
      <h3>${doctor.name}</h3>
      <p><strong>Specialization:</strong> ${doctor.specialization.join(', ')}</p>
      <p><strong>Contact:</strong> ${doctor.contact}</p>
      <p><strong>Address:</strong> ${doctor.address}</p>
    `;
    resultDiv.appendChild(doctorDiv);
  });
}
