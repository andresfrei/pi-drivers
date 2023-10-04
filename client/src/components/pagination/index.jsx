import usePagination from '../../hooks/usePagination'
import { SelectInput, Option } from '../ui/inputs'
import { ButtonPaginate } from '../ui/buttons'

import Icon from '../icon'

// icons
import firstIcon from '../../assets/first.svg'
import nextIcon from '../../assets/next.svg'
import backIcon from '../../assets/back.svg'
import lastIcon from '../../assets/last.svg'

export default function Pagination () {
  const { next, prev, jump, currentPage, maxPage } = usePagination()

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

        <ButtonPaginate
          disabled = {currentPage === 1}
          onClick={() => jump(1)}
          width='70px'
        >
          <Icon src={firstIcon} />
        </ButtonPaginate>

        <ButtonPaginate
          disabled = {currentPage === 1}
          onClick={prev}
          width='70px'
        >
          <Icon src={backIcon}/>
        </ButtonPaginate>

      </div>

      <SelectInput
        width='70px'
        value={currentPage}
        onChange={(e) => jump(Number(e.target.value))}
      >
      {options}
      </SelectInput>

      <div className='flex gap-1'>

        <ButtonPaginate
          onClick={next}
          disabled = {currentPage === maxPage}
          width='70px'
        >
          <Icon src={nextIcon}/>
        </ButtonPaginate>

        <ButtonPaginate
          width='70px'
          onClick={() => jump(maxPage)}
          disabled = {currentPage === maxPage}
        >
          <Icon src={lastIcon}/>
        </ButtonPaginate>

      </div>
    </div>
  )
}
