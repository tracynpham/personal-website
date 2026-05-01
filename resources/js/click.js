function copyLink(){
    const link = document.getElementById("copyme");
    navigator.clipboard.writeText(link.innerText);
    
    const copied = document.getElementById("copied")
    copied.classList.add("show");
    setTimeout(() => copied.classList.remove("show"), 2000);
}