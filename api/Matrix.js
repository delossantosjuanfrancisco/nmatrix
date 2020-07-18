const Moment = require('moment-timezone')
let Matrix = function(data)
{
 this.vibraDias = {"0":5,"1":7,"2":3,"3":8,"4":9,"5":1,"6":6}
 this.vibraMeses = {"0":3}
 this.data = data
 //this.fecha =  this.data.fecha 
 this.multiplicacion = 0
 this.suma = 0
 this.vibradia = 0


 
this.fecha = new Date(Moment().tz("America/Santo_Domingo").format("YYYY-MM-DD HH:mm"))

this.ForBase = new Date(Moment().tz("America/Santo_Domingo").format("YYYY-MM-DD HH:mm"))

 this.ForBase.setDate(this.ForBase.getDate()+3)
 
 this.dia = this.fecha.getDate()
 this.mes = this.fecha.getMonth()+1
 this.mes = this.mes.toString()
 this.year = this.fecha.getFullYear()
 
 this.Bdia = this.ForBase.getDate()
 this.Bmes = this.ForBase.getMonth()+1
 this.Bmes = this.ForBase.toString()
 this.Byear = this.ForBase.getFullYear()
 this.historicoBase = []

  this.NumBase = Array.from(`3${this.ForBase.getDate()}6${this.ForBase.getMonth()+1}9${this.ForBase.getFullYear()}`)


}
Matrix.prototype.NumBaseCero = function(Num)
    {
      let Numero = Num < 10 ? `0${Num}`:Num
       return Numero
    }

Matrix.prototype.getVibraDia = function()
    {
       this.vibradia = this.NumBaseCero(this.vibraDias[this.fecha.getDay()])
      //  return this.vibradia
    }

    Matrix.prototype.getBaseTesla =function()
    {
     
      //this.historicoBase =  []
      return this.getBase(this.NumBase)
    }

Matrix.prototype.getBase = function (Nums)
    
    {
      let result = []
      let numPivo 
      let numero
      let numeroPrevio = null
      let arrayCarro = this.NumBase
      let sum = 0
      let pushing 
      

      
     if(this.historicoBase.length === 0)
     {
      this.historicoBase.push(Nums)
     }
     else
     {
      this.historicoBase.push(`${Nums.join('')}`)
     }
     
      if(Nums.length === 1)
      {
     
        let PenultimoNum = this.historicoBase[this.historicoBase.length -2]
        let UltimoNum = this.historicoBase[this.historicoBase.length -1]
        let PenultimoNum1 = PenultimoNum.toString().substring(0,1)
        let PenultimoNum2 = PenultimoNum.toString().substring(2,1)
        // console.log(PenultimoNum1)
        // console.log(PenultimoNum2)
        // console.log(UltimoNum)
        
        let SumaPenulNum1UltimoNum = parseInt(PenultimoNum1)+parseInt(UltimoNum)
        let SumaPenulNum2UltimoNum = parseInt(PenultimoNum2)+parseInt(UltimoNum)
        SumaPenulNum1UltimoNum = SumaPenulNum1UltimoNum.toString().substr(SumaPenulNum1UltimoNum.toString().length -1)
        SumaPenulNum2UltimoNum = SumaPenulNum2UltimoNum.toString().substr(SumaPenulNum2UltimoNum.toString().length -1)
        
        let SumaSumPenultimos = parseInt(SumaPenulNum1UltimoNum)+ parseInt(SumaPenulNum2UltimoNum)
        SumaSumPenultimos = SumaSumPenultimos.toString().substr(SumaSumPenultimos.toString().length -1)
        
        let BaseNum1 = parseInt(UltimoNum)+parseInt(SumaPenulNum1UltimoNum)
            BaseNum1 = BaseNum1.toString().substr(BaseNum1.toString().length -1)

        let BaseNum2 = parseInt(SumaPenulNum1UltimoNum) + parseInt(SumaSumPenultimos)
            BaseNum2 = BaseNum2.toString().substr(BaseNum2.toString().length -1)

        let BaseNum3 = parseInt(SumaSumPenultimos)+ parseInt(SumaPenulNum2UltimoNum) 
            BaseNum3 = BaseNum3.toString().substr(BaseNum3.toString().length -1)

        let BaseNum4 = parseInt(UltimoNum)+ parseInt(SumaPenulNum2UltimoNum) 
            BaseNum4 = BaseNum4.toString().substr(BaseNum4.toString().length -1)


        let NumsFinales = []
        let len = this.historicoBase.length
        // return this.historicoBase[len -3] // Nums
        let NumsCentro = [SumaPenulNum2UltimoNum,UltimoNum,SumaSumPenultimos,SumaPenulNum1UltimoNum]
        NumsFinales.push(BaseNum1,BaseNum2,BaseNum3,BaseNum4,NumsCentro)
      // console.log(this.historicoBase)
      // console.log(NumsFinales)

      // console.log(UltimoNum)
      // console.log(SumaPenulNum1UltimoNum)
      // console.log(SumaPenulNum2UltimoNum)
      // console.log(SumaSumPenultimos)
    
        return NumsFinales //this.historicoBase
      }else{

        Nums.map((element,index, original)=>{
    
        if(numeroPrevio != null )
        {
         let Suma = parseInt(numeroPrevio)+parseInt(element)
               
        result.push(Suma.toString().substr(Suma.toString().length -1))
           
        
        }
        numeroPrevio = element
       
        
       
      })
     
      return this.getBase(result)
      
    }    
  
}
    
       
        
     

    Matrix.prototype.getFecha = ()=>
    {
     
       // return `${this.day}/${this.month}/${this.year}`
        // return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`
      }

