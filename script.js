function calculateQuartiles(data) {
    data.sort((a, b) => a - b);
  
    const q1 = data[Math.floor((data.length / 4))];
    const q2 = data[Math.floor((data.length / 2))];
    const q3 = data[Math.floor((3 * data.length) / 4)];
  
    return { q1, q2, q3 };
  }
  
  document.getElementById('quartiles-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const dataInput = document.getElementById('data-input').value;
    const data = dataInput.split(',').map(Number);
  
    const quartiles = calculateQuartiles(data);
  
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <p>Q1: ${quartiles.q1}</p>
      <p>Q2: ${quartiles.q2}</p>
      <p>Q3: ${quartiles.q3}</p>
    `;
  });
