

const formEmail = document.getElementById('formEmail')
formEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_e8golxn'
const templatesId = 'template_2bet9wv'
const ApiKey = 'EbVhOKOS4gNxLhstN'


function sendEmail (event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs
        .sendForm(serviceId, templatesId, formEmail, ApiKey)
        .then( (result) => {
            Swal.fire(
                'Mensaje Enviado',
                'Gracias Por Contactarnos',
                'success'
          )})
        .catch( (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Algo salió mal! no ha sido posible enviar tu mensaje'

        })
    });

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  const miBoton = document.querySelector('#descargar');
  let clicado = false; 
  
  miBoton.addEventListener('click', () => {
    if (clicado) {
      miBoton.textContent = 'Descargar'; 
    } else {
      miBoton.textContent = '¡Gracias!';
    }
    
    clicado = !clicado; 
  });
  
