const fetchMock = (response) => {
  global.fetch = jest.fn().mockImplementation(() =>
    new Promise((resolve) => {
      resolve({ json: () =>  response })
    })
  )
}

const fetchMockReject = (response) => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.reject(response)
  )
}

export { fetchMock, fetchMockReject }