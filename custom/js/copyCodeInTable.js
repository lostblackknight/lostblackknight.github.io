function showMessage() {
    Snackbar.show({pos: 'top-right', text: '复制成功', actionText: '', backgroundColor: '#49b1f5', duration: '2000'})
}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showMessage()
    })
}

window.addEventListener('load', () => {
    const codes = document.querySelectorAll('.table-wrap code')
    codes.forEach(code => {
        const i = document.createElement('i')
        i.classList.add('fas', 'fa-paste', 'copy-button')
        i.style.marginLeft = '6px'
        i.style.marginRight = '2px'
        i.addEventListener('mouseover', () => {
            i.style.cursor = 'pointer'
        })
        i.addEventListener('click', () => {
            copyTextToClipboard(i.parentNode.textContent)
        })
        code.append(i)
    })
})