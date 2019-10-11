const transcriptDiv = document.getElementById("captions")
const pusher = new Pusher('CHANNELS_KEY', {
  cluster: 'CHANNELS_CLUSTER',
  forceTLS: true
});

let timeoutHandle;

function setupTranscriptionListeners() {


  transcriptDiv.hidden = true
  
  Reveal.addEventListener("ready", event => {
    let line1 = " ";
    let line2 = " ";
    transcriptDiv.innerHTML = `${line1} <br/> ${line2}`;
  
    console.log("Reveal ready")
    transcriptDiv.hidden = true
  
    let transcriptions = pusher.subscribe("transcript");
  
    transcriptions.bind("wip", data => {
      line2 = trimLine(data)
      updateCaption(line1, line2)
      
      transcriptDiv.hidden = false
      if(timeoutHandle) window.clearTimeout(timeoutHandle)
      timeoutHandle = window.setTimeout(emptyCaption, 3000)
    });

  
    transcriptions.bind("final", data => {
      line1 = trimLine(data)
      line2 = " ";
      updateCaption(line1, line2)

            
      transcriptDiv.hidden = false
      if(timeoutHandle) window.clearTimeout(timeoutHandle)
      timeoutHandle = window.setTimeout(emptyCaption, 3000)
    });
  });
}

function updateCaption(line1, line2){
  transcriptDiv.innerHTML = `${line1} <br/> ${line2}`;
}

function emptyCaption(){
  line1 = ""
        line2 = ""
        updateCaption(line1, line2)
        transcriptDiv.hidden = true
}

function trimLine(line){
  return line.replace(/\d+: /gi, "");
}

setupTranscriptionListeners()