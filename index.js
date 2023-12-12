const fs = require('fs')

exports.handler = async (event, context) => {
    var path = process.env.RUNTIME_CODE_ROOT + '/index.html'
    let html = fs.readFileSync(path, {
        encoding: 'utf-8'
    })

    const replaceKey = {
        name: 'FunctionGraph',
        mottoCN: "千里之行，始于足下",
        mottoEN: "The longest journey begins with the first step"
    };

    for (let key in replaceKey) {
        const reg = new RegExp('\\$\\{' + key + '\\}', 'g')
        html = html.replace(reg, replaceKey[key])
    }

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/html'
        },
        'isBase64Encoded': false,
        'body': html,
    }
}