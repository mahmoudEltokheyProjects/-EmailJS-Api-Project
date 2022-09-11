/* send email function */
function send()
{
    const serviceID  = 'default_service'  ;
    const templateID = 'template_njvsf6b' ;
    emailjs.send("service_0a1j6hx","template_njvsf6b",{
        from_name : document.querySelector("#from_name").value ,
        to_name   : document.querySelector("#to_name").value   ,
        message   : document.querySelector("#message").value   ,
        email_to  : document.querySelector("#email_to").value  ,
        // we use "then()" to see the response of email if the email is successfully send
    }).then(response=>{
       alert("success :) Email is sended",response.status);
        // we use "error()" to see the response of email if the email is successfully send
    },(error)=>{
      alert("Error :( Email is Not sended",error);
    }); 
} 
// add the event listener submit
document.querySelector(".send").addEventListener('click',send);

