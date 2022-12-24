console.log("Tweet Views Remover content script loaded")

const removeElements = () => {
    document.querySelectorAll('a[aria-label*="Views."]').forEach((node) => {
        node.parentElement.remove()
    })
    document.querySelectorAll('div[aria-label*="View Tweet analytics"]').forEach((node) => {
        node.parentElement.remove()
    })
    document.querySelectorAll(`a[href="${window.location.pathname}/analytics"]`).forEach((node) => {
        node.parentElement.parentElement.remove()
    })
    document.querySelectorAll(`a[href$="/analytics"]`).forEach((node) => {
        node.parentElement.remove()
    })
}

document.addEventListener("scroll", () => {
    removeElements()
})

removeElements()