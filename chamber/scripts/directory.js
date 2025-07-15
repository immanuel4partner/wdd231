// scripts/directory.js

const directory = document.querySelector("#directory");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

function setActive(active, inactive) {
    active.classList.add("active");
    inactive.classList.remove("active");
}

// Render Members
function renderMembers(members, view) {
    directory.innerHTML = "";

    if (view === "list") {
        const header = document.createElement("div");
        header.className = "list-header";
        header.innerHTML = `
            <span>Logo</span>
            <span>Name</span>
            <span>Address</span>
            <span>Phone</span>
            <span>Website</span>
        `;
        directory.appendChild(header);
    }

    members.forEach(member => {
        const card = document.createElement("div");
        card.className = view === "grid" ? "member-card" : "list-row";

        if (view === "grid") {
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo" />
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership">${member.membership.toUpperCase()} Member</p>
            `;
        } else {
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo" class="list-logo" />
                <span>${member.name}</span>
                <span>${member.address}</span>
                <span>${member.phone}</span>
                <a href="${member.website}" target="_blank">${member.website}</a>
            `;
        }

        directory.appendChild(card);
    });

    directory.className = `directory ${view}`;
}

// Load Data
async function getDirectory(view = "grid") {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        renderMembers(members, view);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Event Listeners
gridBtn.addEventListener("click", () => {
    setActive(gridBtn, listBtn);
    getDirectory("grid");
});

listBtn.addEventListener("click", () => {
    setActive(listBtn, gridBtn);
    getDirectory("list");
});

// Footer info
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Default load
setActive(gridBtn, listBtn);
getDirectory("grid");
