import { useState } from 'react'
function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="all_star.mp4" />
          <File name="express_file.mp4" />
        </Folder>
        <File name="dogs.jpg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Applications" />
    </div>
  )
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true)

  const { name, children } = props

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div>
      <span style={{ cursor: 'pointer' }} onClick={handleClick}>
        {name}
      </span>
      <div style={{ marginLeft: '17px' }}>
        <h4>{isOpen ? children : null}</h4>
      </div>
    </div>
  )
}

const File = (props) => {
  return <div>{props.name}</div>
}

export default App
