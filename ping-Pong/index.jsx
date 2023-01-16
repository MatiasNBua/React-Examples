var leftPaddle = document.querySelector('.left-paddle')
var rightPaddle = document.querySelector('.right-paddle')


leftPaddle.y = 200
leftPaddle.score = 0
leftPaddle.style.top = leftPaddle.y + 'px'

const pitchWidth = visualViewport.width
const pitchHeight = visualViewport.height * 0.95

const paddleWidth = visualViewport.width * 0.05
const paddleHeight = visualViewport.height * 0.16


rightPaddle.y = 200
rightPaddle.score = 0
rightPaddle.style.top = rightPaddle.y + 'px'
rightPaddle.style.left = (pitchWidth - paddleWidth - 10) + 'px' 


document.onkeydown = function(event) {
    // left paddle


    if (event.key === 's' && leftPaddle.y <= pitchHeight - paddleHeight) {
        leftPaddle.y = leftPaddle.y + 10

    }else if (event.key === 'w') {
        leftPaddle.y = leftPaddle.y - 10
    }

    leftPaddle.style.top = leftPaddle.y + 'px'

    //right paddle
    if (event.key === 'ArrowDown' ) {
        rightPaddle.y = rightPaddle.y + 10
    }else if(event.key === 'ArrowUp'){
        rightPaddle.y = rightPaddle.y - 10
    }
    rightPaddle.style.top = rightPaddle.y + 'px'

}