const form = () => {
  const contactForm = document.querySelector(".contactForm"),
    responseMessage = document.querySelector(".response");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    responseMessage.classList.add("open");
    responseMessage.textContent = "Enviando mensagem...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        responseMessage.textContent = "Mensagem enviada com sucesso!";
        form.reset();
      } else {
        responseMessage.textContent = "Erro ao enviar mensagem. Tente novamente.";
      }
    } catch (error) {
      console.error(error.message);
      responseMessage.textContent = "Erro ao enviar mensagem. Tente novamente.";
    }

    setTimeout(() => {
      responseMessage.classList.remove("open");
    }, 3000);
  });
};
export default form;
