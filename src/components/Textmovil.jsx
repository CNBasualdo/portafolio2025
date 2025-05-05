import { div } from "motion/react-client";
import { useState,useEffect } from "react";

function Textmovil({text, mLeftInicial = 180, transitionTime = 2,randCar, tickCambioLetra = 150}) {
    const[marginLeft, setMarginLeft]= useState(mLeftInicial ? mLeftInicial : 0)
    const carteresRamdom = randCar ? randCar :['1','O','1','1','0']
    const[newText, setNewText] = useState('')
    //Para el randomIntFromInverval
    const min = 0
    const max =carteresRamdom.length - 1

    //Conseguir numero random entre dos numeros
    function randomIntFromInverval(min, max){
        return Math.floor(Math.random() * (max - min + 1)+min)
    }

    useEffect(() =>{
        console.log(marginLeft, mLeftInicial);
        setMarginLeft(0)
        let contaCiclos = 0
        
        let myInterval = setInterval(() =>{
            var tempText = ''
            var trozoPalabra = ''

            //montamos la porcion de titulo encriptado del ciclo
            for(let i = contaCiclos; i < text.length; i++){
                let x = randomIntFromInverval(min,max)
                tempText = tempText + carteresRamdom[x]
            }
            //montamos la porcion del titulo real
            for (let i = 0; i < contaCiclos; i++){
                trozoPalabra = trozoPalabra + text[i]
            }

            //actualizamos la palabra que estamos mostrando
            setNewText(trozoPalabra + tempText)
            //incrementamos ciclo
            contaCiclos = contaCiclos + 1
            if(contaCiclos > text.length){
                clearInterval(myInterval)
            }
        }, tickCambioLetra);
        return ()=> clearInterval(myInterval)
    },[])

    return(
        <div>
            <h2 className="encryptClassH2" style={{
                margin: 'auto',
                marginTop: '16px',
                marginLeft: `${marginLeft}px`,
                transition:`margin ${transitionTime}s`,
                color:'white',
                fontSize:'40px',
                fontFamily:'Russo one'
            }}>{newText}</h2>
        </div>



    )







}

export default Textmovil;
