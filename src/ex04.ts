const opera = function (v1:number[], v2:string[]):number|string[] {
    let res = [];
    for (let i = 0; i < v1.length; i++) {
      res[i] = v1[i] + v2[i];
    }
    return res;
  }
  const vetor1 = [5, 3, 1, 8, 2];
  const vetor2 = ["M", "a", "r", "i", "a"];
  console.log("Resultado:", opera(vetor1, vetor2));