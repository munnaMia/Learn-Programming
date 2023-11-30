const BC = new BroadcastChannel("test")


// receive massage 
BC.onmessage = (e) => {
    console.log(e)
}


// output 

/*
isTrusted
: 
true
bubbles
: 
false
cancelBubble
: 
false
cancelable
: 
false
composed
: 
false
currentTarget
: 
BroadcastChannel {name: 'test', onmessageerror: null, onmessage: ƒ}
data
: 
"this is a message"
defaultPrevented
: 
false
eventPhase
: 
0
lastEventId
: 
""
origin
: 
"chrome://new-tab-page"
ports
: 
[]
returnValue
: 
true
source
: 
null
srcElement
: 
BroadcastChannel {name: 'test', onmessageerror: null, onmessage: ƒ}
target
: 
BroadcastChannel {name: 'test', onmessageerror: null, onmessage: ƒ}
timeStamp
: 
221049.7999999998
type
: 
"message"
userActivation
: 
null
[[Prototype]]
: 
MessageEvent
*/