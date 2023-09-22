export default function Paginator () {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    onPageChange(newPage)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      )
    }

    return pageNumbers
  }

  return (
    <div className="paginator">
      {renderPageNumbers()}
    </div>
  )
}
