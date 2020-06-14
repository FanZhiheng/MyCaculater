console.log('成功')

let body = document.body
let screen = document.getElementsByTagName('p')[0]
let currentNum = ''
let nextNum = ''
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
            nextNum += target.id
            nextNum = parseFloat(nextNum)
            screen.innerHTML = nextNum
            // screen.innerHTML += String(target.id)
            // nextNum = parseFloat(screen.innerHTML)
            console.log("获取2号数值" + nextNum)
            computeReady = true
            
        } else {
            currentNum += target.id
            currentNum = parseFloat(currentNum)
            screen.innerHTML = currentNum

            // screen.innerHTML += String(target.id)
            // currentNum = parseFloat(screen.innerHTML)
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
        nextNum = ''
    } else if (target.className === 'op') {
        //console.log('in op')
        //console.log(nextNum)
        if (currentNum !== '' && nextNum !== '') {
            console.log("变量1和2都已存在")
            
            console.log('使用op号运算')
            switch(sign) {
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
            screen.innerHTML = result
            combo = true
            computeReady = false
            nextNum = ''
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
        }
        console.log(combo)
        //console.log(currentNum)
    }
})

