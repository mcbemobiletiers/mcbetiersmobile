const players = [
    { rank: 1, name: "ExamplePlayer1", region: "NA", tier: "HT1", category: "sword" },
    { rank: 2, name: "MobileKing", region: "EU", tier: "LT1", category: "nethpot" },
    { rank: 3, name: "BedrockGod", region: "AS", tier: "HT2", category: "crystal" },
    { rank: 4, name: "TapLover", region: "NA", tier: "LT2", category: "boxing" },
];

function renderTable(data) {
    const tableBody = document.getElementById('player-data');
    tableBody.innerHTML = '';

    data.forEach(p => {
        const row = `
            <tr>
                <td>#${p.rank}</td>
                <td><strong>${p.name}</strong></td>
                <td>${p.region}</td>
                <td><span class="tier-badge ${p.tier.toLowerCase()}">${p.tier}</span></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function filterTier(category) {
    // Update button states
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderTable(players);
    } else {
        const filtered = players.filter(p => p.category === category);
        renderTable(filtered);
    }
}

// Initial Load
renderTable(players);
