const imges = document.querySelectorAll("#crousel-container");
const imgUrl = null;
const data = async () => {
    const promise = await fetch("https://picsum.photos/v2/list");
    const respone = await promise.json();
    imgUrl = respone;
    console.log(imgUrl);
}


data();