export default function NewButton({ $target }) {
    const $newBtn = document.createElement('button')
    $newBtn.textContent = '+ New Button'
    $newBtn.className = 'addNew'

    $target.appendChild($newBtn)
}
