import useLanguage from '../../hooks/useLanguage'

export default function FormErrors ({ errors }) {
  const { word } = useLanguage('fields')
  const keys = Object.keys(errors)

  return (
    <div className='flex flex-column gap-1'>
      { keys.map(key => !!errors[key]?.length && (
        <article key={key}>
          <p className='message-error'>{word(key)}: {
            errors[key].map(error => <span key={error}>{error}</span>)
          }</p>
        </article>))
      }
    </div>
  )
}
