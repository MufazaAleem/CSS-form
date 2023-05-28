function showThankYouPage(event) {
  event.preventDefault();
  
  const admissionForm = document.getElementById("admissionForm");
  const thankYouPage = document.getElementById("thankYouPage");
  
  admissionForm.style.display = "none";
  thankYouPage.style.display = "block";
}
