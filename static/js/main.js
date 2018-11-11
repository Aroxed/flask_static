(function(){

    //fetch('/static/cities.txt').then(response=>alert(response))
    //fetch('/static/cities.txt').then(function(response) { return response.text()})
    //                           .then(function(txt) {alert(txt)})

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}

const json = (response) => response.text()

fetch('/static/cities.txt')
  .then(status)
  .then(json)
  .then((data) => { console.log('Request succeeded with JSON response', data) })
  .catch((error) => { console.log('Request failed', error) })


})()