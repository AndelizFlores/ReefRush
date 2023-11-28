// localStorage.setItem("stats");
// const highScore = localStorage.getItem("score");  //LOCALSTORAGE
// console.log(highScore)




// buttons.forEach(button => {
//   button.addEventListener("click", () => {  // FIRST MUSIC
//     audio.play();
//   });
// });

// playAudio() {
//   this.audio.currentTime = 0;
//   this.audio.play();
// }

// playSecondaryAudio() {
//   this.secondaryAudio.currentTime = 0;
//   this.secondaryAudio.play();
// }



window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let fullScreen = document.getElementById("fs");

    fullScreen.onclick = toggleFullScreen();

    // localStorage.setItem('keyScore', score.value)
    
    let game

    const audio = new Audio();
    audio.src = "./music-and-sfx/music1.mp3" //initially set music for menu
    const buttons = document.querySelectorAll("button");
    const musicBtn = document.getElementById("sfx") 
    // audio.volume = 0.1
    // audio.play()

    let audioElement = document.getElementById("audio")
    audioElement.volume = 0.1
    audioElement.play()

    let play = true
   
   
   musicBtn.addEventListener('click', () => {

    if (play) {

      audioElement.pause()
      audioElement.time = 0
      audioElement.volume = 0
      // change item
      musicBtn.style.backgroundImage = 'url(Images/soundOFF.png)';
      play = false
    } else {
      audioElement.volume = 0.1
      musicBtn.style.backgroundImage = 'url(Images/soundON.png)';
      audioElement.play()
      play = true
    }
    // audioElement.volume = 0.1
    // audioElement.play()
   
   })

  //  audioElement.volume = 0.1
  //  audioElement.play()

  let bubbles = new Audio()
  bubbles.src = './music-and-sfx/Bubbles.mp3'
  
    startButton.addEventListener("click", function () {
      game = new Game()
      startGame();
      // bubbles.volume = 0.3
      // bubbles.play()
      // bubbles.loop = true
      // audio.src = music HERE --> url("./music-and-sfx/Bubbles.mp3");
      // audio.play()
    });

    let isGameOver

    function startGame() {
        console.log("start game");
        game.start()
        bubbles.volume = 0.3
        bubbles.play()
        bubbles.loop = true

        isGameOver = setInterval(() => {
          if (game.gameIsOver) {
            gameOver()
          }
        }, 16)
    
        document.addEventListener('keydown', (e) => {
          
          if (e.key === 'ArrowDown') {
            console.log("Down")
            if (game.player.directionY < 3.5) {
              game.player.directionY += 1
            }
          }
        
          if (e.key === 'ArrowUp') {
            console.log("UP")
            if (game.player.directionY > -3.5) {
              game.player.directionY -= 1
            }
          }
      })}

      function gameOver() {
          bubbles.pause()
          bubbles.time = 0
          bubbles.volume = 0
          isGameOver = null
      }


      restartButton.addEventListener('click', () => {
        game = new Game()
        startGame();
      })
    }

    function toggleFullScreen(){
      document.addEventListener('click', function(event){
        if(!event.target.hasAttribute('data-toggle-fullscreen')) return;

        if(document.fullscreenElement){
          document.exitFullscreen();
          return;
        }

        document.documentElement.requestFullscreen();
      });

      // if (game) {
      //   if (game.gameIsOver) {

      //     bubbles.pause()
      //     bubbles.time = 0
      //     bubbles.volume = 0
      //   }
      // }



    }
    //   if(localStorage) {
    //     let gameState = localStorage.getItem("gameState");
    //     let state = JSON.parse(gameState);
    //     }
    // };

    // let elem = document.getElementById("fs");
    // function openFullscreen() {
    //   if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    //   } else if (elem.webkitRequestFullscreen) { /* Safari */
    //     elem.webkitRequestFullscreen();
    //   } else if (elem.msRequestFullscreen) { /* IE11 */
    //     elem.msRequestFullscreen();
    //   }
    // }