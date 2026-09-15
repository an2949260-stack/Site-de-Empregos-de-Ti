const vagas = [
    {
        id:1,
        titulo: "Desenvolvedor Front-End",
        empresa: "Tech Solutions",
        tipo: "Remoto",
        Tecnologias: ["HTML", "CSS", "JavaScript", "React"],
        Salário: "R$ 6.000,00 - R$ 9.000,00",
        local: "Remoto",
    
    },
    {
        id:2,
        titulo: "Desenvolvedor Back-End Node.js",
        empresa: "Tech Solutions",
        tipo: "Hibrido",
        Tecnologias: ["JavaScript", "Node.js", "Express"],
        Salário: "R$ 7.000,00 - R$ 10.000,00",
        local: "Uberlândia, MG",
    }
];

function criarCard(vaga) {
    const article = document.createElement("article");
    article.className = 'job-card';
    article.dataset.id = vaga.id;
}
    const badgeClass = {
        "Remoto": "job-card__badge--remote",
        "Presencial": "job-card__badge--onsite",
        "Hibrido": "job-card__badge--hybrid"
    }[vaga.tipo] || '';

    const tipoLabel = {
        remoto : "Remoto",
        presencial : "Presencial",
        hibrido : "Hibrido"
    }[vaga.tipo] || vaga.tipo;

    const header = document.createElement("div");
    header.className = `job-card__header`;

    const badge = document.createElement("span");
    badge.className = `job-card__badge ${badgeClass}`;
    badge.textContent = tipoLabel;

    const title = document.createElement("h3");
    title.className = `job-card__title`;
    title.textContent = vaga.titulo;

    const company = document.createElement("p");
    company.className = `job-card__company`;
    company.textContent = vaga.empresa;

    header.append(badge, title, company);

    const body = document.createElement("div");
    body.className = `job-card__body`;

    const tech = document.createElement("p");
    tech.className = `job-card__tech`;
    tech.textContent = vaga.Tecnologias.join(", ");

    const salary = document.createElement("p");
    salary.className = `job-card__salary`;
    salary.textContent = vaga.Salário;

    const location = document.createElement("p");
    location.className = `job-card__location`;
    location.textContent = vaga.local;
    body.append(tech, salary, location);

    article.append(header, body);
    return article;


function renderizarVagas(lista){
    const grid = document.querySelector(".jobs-grid");
    if (!grid) return;

    grid.replaceChildren();

    if (lista.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "Nenhuma vaga encontrada.";
        grid.appendChild(emptyMessage);
        return; 
    }

const fragment = document.createDocumentFragment();
lista.forEach(vaga => fragment.appendChild(criarCard(vaga)));
grid.appendChild(fragment);
}

renderizarVagas(vagas);
