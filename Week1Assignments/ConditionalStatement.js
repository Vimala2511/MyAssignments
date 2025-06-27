function launchBrowser(browserName)
{
    if(browserName==='chrome')
    {
        console.log("Selected browser is :" +browserName)
    }
    else if(browserName==='edge')
    {
    console.log("Selected browser is :" +browserName)
    }
    else
    console.log("Selected browser is :" +browserName)
}
launchBrowser('firefox');


function runTests(testType)
{
    switch(testType)
    {
    case "Smoke":
        console.log("smoke Testing")
        break
    case "Regression":
        console.log("Regression Testing")
        break
    case "sanity" :
         console.log("Sanity Testing")
         break
    default:
        console.log("smoke Testing")
    }
}
runTests('Regression');
