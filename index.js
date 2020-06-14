console.log('成功')

let body = document.body
let screen = document.getElementsByTagName('p')[0]
let currentNum = undefined
let nextNum = undefined
let result = undefined
let combo = false
let computeReady = false
let sign = ''

//console.log(currentNum)
body.addEventListener('click', function (e) {
    //console.log(currentNum)
    let target = e.target
    if (target.className === 'num') {
        console.log(combo)
        if (combo === true) {
            screen.innerHTML += String(target.id)
            nextNum = parseFloat(screen.innerHTML)
            console.log("获取2号数值" + nextNum)
            computeReady = true
        } else {
            screen.innerHTML += String(target.id)
            currentNum = parseFloat(screen.innerHTML)
            console.log("获取1号数值")
        }

    } else if (target.id === '=') {
        //console.log('in =')
        if (computeReady) {
            
            switch(sign){
                case '+':
                    result = currentNum + nextNum
                    currentNum = result
                    break
                case '-':
                    result = currentNum - nextNum
                    currentNum = result
                    break
                case '*':
                    result = currentNum * nextNum
                    currentNum = result
                    break
                case '/':
                    result = currentNum / nextNum
                    currentNum = result
                    break
            }

        }
        //console.log(currentNum)
        screen.innerHTML = result
        combo = false
        computeReady = false
        nextNum = undefined
    } else if (target.className === 'op') {
        //console.log('in op')
        //console.log(nextNum)
        if (currentNum !== undefined && nextNum !== undefined) {
            console.log("变量1和2都已存在")
            
            console.log('使用op号运算')
            switch(sign) {
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
            screen.innerHTML = ''
            combo = true
            computeReady = false
            nextNum = undefined
        } else {
            console.log("第二个变量还不存在")
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
            combo = true
            screen.innerHTML = ''
        }
        console.log(combo)
        //console.log(currentNum)
    }
})

