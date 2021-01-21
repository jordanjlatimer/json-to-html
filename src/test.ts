interface test extends Partial<SVGElement>{
  jimmy?: "jackson"
}

function jackson(arg1: test){
  console.log(arg1)
}

jackson({})