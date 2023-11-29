class Game {

    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.gameContainer = document.getElementById('game-container')
        this.player = new Player(this.gameScreen, 212, 450, 150, 100, './Images/Fish2.png')
        this.height = 1080
        this.width = 1920
        this.obstacles = []
        this.score = 0
        this.gameIsOver = false
        this.frames = 0
        this.lives = 1
        this.scoreElement = document.getElementById('score')
        this.resultElement = document.getElementById('game-result')
        this.highScoreElement = document.getElementById('high-score')
    }

    start() {

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.startScreen.style.display = 'none'
        this.gameContainer.style.display = 'flex'
        this.gameScreen.style.display = 'inherit'
        this.gameEndScreen.style.display = 'none'
        // this.gameEndScreen.style.height = `${0}px`
        // this.gameEndScreen.style.width = `${0}px`
        this.gameLoop()

    }

    gameLoop() {

        if (this.gameIsOver) {
            return
        }

        this.update()
        this.frames++

        // let shark1 = new Image()
        // shark1.src = 'images/shark.png'

        // let jelly = new Image()
        // jelly.src = "images/pinks.png" 

        // let shark2 = new Image()
        // shark2.src = "images/25.png"

        if (this.frames % 120 === 0) {
            let obstacleType
             switch(true){                                                 //NEW
                case this.score < 3000:   //100
                obstacleType = './Images/shark.png'
                break
                case this.score > 3000 && this.score <= 7000:   //100 y 1000
                obstacleType = "./Images/25-1.png" 
                break
                case this.score > 7000:  //1000
                obstacleType = "./Images/killerWhale-1.png"
                break
                default:
                obstacleType = './Images/shark.png'
            }
            console.log("Obstacle", obstacleType)
            this.obstacles.push(new Obstacle(this.gameScreen, obstacleType))
            // this.obstacles.push(new Obstacle(this.gameScreen))
        }

        window.requestAnimationFrame(() => this.gameLoop())

    }

    update() {

        this.player.move()

        this.obstacles.forEach((obstacle, i, arr) => {
            obstacle.move()
            if (obstacle.left < -300) {
                arr.splice(i, 1)
                obstacle.element.remove()
                this.score+=100
            }
            if (this.player.didCollide(obstacle)) {
                this.lives--
                arr.splice(i, 1)
                obstacle.element.remove()
                if (this.lives <= 0) {
                    this.gameIsOver = true
                    this.gameOver()
                }
            }
        })

        this.scoreElement.innerHTML = this.score
    }

    // localStorage

//     let currentHighScore = localStorage.getItem('highScore') || 0;
//        let recentScore = this.score;

//     if (currentHighScore < recentScore) {
//      localStorage.setItem('stats', recentScore);
//  }











    // function displayStatusText(context){
    //     context.fillStyle = 'black';
    //     context.font = '40px Helvetica';
    //     context.fillText('score: ' + score, 20, 50);
    // }

    // displayStatusText(ctx)

    showGrade(score) {
        if(score > 10000) return "Are you real?";
        else if(score > 7500) return "So close...";
        else if(score > 6000) return "Awesome but...";
        else if(score > 5000) return "Nice but...";
        else if(score > 3000) return "Could be better...";
        else if(score > 2700) return "Well...";
        else if(score > 2600) return "Really?";
        else return "Poor...";
    }

    // start() {

    gameOver() {
        console.log("Game over")
        this.gameScreen.style.height = `${0}px`
        this.gameScreen.style.width = `${0}px`
        this.gameScreen.style.display = 'none'
        this.gameEndScreen.style.display = 'inherit'
        if (this.score > 10000) {
            this.resultElement.innerHTML = `${this.showGrade(this.score)} You won!`
        } else {
            this.resultElement.innerHTML = `${this.showGrade(this.score)} You lose!`
        }
        this.player.element.remove()
        this.obstacles.forEach((obstacle) => {
            obstacle.element.remove()
        })

        if (!window.localStorage.getItem('high-score')) {
            window.localStorage.setItem('high-score', `${this.score}`)
            this.innerHTML = `High score is: ${this.score}`
        } else if (this.score > Number(window.localStorage.getItem('high-score'))) {
             
            window.localStorage.setItem('high-score', `${this.score}`)
                this.highScoreElement.innerHTML = `You got a new high score!: ${this.score}`
            
        } else {
            let highScore = window.localStorage.getItem('high-score')
            this.highScoreElement.innerHTML = `High score is: ${highScore}`
        }
    }
}

