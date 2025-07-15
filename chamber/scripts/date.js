document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#currentyear");
  const modifiedParagraph = document.querySelector("#lastModified");

  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }

  if (modifiedParagraph) {
    modifiedParagraph.textContent = `Last Modified: ${lastModified}`;
  }
});
