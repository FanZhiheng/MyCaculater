console.log('成功')

let body = document.body
let screen = document.getElementsByTagName('p')[0]
let currentNum
let nextNum
let combo = false
let computeReady = false
let sign = ''

console.log(currentNum)
body.addEventListener('click', function (e) {
    //console.log(currentNum)
    let target = e.target
    if (target.className === 'num') {
       // console.log(combo)
        if (combo === true) {
            screen.innerHTML += String(target.id)
            nextNum = parseFloat(screen.innerHTML)
        } else {
            screen.innerHTML += String(target.id)
            currentNum = parseFloat(screen.innerHTML)
        }

    } else if (target.id === '=') {
        //console.log('in =')
        if (computeReady) {
            switch(sign){
                case '+':
                    screen.innerHTML = currentNum + nextNum
                    currentNum = parseFloat(screen.innerHTML)
                    break
                case '-':
                    screen.innerHTML = currentNum - nextNum
                    currentNum = parseFloat(screen.innerHTML)
                    break
                case '*':
                    screen.innerHTML = currentNum * nextNum
                    currentNum = parseFloat(screen.innerHTML)
                    break
                case '/':
                    screen.innerHTML = currentNum / nextNum
                    currentNum = parseFloat(screen.innerHTML)
                    break
            }

        }
        console.log(currentNum)
        combo = false
        computeReady = false
        nextNum = 'undefined'
    } else if (target.className === 'op') {
        //console.log('in op')
        if (currentNum !== 'undefined' && nextNum !== 'undefined') {
            computeReady = true
            // switch(target.id) {
            //     case '+':
            //         screen.innerHTML = currentNum + nextNum
            //         currentNum = parseFloat(screen.innerHTML)
            //         break
            //     case '-':
            //         screen.innerHTML = currentNum - nextNum
            //         currentNum = parseFloat(screen.innerHTML)
            //         break
            //     case '*':
            //         screen.innerHTML = currentNum * nextNum
            //         currentNum = parseFloat(screen.innerHTML)
            //         break
            //     case '/':
            //         screen.innerHTML = currentNum / nextNum
            //         currentNum = parseFloat(screen.innerHTML)
            //         break
            // }
            // computeReady = false
        }

        combo = true
        screen.innerHTML = ''

        switch(target.id) {
            case '+':
                sign = '+'
                break
            case '-':
                sign = '-'
                break
            case '*':
                sign = '*'
                break
            case '/':
                sign = '/'
                break
        }
        console.log(currentNum)
    }
})

