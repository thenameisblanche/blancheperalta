const portfolios = document.querySelectorAll('.portfolio');
const portfolioContainer = document.querySelector('.portfoliocontainer');
const showAllProjectsBtn = document.querySelector('.show-all-projects-btn');
const pfShowMoreBtns = document.querySelectorAll('.pf-show-more');
const pfDescArr = [
  {
    name: 'retro-cinema',
    desc: "A collection of Old Films in one site. You'll surely feel nostalgic",
  },
  {
    name: 'crisper',
    desc: "A database for Special Purpose Rice at CLSU Research Office. Integrated with QR Code, it'll help improve the data recording system.",
  },
  {
    name: 'task',
    desc: 'This basic task list will help you get through your tasks. Just list it, and do it :>',
  },
  {
    name: 'system',
    desc: "A simple Student Record System for Bee School. Teachers are able to input and update the student's grades, while students can view it online.",
    desc: 'Keep track of your employees using this system. Assign new ones, and retrieve informations for the old ones.',
  },
];
const pTagContainer = document.querySelector('.pTagContainer');
const pTag = document.createElement('P');

showAllProjectsBtn.addEventListener('click', () => {
  portfolioContainer.classList.remove('hidden');
  showAllProjectsBtn.classList.add('hidden');
  pTag.classList.toggle('hidden');
});

pfShowMoreBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    portfolioContainer.insertAdjacentElement('afterend', pTag);
    portfolioContainer.classList.add('hidden');
    showAllProjectsBtn.classList.remove('hidden');

    pTag.textContent = pfDescArr.map((item) => {
      const parentDiv = btn.parentElement;
      if (parentDiv.classList[1] === item.name) {
        return item.desc;
      }
    });
  });
});
