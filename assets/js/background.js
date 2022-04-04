chrome.runtime.onMessage.addListener(data => {
    console.log(data)
    if (data.type === 'notification') {
        chrome.notifications.create(
            '',
            {
                type: 'basic',
                title: 'Notify!',
                message: data.message || 'Notify!',
                iconUrl: '/assets/icons/128.png',
            }
        );
    }
});
