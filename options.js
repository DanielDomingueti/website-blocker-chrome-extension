document.addEventListener("DOMContentLoaded", () => {
    const siteInput = document.getElementById("siteInput");
    const addButton = document.getElementById("addSite");
    const siteList = document.getElementById("siteList");

    function updateUI(blockedSites) {
        siteList.innerHTML = "";
        blockedSites.forEach((site, index) => {
            let li = document.createElement("li");
            li.textContent = site;
            
            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.onclick = () => removeSite(index);

            li.appendChild(removeButton);
            siteList.appendChild(li);
        });
    }

    function removeSite(index) {
        chrome.storage.sync.get(["blockedSites"], (data) => {
            let blockedSites = data.blockedSites || [];
            blockedSites.splice(index, 1);
            chrome.storage.sync.set({ blockedSites }, () => updateUI(blockedSites));
        });
    }

    addButton.addEventListener("click", () => {
        let site = siteInput.value.trim();
        if (!site) return;

        chrome.storage.sync.get(["blockedSites"], (data) => {
            let blockedSites = data.blockedSites || [];
            if (!blockedSites.includes(site)) {
                blockedSites.push(site);
                chrome.storage.sync.set({ blockedSites }, () => updateUI(blockedSites));
            }
        });

        siteInput.value = "";
    });

    chrome.storage.sync.get(["blockedSites"], (data) => {
        updateUI(data.blockedSites || []);
    });
});
