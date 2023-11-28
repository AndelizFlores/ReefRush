// const imageArr = ["./images/shark.png", "./images/25.png", "./images/pinks.png"]

class Obstacle {

    constructor(gameScreen, src) {
        this.gameScreen = gameScreen
        this.left = 2220
        this.top = Math.abs(Math.random() * 1080 - 150)
        this.width = 300
        this.height = 150
        this.element = document.createElement('img')
        this.element.src = src                // ImageArr // imageArr[Math.floor(Math.random() * imageArr.length)]     -----'images/shark.png'
        this.element.style.position = 'absolute'
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.element.style.zIndex = '100'
        this.gameScreen.appendChild(this.element)
        // this.speed
    }

    move() {
        this.left -= 3.5
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
    }
    
}

// WRONG

// class Octopus extends Obstacle{
//     constructor(game) {
//         super();
//         this.game = game;
//         this.width = 200
//         this.height = 100
//         this.element = document.createElement('img')
//         this.element.src = 'images/pinks.png'
//         this.element.style.zIndex = '100'
//         this.gameScreen.appendChild(this.element)
//      }

//     move() {
        
//         if(this.score >= 1000){
//         this.left -= 3
//         this.updatePosition()
//         }
//     }

//     updatePosition() {
//         super.this.element.style.top = `${this.top}px`
//         super.this.element.style.left = `${this.left}px`
//     }
// }
