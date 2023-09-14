
const btn=document.querySelector("#center");
     
    const throttleFunction=(func, delay)=>{
     
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
     
         
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }
    btn.addEventListener("mousemove", throttleFunction((dets)=>{
      var div = document.createElement("div");
      div.classList.add("imagediv");
      div.style.left = dets.clientX+'px';
     div.style.top = dets.clientY+'px';
      document.body.appendChild(div);

      var img =  document.createElement("img");
      img.setAttribute('src'," https://plus.unsplash.com/premium_photo-1694626257608-abe92c2bf3d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")
      div.appendChild(img)
      setTimeout(function(){
        div.remove();
      },200)
      gsap.to(img,{
        y:'0%',
        ease: Power1,
        duration:.8,
      })
      gsap.to(img,{
        y:'100%',
        ease: Power2,
        delay:.8,
      })

    }, 400));