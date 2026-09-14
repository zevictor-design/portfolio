const form = () => {
  const contactForm = document.querySelector(".contactForm");
  const responseMessage = document.querySelector(".response");

  if (!contactForm || !responseMessage) return;

  const submitButton = contactForm.querySelector("button[type='submit']");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const formData = new FormData(formElement);

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";
    }

    responseMessage.classList.add("open");
    responseMessage.textContent = "Enviando mensagem...";

    try {
      const response = await fetch(formElement.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        responseMessage.textContent = "Mensagem enviada com sucesso!";
        formElement.reset();
      } else {
        responseMessage.textContent = "Erro ao enviar mensagem. Tente novamente.";
      }
    } catch (error) {
      console.error(error.message);
      responseMessage.textContent = "Erro ao enviar mensagem. Tente novamente.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      }

      setTimeout(() => {
        responseMessage.classList.remove("open");
      }, 3000);
    }
  });
};
export default form;
