const falarDepoisDe = (segundos, frase) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
      // reject(frase)
    }, segundos * 1000);
  })
}

falarDepoisDe(3, "Irru")
.then(frase => frase.concat('!!!'))
.then(frase => console.log(frase))
.catch(e => console.log("ERR:", e))