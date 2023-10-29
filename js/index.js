
let submit = document.getElementById("sub");

let hclick = e =>{
      
      function send(){
            let params= {
                  from_name: document.getElementById("name").value,
                  email_id: document.getElementById("emailr").value,
                  message: document.getElementById("msg").value,
                  }


            emailjs.send("service_m284uen","template_zzi7etw",params).then((res)=>{
                        alert(` you got mail:${res.status}`)
                  })
      }
      send()

      
      

}


submit.addEventListener("click",hclick)