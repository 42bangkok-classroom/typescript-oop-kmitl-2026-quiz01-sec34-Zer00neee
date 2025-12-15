const input = process .argv[2].string;
if (input.length === 3){
    console.log("Stop")
}else if(input.length === 6){
    console.log("Caution")
}else if(input.length === 5){
    console.log("Go")
}else{
    console.log("Unknown")
}