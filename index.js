var disks = document.querySelectorAll(".card")
disks.forEach(disk => {
   disk.onclick = () => {
        window.open(disk.id)
   }; 
});
var video = document.querySelector("video")
video.onclick = () =>{
    window.open("https://www.instagram.com/p/C1Ebi6hPkx7/")
}
