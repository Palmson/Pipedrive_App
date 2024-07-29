document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('deal-id').value = 1; 
});

document.getElementById('job-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const formData = {
    dealId: document.getElementById('deal-id').value,
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    jobType: document.getElementById('job-type').value,
    jobSource: document.getElementById('job-source').value,
    jobDescription: document.getElementById('job-description').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zipCode: document.getElementById('zip-code').value,
    area: document.getElementById('area').value,
    startDate: document.getElementById('start-date').value,
    startTime: document.getElementById('start-time').value,
    endTime: document.getElementById('end-time').value,
    techSelect: document.getElementById('tech-select').value,
  };

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    if (result.success) {
      alert('Form submitted successfully!');
    } else {
      alert('Error submitting form: ' + result.error);
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
});
