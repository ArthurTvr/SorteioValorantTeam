function sortTeams() {
    const namesInput = document.getElementById('names').value;
    const names = namesInput.split(',').map(name => name.trim()).filter(name => name);

    if (names.length < 10) {
        alert('Por favor, insira pelo menos 10 nomes.');
        return;
    }

    shuffleArray(names);

    const team1 = names.slice(0, 5);
    const team2 = names.slice(5, 10);

    displayTeams(team1, team2);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayTeams(team1, team2) {
    const team1List = document.getElementById('team1');
    const team2List = document.getElementById('team2');

    team1List.innerHTML = '';
    team2List.innerHTML = '';

    team1.forEach(member => {
        const listItem = document.createElement('li');
        listItem.textContent = member;
        team1List.appendChild(listItem);
    });

    team2.forEach(member => {
        const listItem = document.createElement('li');
        listItem.textContent = member;
        team2List.appendChild(listItem);
    });
}
