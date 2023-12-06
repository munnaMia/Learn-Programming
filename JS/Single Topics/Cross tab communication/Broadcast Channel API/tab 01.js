const BC = new BroadcastChannel("test")

// sending massage to the next tab 
BC.postMessage("this is a message")