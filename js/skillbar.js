const skillbar = () => {
  const skillBars = document.querySelectorAll(".skill");
  skillBars.forEach((skillBar) => {
    const fill = skillBar.querySelector(".skill-bar__fill");
    const progress = parseInt(fill.getAttribute("data-progress"), 10);
    fill.style.width = `${progress}%`;
  });
};
export default skillbar;
