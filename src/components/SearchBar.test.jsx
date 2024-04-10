import SearchBar from "./SearchBar"
import { render, screen, fireEvent } from '@testing-library/react'
const renderComponent = (props) => {
  return render(<SearchBar {...props}/>)
}

describe('SearchBar', () => {
  it('renders', () => {
    renderComponent()
    const searchBar = screen.getByTestId('search-bar')
    expect(searchBar).toBeInTheDocument()
  })

  it('triggers onSearch', () => {
    const mockOnSearch = jest.fn()
    renderComponent({
      onSearch: mockOnSearch
    })

    const searchBarInput = screen.getByTestId('search-bar-input')

    const mockInput = 'mockInput'
    fireEvent.change(searchBarInput, {
      target: { value: mockInput }
    })

    expect(mockOnSearch).toHaveBeenCalledWith(mockInput)
  })
})