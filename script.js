function generatePDF() {
  const element = document.querySelector(".cv-container");
  const options = {
    margin: 0.5,
    filename: "CV_Rifky_Andigita_Al-Fathir.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(options).from(element).save();
}
