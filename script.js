//your JS code here. If required.
const Promise1 = () => { return new Promise((resolve, reject) => {
  const inp = parseInt(document.querySelector('#ip').value);
  setTimeout(()=>{
    resolve(inp)
  },2000)
})
}

const Promise2 = () => { return new Promise((resolve, reject) => {
  const inp = parseInt(document.querySelector('#ip').value);
  setTimeout(()=>{
    resolve(inp*2)
  },2000)
})}

const Promise3 = () => { return new Promise((resolve,reject)=>{
  const inp = parseInt(document.querySelector('#ip').value);
  setTimeout(()=>{
    resolve(inp*2-3)
  },1000)
})}



document.querySelector('#btn').addEventListener('click',()=>{
  Promise1().then((num1) => {
    document.querySelector('#output').innerHTML = `Result: ${num1}`;
    return Promise2();
  }).then((num2) => {
    document.querySelector('#output').innerHTML = `Result: ${num2}`;
    return Promise3();
  }).then((num3)=>{
    document.querySelector('#output').innerHTML = `Result: ${num3}`;
  }).catch((err)=>{
    document.querySelector('#output').innerHTML = `Error: ${err}`;
  })
})
