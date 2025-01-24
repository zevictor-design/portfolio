const form = () => {
  const contactForm = document.querySelector(".contactForm"),
    responseMessage = document.querySelector(".response");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        result = await response.text();
      }
      responseMessage.classList.add("open");
      responseMessage.textContent = result;
      console.log(result);
    } catch (error) {
      responseMessage.classList.add("open");
      responseMessage.textContent = "An error occurred. Please try again.";
    }
    setTimeout(() => {
      responseMessage.classList.remove("open");
    }, 3000);
    form.reset();
  });
};
export default form;
