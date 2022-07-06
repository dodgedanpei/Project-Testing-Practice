function reverseString(message){
    let msg = message.split("");
    let newMsg = msg.reverse().join("")
    return newMsg;
}

module.exports=reverseString;