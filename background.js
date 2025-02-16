chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.blockedSites) {
        let blockedSites = changes.blockedSites.newValue || [];

        chrome.declarativeNetRequest.updateDynamicRules({
            addRules: blockedSites.map((site, index) => ({
                id: index + 1,
                priority: 1,
                action: { type: "block" },
                condition: { urlFilter: `*://${site}/*` }
            })),
            removeRuleIds: blockedSites.map((_, index) => index + 1)
        });
    }
});
