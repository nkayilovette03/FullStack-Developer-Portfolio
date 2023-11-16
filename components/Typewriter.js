import Typewriter from 'typewriter-effect'

const AppTypewriter = ({ strings, wrapperClassName, cursorClassName }) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        wrapperClassName,
        cursorClassName,
      }}
    />
  )
}

export default AppTypewriter
