const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjFjYTY5MmYyLWEwMzktNDI0OC05NmViLTVjNWYwMDhkMGUwYS0xNzI4NTY5MTU3NjM5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODlmNDVhZjctM2Y3My00ZjMxLTg2MTItYmY1NmExZGUzNTQ2IiwidHlwZSI6InQifQ.AXVX927sCq1ILa5nzVm4FVJiNIDgQg8UpV4nS5-ooVY"

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
