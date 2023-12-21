import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import ContactUsPage from "../pages/contact-us"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<ContactUsPage />)
    expect(true).toBeTruthy()
})