class player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px" ;
        if(screen.width<500){
            heightMain.style.width = screen.width + "px";

        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300 + "px";
    }
}
onload = new player();
//class buttons
class audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play_pause");
        this.isPlyed;
        this.play_pause_button.addEventListener("click",()=>{
        this.play_pause();
        });
        // this.play_pause();
        this.names_radio = [];
        this.names_radio[0]="RADI OUED SOUF";
        this.names_radio[1]="RADIO BEJAIA ";
        this.names_radio[2]="RADIO Constantine";
        this.source_audio = [];
        this.source_audio[0]="https://webradio.tda.dz/ouedSouf_64K.mp3";
        this.source_audio[1]="https://webradio.tda.dz/Bejaia_64K.mp3";
        this.source_audio[2]="https://webradio.tda.dz/Constantine_64K.mp3";
        this.server = 0;
        this.setResource();
        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.source_audio.length-1){
                ++this.server;
                this.isPlyed = false;
            }else{
                this.server=0;
            }
            localStorage.setItem("SAVE-POSITION", this.server);
            this.setResource();


        });
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isPlyed = false;
            }else{
                this.server=this.source_audio.length-1;

            }
            localStorage.setItem("SAVE-POSITION", this.server);
            this.setResource();
        });
    }
    setResource(){
        if(localStorage.getItem("SAVE-POSITION")!=null){
            this.server=localStorage.getItem("SAVE-POSITION");

        }
        this.audio_file.src= this.source_audio[this.server];
        this.title_audio.innerHTML=this.names_radio[this.server];
       this.play_pause();


    }
    play_pause(){
        if( this.isPlyed == false){
            this.play_pause_button.src="./img/pause.png"; 

            this.audio_file.play();
            this.isPlyed = true;

        }else{
            this.play_pause_button.src="./img/play.png"; 
            this.audio_file.pause();
            this.isPlyed = false;
         }
}
}
onload = new audio_Player();