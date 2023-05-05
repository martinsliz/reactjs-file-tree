import { useState } from 'react'
function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="love_shack.mp4" />
          <File name="hello.mp4" />
        </Folder>
        <File name="dogs.jpg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Applications">
        <File name="Calendar" />
        <File name="Google Chrome" />
        <File name="Microsoft Word" />
      </Folder>
    </div>
  )
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  const { name, children } = props
  const direction = isOpen ? 'down' : 'right'

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <span style={{ cursor: 'pointer' }} onClick={handleClick}>
        <i className="purple folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: '17px' }}>{isOpen ? children : null}</div>
    </div>
  )
}

const File = (props) => {
  const { name } = props
  const fileExtension = name.split('.')[1]
  const fileIcons = {
    mp4: 'headphones',
    jpg: 'file image',
    png: 'file image outline'
  }
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>

      {name}
    </div>
  )
}

export default App
