let uniqueId = 0;

function parseComplex(str) {
  const [re, im] = str.split('+').map(parseFloat);
  return math.complex(re, im || 0);
}

function addLoadPoint(location = '', P = '', Q = '') {
  const currentCount = document.querySelectorAll('.load-group').length;
  const newId = uniqueId++;
  const container = document.createElement('div');
  container.className = 'load-group';
  container.dataset.id = newId;

  container.innerHTML = `
    <label>Load Point ${currentCount + 1}</label>
    <input type="number" placeholder="Location (m)" value="${location}" class="loc">
    <input type="number" placeholder="Real Power P (W)" value="${P}" class="P">
    <input type="number" placeholder="Reactive Power Q (VAR)" value="${Q}" class="Q">
    <button class="remove-btn" onclick="removeLoadPoint(${newId})">Remove</button>
  `;

  document.getElementById('loadInputs').appendChild(container);
  updateLoadLabels();
}

function removeLoadPoint(id) {
  const allGroups = document.querySelectorAll('.load-group');
  allGroups.forEach(group => {
    if (parseInt(group.dataset.id) === id) {
      group.remove();
    }
  });
  updateLoadLabels();
}

function updateLoadLabels() {
  const groups = document.querySelectorAll('.load-group');
  groups.forEach((group, index) => {
    const label = group.querySelector('label');
    label.textContent = `Load Point ${index + 1}`;
  });
}

function calculate() {
  const Vs = math.complex(parseFloat(document.getElementById("Vs").value));
  const z = parseComplex(document.getElementById("zperunit").value);

  const containers = document.querySelectorAll('.load-group');
  const loadPoints = [];

  containers.forEach(group => {
    const loc = parseFloat(group.querySelector('.loc').value);
    const P = parseFloat(group.querySelector('.P').value);
    const Q = parseFloat(group.querySelector('.Q').value);
    if (!isNaN(loc) && !isNaN(P) && !isNaN(Q)) {
      loadPoints.push({ location: loc, P, Q });
    }
  });

  loadPoints.sort((a, b) => a.location - b.location);

  const voltages = [];
  const currents = [];
  let Itotal = math.complex(0);

  for (let i = loadPoints.length - 1; i >= 0; i--) {
    const { P, Q } = loadPoints[i];
    const S = math.complex(P, Q);
    const Vload = Vs;
    const I = math.divide(math.conj(S), Vload);
    currents.unshift(math.add(I, Itotal));
    Itotal = math.add(Itotal, I);
  }

  let V = Vs;
  let prevLoc = 0;
  for (let i = 0; i < loadPoints.length; i++) {
    const loc = loadPoints[i].location;
    const segLen = loc - prevLoc;
    const Vdrop = math.multiply(math.multiply(segLen, z), currents[i]);
    V = math.subtract(V, Vdrop);
    voltages.push({ location: loc, voltage: V });
    prevLoc = loc;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.style.opacity = 0;

  setTimeout(() => {
    resultDiv.innerHTML = "<h3>Results:</h3>";
    voltages.forEach((v, idx) => {
      resultDiv.innerHTML += `
        <div class="result-item">
          Load ${idx + 1} at ${v.location}m:<br>
          → Voltage: ${math.abs(v.voltage).toFixed(2)} V<br>
          → Angle: ${(math.arg(v.voltage) * 180 / Math.PI).toFixed(2)}°
        </div><br>`;
    });
    resultDiv.style.opacity = 1;
  }, 150);
}

// Initialize with a default load point
addLoadPoint();
