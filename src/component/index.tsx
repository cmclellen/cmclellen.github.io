export default function Greeting(props: {message?: string}) {
  const { message= 'World' } = props

  return (
    <div>Hello, {message}!</div>
  )
}