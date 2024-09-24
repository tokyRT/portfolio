//fetching skills data
fetch("../data/skills.json")
    .then(res => {
        return res.json();
    })
    .then(skills => {
        var catHtml = ``;
        skills.forEach(categorie => {
            catHtml += `<div class="categorie">
                            <h2>${categorie.categorie_name}</h2>
                            <ul class="skills">`;

            categorie.skills.forEach(skill => {
                catHtml += `<li class="skill" style="border: 1px solid ${categorie.color};">${skill}</li>`;
            });

            catHtml += `</ul>
                        </div>`;
        });

        var categoriesSection = document.querySelector("body>.skillsSection .categories");
        categoriesSection.innerHTML = catHtml;

    });

//fetching experiences data
fetch("../data/experiences.json")
    .then(res => {
        return res.json()
    })
    .then(xps => {
        var xpsHtml = ``;
        xps = xps.reverse();
        xps.forEach(xp => {
            xpsHtml += `<div class="experience">
                        <div class="period">
                        <span>${xp.period.from}</span>
                        <span>${xp.period.to}</span>
                        </div>
                        <div class="details">
                        <h3 class="company"><a href="${xp.company.website}" target="_blank">${xp.company.name}</a></h3>
                        <h4 class="post">${xp.position}</h4>
                        <ul class="tasks">`;

            xp.tasks.forEach(task => {
                xpsHtml += `<li>${task}</li>`
            });

            xpsHtml += `</ul>
                        <ul class="skills">`;

            xp.skills.forEach(skill => {
                xpsHtml += `<li class="skill">${skill}</li>`;
            });

            xpsHtml += `</ul>
                        </div>
                      </div>`;

        });

        var xpsSection = document.querySelector("body>.experiencesSection .experiences");
        xpsSection.innerHTML = xpsHtml;
    });


//fetching projets data
var prms = fetch("../data/projects.json")
    .then(res => {
        return res.json()
    })
    .then(projects => {
        var projectsHtml = ``;
        projects = projects.reverse();
        projects.forEach(project => {
            projectsHtml += `<div class="project">
                            <div class="cover">
                                <img src="img/projects/${project.cover}" alt="logia studios screenshot">`;
            if (project.link != "") {
                projectsHtml += `
                                    <a href="${project.link}" target="blank">
                                    <span>take a look</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.448" height="11.447" viewBox="0 0 11.448 11.447">
                                    <g id="Icon_feather-external-link" data-name="Icon feather-external-link"
                                        transform="translate(-3.5 -3.086)">
                                        <path id="Tracé_256" data-name="Tracé 256"
                                        d="M12.028,12.513v3.011a1,1,0,0,1-1,1H5.5a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1H8.515"
                                        transform="translate(0 -2.994)" fill="none" stroke="#090909" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" />
                                        <path id="Tracé_257" data-name="Tracé 257" d="M22.5,4.5h3.011V7.511" transform="translate(-11.978)"
                                        fill="none" stroke="#090909" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        <path id="Tracé_258" data-name="Tracé 258" d="M15,10.02,20.52,4.5" transform="translate(-6.987)"
                                        fill="none" stroke="#090909" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </g>
                                    </svg>

                                </a>
                                    `;
            }
            projectsHtml += `
                            </div>
                            <h3>${project.name}</h3>
                            <ul class="skills">`;
            project.stacks.forEach(stack => {
                projectsHtml += `<li class="skill">${stack}</li>`;
            });
            projectsHtml += `</ul>
                        </div>`;

        });

        var projectsSection = document.querySelector("body>.projectsSection .projects");
        projectsSection.innerHTML = projectsHtml;
    });