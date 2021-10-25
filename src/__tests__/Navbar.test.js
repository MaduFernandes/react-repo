import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

test('renders title in component', () => {
  render(<Navbar />)
  const linkElement = screen.getByText(/React-Repo/i)
  expect(linkElement).toBeInTheDocument()
})
