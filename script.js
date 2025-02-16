const websitesToBlock = [
    "youtube.com",
    "x.com",
    "facebook.com",
    "instagram.com",
    "tiktok.com",
];

const createBackgroundElement = () => {
    const newElement = document.createElement("div");
    newElement.id = "blocker";
    newElement.style.position = "fixed";
    newElement.style.width = "100%";
    newElement.style.height = "100%";
    newElement.style.zIndex = "10000";
    newElement.style.backgroundColor = "black";
    newElement.style.top = "0";
    newElement.style.left = "0";
    return newElement;
}

const createMessageElement = () => {
    const message = document.createElement("div");
    message.style.color = "white";
    message.style.fontSize = "24px";
    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.style.alignItems = "center";
    message.style.height = "100vh";
    message.textContent = "Get back to work :)";
    return message;
}

const blockWebsites = async () => {
    for (const domain of websitesToBlock) {
        if (window.location.hostname.includes(domain)) {
            const newBackgroundElement = createBackgroundElement();
            const message = createMessageElement();
            
            newBackgroundElement.appendChild(message);

            document.body.style.overflow = "hidden";
            document.body.appendChild(newBackgroundElement);
        }
    }
};

blockWebsites();