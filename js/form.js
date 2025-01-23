// const form = () => {
//   document
//     .getElementById("contactForm")
//     .addEventListener("submit", async (e) => {
//       e.preventDefault();

//       const form = e.target;
//       const formData = new FormData(form);

//       try {
//         const response = await fetch("mail.php", {
//           method: "POST",
//           body: formData,
//         });

//         const result = await response.text();

//         const responseMessage = document.getElementById("responseMessage");
//         responseMessage.textContent = result;
//         responseMessage.style.color = result.includes("successfully")
//           ? "green"
//           : "red";

//         if (result.includes("successfully")) {
//           form.reset();
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         document.getElementById("responseMessage").textContent =
//           "An error occurred. Please try again.";
//       }
//     });
// };
// export default form;
