function App() {
  return (
    <div>
      <Folder name="Desktop">
        <File name="dogs.jpg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Applications" />
    </div>
  )
}

const Folder = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.name}</h3>
      <div style={{ marginLeft: '17px' }}>
        <h4>{props.children}</h4>
      </div>
    </div>
  )
}

const File = (props) => {
  return <div>{props.name}</div>
}

export default App