Matrix.prototype.getSuma = function()
  {
    let d = this.fecha.getDate().toString().split("")
    let m = 1+ this.fecha.getMonth().toString().split('')
    let y = this.fecha.getFullYear().toString().split('')
    let SumaDia =0
    let SumaMes =0
    let SumaYear=0

    for (let index = 0; index < d.length; index++) {
      SumaDia += parseInt(d[index]);
        
    }
    for (let index = 0; index < m.length; index++) {
      SumaMes += parseInt(m[index]);
        
    }
    for (let index = 0; index < y.length; index++) {
      SumaYear += parseInt(y[index]);
        
    }
    this.suma = this.NumBaseCero(SumaDia+SumaMes+SumaYear)
   // return this.suma

  }

  Matrix.prototype.getMultiplicacion = function()
  {
    this.multiplicacion = this.NumBaseCero(this.fecha.getDate() * 3)
   // return this.multiplicacion 
  }

  Matrix.prototype.getVibracion = function()
  {
   this.getVibraDia()
   this.getMultiplicacion();
   this.getSuma()
  
    
    return {
     VibracionDia:this.vibradia,
     Multiplicacion: this.multiplicacion,
     Suma:this.suma,
     NumsCalientes: [`${this.vibradia}`,`${this.vibradia.toString().substr(1,1)}${this.vibradia.toString().substr(0,1)}`
    , `${this.vibradia.toString().substr(1,1)}${this.multiplicacion.toString().substr(1,1)}`, `${this.vibradia.toString().substr(1,1)}${this.suma.toString().substr(1,1)}`,
    `${this.multiplicacion.toString().substr(1,1)}${this.suma.toString().substr(1,1)}`],
    ParejasCalientes:[`${this.vibradia.toString().substr(1,1)}${this.vibradia.toString().substr(1,1)}`,`${this.multiplicacion.toString().substr(1,1)}${this.multiplicacion.toString().substr(1,1)}`,
    `${this.suma.toString().substr(1,1)}${this.suma.toString().substr(1,1)}`],
   

    }  
  }

module.exports = Matrix