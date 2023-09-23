import usePagination from '../../hooks/usePagination'
import { SelectInput, Option } from '../ui/inputs'
import { ButtonSecondary } from '../ui/buttons'
import useLanguage from '../../hooks/useLanguage'

export default function Pagination () {
  const { next, prev, jump, currentPage, maxPage } = usePagination()
  const { word } = useLanguage('pagination')

  // Genero las opcions segín la cantidad de páginas
  const options = []
  for (let i = 1; i <= maxPage; i++) {
    options.push(
      <Option
        key={i}
        valor={i}
      >{i}</Option>
    )
  }

  return (
    <div className="flex gap-3 my-5 justify-content-center w-100">

      <div className='flex gap-1'>
        <ButtonSecondary
          width ='120px'
          disabled = {currentPage === 1}
          onClick={() => jump(1)}
        >{word('first')}</ButtonSecondary>
        <ButtonSecondary
          width ='120px'
          disabled = {currentPage === 1}
          onClick={prev}
        >{word('back')}</ButtonSecondary>
      </div>

      <SelectInput
        width='70px'
        value={currentPage}
        onChange={(e) => jump(e.target.value)}
      >
      {options}
      </SelectInput>

      <div className='flex gap-1'>
        <ButtonSecondary
          width ='120px'
          onClick={next}
          disabled = {currentPage === maxPage}
        >{word('next')}</ButtonSecondary>
        <ButtonSecondary
          width ='120px'
          onClick={() => jump(maxPage)}
          disabled = {currentPage === maxPage}
        >{word('last')}</ButtonSecondary>
      </div>
    </div>
  )
}
