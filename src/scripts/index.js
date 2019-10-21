// Any code you will write for your website (in the future!) should go here
let data = [{
        title: "Nick Cave & the Bad Seeds",
        thumb: "../images/1.png",
        videoUlr: "1"
    },
    {
        title: "Radiohead",
        thumb: "../images/2.png",
        videoUlr: "2"
    },
    {
        title: "Fleet Foxes",
        thumb: "../images/3.png",
        videoUlr: "3"
    },
    {
        title: "The National ",
        thumb: "../images/4.png",
        videoUlr: "4"
    }

];
updateVideo = url => {
    let src = `../images/videos/${url}.mp4`;
    let vid = document.createElement("video");
    vid.src = src;
    vid.autoplay = true;
    vid.controls = true;
    let vidParent = document.querySelector(".video-cont");
    vidParent.appendChild(vid);

};

togglePlayer = e => {
    let pl = document.querySelector(".the-player");
    pl.classList.toggle("active");
    let vidParent = document.querySelector(".video-cont");
    vidParent.innerHTML = "";
    let url = e.currentTarget.getAttribute("data-url");
    if (url) updateVideo(url);


};

generateVideoThumbs = data => {
    data.forEach(el => {
        let parent = document.createElement("div");
        parent.classList.add("video-thumb");
        parent.addEventListener("click", togglePlayer);
        parent.dataset.url = el.videoUlr;



        let title = document.createElement("p");
        title.innerText = el.title;

        let imgCont = document.createElement("div");
        imgCont.classList.add("img-cont");

        let img = document.createElement("img");
        img.src = el.thumb;

        imgCont.appendChild(img);
        parent.appendChild(imgCont);
        parent.appendChild(title);

        let videoCont = document.querySelector(".cont");
        videoCont.appendChild(parent);


    });

}
generateVideoThumbs(data);


let close = document.querySelector(".close");
close.addEventListener("click", togglePlayer);