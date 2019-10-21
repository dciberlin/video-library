let data = [
    {
    title: "Nick Cave and the Bas Seeds",
    thumb: "../images/1.jpeg",
    videurl: "../images/videos/1.mp4"
},
    {
    title: "Nick Cave and the Bas Seeds",
    thumb: "../images/2.jpeg",
    videurl: "../images/videos/1.mp4"
},
    {
    title: "Nick Cave and the Bas Seeds",
    thumb: "../images/3.jpeg",
    videurl: "../images/videos/1.mp4"
},
    {
    title: "Nick Cave and the Bas Seeds",
    thumb: "../images/3.jpeg",
    videurl: "../images/videos/1.mp4"
}
];

generateVideoThumbs = data => {
    data.forEach(el => {
        let parent = document.createElement("div");
        parent.classList.add("video-thumb");

        let title = document.createElement("p");
        title.innerText = el.title;

        let imgCont = document.createElement("div");
        imgCont.classList.add("img-cont");

        let img = document.createElement("img");
        img.setAttribute("src", el.thumb);
        

        imgCont.appendChild(img)
        parent.appendChild(imgCont)
        parent.appendChild(title);
        parent.setAttribute("onclick", togglePlayer());

        let vidCont = document.querySelector(".cont");
        vidCont.appendChild(parent);
    });
};
generateVideoThumbs(data);
togglePlayer = e => {
    let pl = document.querySelector(".player")
    pl.classList.toggle("active")

}
let close = document.querySelector(".close");
close.addEventListener("click", togglePlayer)