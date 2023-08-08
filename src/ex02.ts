//EX 002

function converter(vet:number[]):number|string[] {
    const res:number | string[] = [];
    for (let i = 0; i < vet.length; i++) {
      res[i] = "" + vet[i];
    }
    return res;
  }
  const vetor:number[] = [5, 3, 1, 8, 2];
  console.log("Resultado:", converter(vetor));