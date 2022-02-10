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
                        <h3 class="company"><a href="${xp.company.website}">${xp.company.name}</a></h3>
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
})