// Problems Database
const problems = {
    1: {
        title: "Reverse Integer",
        description: `Given a signed 32-bit integer <code class="bg-slate-800 px-1 py-0.5 rounded text-emerald-400">x</code>, return <code class="bg-slate-800 px-1 py-0.5 rounded text-emerald-400">x</code> with its digits reversed. If reversing <code class="bg-slate-800 px-1 py-0.5 rounded text-emerald-400">x</code> causes the value to go outside the signed 32-bit integer range <code class="bg-slate-800 px-1 py-0.5 rounded text-emerald-400">[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then return <code class="bg-slate-800 px-1 py-0.5 rounded text-emerald-400">0</code>.<br><br>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`,
        testCases: [
            { input: 123, expected: 321 },
            { input: -123, expected: -321 },
            { input: 120, expected: 21 }
        ]
    }
};


// Get problem ID from URL
const urlParams = new URLSearchParams(window.location.search);
const problemId = parseInt(urlParams.get('id')) || 1;

function loadProblem(id) {
    const problem = problems[id] || problems[1];
    document.getElementById('problem-title').textContent = problem.title;
    document.getElementById('problem-description').textContent = problem.description;
    
    const testDiv = document.getElementById('test-cases');
    testDiv.innerHTML = '';
    problem.testCases.forEach((test, i) => {
        const div = document.createElement('div');
        div.className = 'test-case';
        div.innerHTML = `
            <span>Case ${i+1}: x = ${test.input}</span> 
            <span id="case${i+1}-output" style="color: #8b949e">Expected: ${test.expected}</span>
        `;
        testDiv.appendChild(div);
    });
}


function runCode() {
    const code = document.getElementById('code-editor').value;
    const testCases = problems[problemId]?.testCases || problems[1].testCases;
    
    testCases.forEach((test, i) => {
        try {
            const result = new Function('x', `return ${code}`)(test.input);
            const outputEl = document.getElementById(`case${i+1}-output`);
            outputEl.textContent = String(result);
            outputEl.style.color = result === test.expected ? '#56d364' : '#f85149';
        } catch(e) {
            document.getElementById(`case${i+1}-output`).textContent = 'Runtime Error';
            document.getElementById(`case${i+1}-output`).style.color = '#f85149';
        }
    });
}

function submitSolution() {
    alert('✅ Solution Submitted Successfully!');
}

window.onload = () => loadProblem(problemId);
