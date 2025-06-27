function student(score)
{
    switch(true)
    {
        case score >= 90:
            console.log("O Grade")
            break
        case score >80 && score <=90:
            console.log(" A Grade")
            break
        case score >=70 && score <=80: 
            console.log(" B Grade")
            break
        case score >=60 && score <=70:
            console.log(" C Grade")
            break
        case score >=50 && score <=60: 
            console.log(" D Grade")  
            break    
        case score >=40 && score <=50:
            console.log(" E Grade")     
            break 
        default:
            console.log("Fail")    

    }

}
student(35);

