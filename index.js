function addViewportMeta() {
    const item = document.createElement('meta');
    item.name = 'viewport';
    item.content = 'width=device-width, initial-scale=1';

    document.head.appendChild(item);
}

addViewportMeta();