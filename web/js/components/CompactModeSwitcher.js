export default function CompactModeSwitcher({ compactMode }) {
  const container = document.createElement('div')
  container.classList.add('switch-container')
  
  const detailButton = document.createElement('button')
  detailButton.classList.add('switch-button')
  detailButton.classList.add('material-symbols-rounded')
  detailButton.innerText = 'dashboard'
  detailButton.onclick = () => compactMode(false)
  
  const compactButton = document.createElement('button')
  compactButton.classList.add('switch-button')
  compactButton.classList.add('material-symbols-rounded')
  compactButton.innerText = 'dehaze'
  compactButton.onclick = () => compactMode(true)

  compactMode.subscribe((isCompact) => {
    if (isCompact) {
      detailButton.classList.remove('active')
      compactButton.classList.add('active')
    } else {
      detailButton.classList.add('active')
      compactButton.classList.remove('active')
    }
  })
  
  container.appendChild(detailButton)
  container.appendChild(compactButton)

  return container
}