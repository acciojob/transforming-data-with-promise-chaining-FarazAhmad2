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

const Promise4 = () => { return new Promise((resolve,reject)=>{
const inp = parseInt(document.querySelector('#ip').value);
  setTimeout(()=>{
    resolve((inp*2-3)/4)
  },1000)
})}

const Promise5 = () => { return new Promise((resolve,reject)=>{
const inp = parseInt(document.querySelector('#ip').value);
  setTimeout(()=>{
    resolve((inp*2-3)/4+10)
  },1000)
})}



// document.querySelector('#btn').addEventListener('click',()=>{
//   Promise1().then((num1) => {
//     document.querySelector('#output').innerHTML = `Result: ${num1}`;
//     return Promise2();
//   }).then((num2) => {
//     document.querySelector('#output').innerHTML = `Result: ${num2}`;
//     return Promise3();
//   }).then((num3)=>{
//     document.querySelector('#output').innerHTML = `Result: ${num3}`;
//     return Promise4();
//   }).then((num4)=>{
//     document.querySelector('#output').innerHTML = `Result: ${num4}`;
//     return Promise5();
//   }).then((num5)=>{
//     document.querySelector('#output').innerHTML = `Result: ${num5}`;
//   }).catch((err)=>{
//     document.querySelector('#output').innerHTML = `Error: ${err}`;
//   })
// })


document.querySelector('#btn').addEventListener('click',()=>{
  Promise1().then((num1) => {
    document.querySelector('#output').innerHTML = `Result: ${num1}`;
    return Promise2();
  }).then((num2) => {
    document.querySelector('#output').innerHTML += `<br>Result: ${num2}`; // Append instead of overwrite
    return Promise3();
  }).then((num3)=>{
    document.querySelector('#output').innerHTML += `<br>Result: ${num3}`; // Append instead of overwrite
    return Promise4();
  }).then((num4)=>{
    document.querySelector('#output').innerHTML += `<br>Result: ${num4}`; // Append instead of overwrite
    return Promise5();
  }).then((num5)=>{
    document.querySelector('#output').innerHTML += `<br>Result: ${num5}`; // Append instead of overwrite
    return num5; // Pass the resolved value to the next then block
  }).then((finalResult) => {
    document.querySelector('#output').innerHTML += `<br>Final Result: ${finalResult}`; // Append instead of overwrite
  }).catch((err)=>{
    document.querySelector('#output').innerHTML = `Error: ${err}`;
  });
});
