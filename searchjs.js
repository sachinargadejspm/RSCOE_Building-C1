let searchable = [
  "<a href='ground.html'>XEROX Center</a>",
  "<a href='ground.html'>Workshop</a>",
  "<a href='ground.html'>Workshop Suprintendent</a>",
  "<a href='ground.html'>Gents Toilet</a>",

  "<a href='1st.html'>C1-201(Faculty Room)</a>",
  "<a href='1st.html'>C1-201(Lecture Hall)</a>",
  "<a href='1st.html'>C1-202(Lecture Hal)</a>",
  "<a href='1st.html'>C1-203(Thermal Engg.)</a>",
  "<a href='1st.html'>C1-204(Conferencce Hal)</a>",
  "<a href='1st.html'>C1-205(Seminar Hall)</a>",
  "<a href='1st.html'>C1-206(Ladies toilet)</a>",
  "<a href='1st.html'>C1-207(HOD Mechanical Dept.)</a>",
  "<a href='1st.html'>C1-208(Seminar Hall)</a>",

  "<a href='2nd.html'>C1-300(Computer Graphics Lab)</a>",
  "<a href='2nd.html'>C1-301(Lecture Hall)</a>",
  "<a href='2nd.html'>C1-302(Lecture Hall)</a>",
  "<a href='2nd.html'>C1-303(Lecture Hall)</a>",
  "<a href='2nd.html'>C1-304(Heat Transfer Lab)</a>",
  "<a href='2nd.html'>C1-305(Seminar Hall)</a>",
  "<a href='2nd.html'>C1-306(CAD/CAM Lab)</a>",
  "<a href='2nd.html'>C1-307(Gents Toilet)</a>",
  "<a href='2nd.html'>C1-308(Faculty Room)</a>",

  "<a href='3rd.html'>C1-400(Faculty Room)</a>",
  "<a href='3rd.html'>C1-401(Mechatronics)</a>",
  "<a href='3rd.html'>C1-402(Industrial Fluid Power Lab)</a>",
  "<a href='3rd.html'>C1-403(Theory of Machines Lab)</a>",
  "<a href='3rd.html'>C1-404(Dynamics of Machines Lab)</a>",
  "<a href='3rd.html'>C1-405(Lecture Hall)</a>",
  "<a href='3rd.html'>C1-406(Metrology & Quality Control Lab)</a>",
  "<a href='3rd.html'>C1-407(Gents Toilet)</a>",
  "<a href='3rd.html'>C1-408(Faculty Room)</a>",

];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li><a>${item}</a></li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
