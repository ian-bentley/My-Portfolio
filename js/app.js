const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact')
const mainNav = document.getElementById('main-nav');

aboutSection.addEventListener('click', (e) => {
    if (e.target.tagName === 'H3')
    {
        const selectedSection = e.target.parentNode
        const selectedSectionContent = selectedSection.getElementsByTagName('DIV')[0];
        const sectionList = [].slice.call(aboutSection.lastElementChild.children).filter(child => child.tagName === 'SECTION');
        let sectionContentList = [];

        sectionList.forEach(section => {
            const sectionContent = section.getElementsByTagName('DIV')[0];
            sectionContentList.push(sectionContent);
        })

        if (selectedSectionContent.classList.contains('hide'))
        {
            sectionContentList.forEach(sectionContent => {
                if (sectionContent === selectedSectionContent)
                {
                    sectionContent.classList.remove('hide');
                }
                else 
                {
                    sectionContent.classList.add('hide');
                }
            });
        }
        else
        {
            selectedSectionContent.classList.add('hide');
        }
    }
});

mainNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
    {
        const btnId = e.target.id;
        switch (btnId)
        {
            case 'about-btn':
                if (aboutSection.classList.contains('hide'))
                {
                    aboutSection.classList.remove('hide');
                    projectsSection.classList.add('hide');
                    contactSection.classList.add('hide');
                }
                break;
            case 'projects-btn':
                if (projectsSection.classList.contains('hide'))
                {
                    aboutSection.classList.add('hide');
                    projectsSection.classList.remove('hide');
                    contactSection.classList.add('hide');
                }
                break;
            case 'contact-btn':
                if (contactSection.classList.contains('hide'))
                {
                    aboutSection.classList.add('hide');
                    projectsSection.classList.add('hide');
                    contactSection.classList.remove('hide');
                }
                break;
        }
    }
});