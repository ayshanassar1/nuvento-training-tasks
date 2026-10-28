function greet(name) {
  alert(`Hello, ${name}!`)
}

function GreetingButton() {
  const studentName = 'Team'

  return (
    <button onClick={() => greet(studentName)}>
      Say hello
    </button>
  )
}

export default GreetingButton