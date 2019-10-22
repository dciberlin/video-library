// Any code you will write for your website (in the future!) should go here
let data = [
    {
      title: "Nick Cave and the Bad Seeds",
      thumb: "../images/1.png",
      videoUrl: "1"
    },
    {
      title: "Radiohead",
      thumb: "../images/2.png",
      videoUrl: "2"
    },
    {
      title: "Fleet Foxes",
      thumb: "../images/3.png",
      videoUrl: "3"
    },
    {
      title: "The National",
      thumb: "../images/4.png",
      videoUrl: "4"
    },
    {
      title: "Nick Cave and the Bad Seeds",
      thumb: "../images/1.png",
      videoUrl: "1"
    },
    {
      title: "Radiohead",
      thumb: "../images/2.png",
      videoUrl: "2"
    },
    {
      title: "Fleet Foxes",
      thumb: "../images/3.png",
      videoUrl: "3"
    },
    {
      title: "The National",
      thumb: "../images/4.png",
      videoUrl: "4"
    },
    {
      title: "Nick Cave and the Bad Seeds",
      thumb: "../images/1.png",
      videoUrl: "1"
    },
    {
      title: "Radiohead",
      thumb: "../images/2.png",
      videoUrl: "2"
    },
    {
      title: "Fleet Foxes",
      thumb: "../images/3.png",
      videoUrl: "3"
    },
    {
      title: "The National",
      thumb: "../images/4.png",
      videoUrl: "4"
    }
  ];
  
  updateVideo = url => {
    let src = `../images/videos/${url}.mp4`;
    let vid = document.createElement("video");
    vid.src = src;
    vid.autoplay = true;
    vid.controls = true;
    let vidParent = document.querySelector(".video-container");
    vidParent.appendChild(vid);
  };
  
  togglePlayer = e => {
    let pl = document.querySelector(".player");
    pl.classList.toggle("active");
  
    let vidParent = document.querySelector(".video-container");
    vidParent.innerHTML = "";
    let url = e.currentTarget.getAttribute("data-url");
    if (url) updateVideo(url);
  };
  
  generateVideoThumbs = data => {
    data.forEach(el => {
      let parent = document.createElement("div");
      parent.classList.add("video-thumb");
      parent.addEventListener("click", togglePlayer);
      parent.dataset.url = el.videoUrl;
  
      let title = document.createElement("p");
      title.innerText = el.title;
  
      let imgCont = document.createElement("div");
      imgCont.classList.add("img-cont");
  
      let img = document.createElement("img");
      img.src = el.thumb;
  
      imgCont.appendChild(img);
      parent.appendChild(imgCont);
      parent.appendChild(title);
  
      let vidCont = document.querySelector(".cont");
      vidCont.appendChild(parent);
    });
  };
  
  generateVideoThumbs(data);
  
  let close = document.querySelector(".close");
  close.addEventListener("click", togglePlayer);