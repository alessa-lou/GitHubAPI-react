import React from 'react'
import { render, screen } from '@testing-library/react'

import GitHubRepo from './GitHubRepo'
import mockResponse from './__mocks__/response.json'
// mock fetch and return the mock response json
jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test("shows some stuff from my github repo", async () => {
    render(<GitHubRepo />)
    const element = await screen.findByText("Test Response")
    expect(element).toBeInTheDocument()
})