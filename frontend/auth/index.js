document.onclick = addEventListener('click',(e)=> e.preventDefault())
document.onload  = addEventListener('load', ( )=>{
    $('#alerting').hide(1)
    $('#empty').hide(1)
    $('#nofetch').hide(1)
})  
$('#button').click(function(){
    let admInput  = document.querySelector('#admin').value
    let passInput = document.querySelector('#pass').value 
    let url = 'http://localhost:3004/auth'

    if(admInput == '' || passInput == ''){
        $('#empty').show(100)
        clear()
    }else{
        const con = {
            method :'GET',
            cache  :'default',
            status :200
        }

        fetch(url,con)
                .then(data => data.json())
                .then(data => {
                    data.map(e => {
                        if(admInput == e.user && passInput == e.password){
                            document.location.href = 'web/index.html'
                        }else{
                            $('#alerting').show(100) 
                            clear()
                        }
                    })
                })
                .catch(_ => {
                    $('#nofetch').show(100)
                })
    }
})
$('#admin').mouseenter(function(){
    $('#alerting').hide(100)
    $('#empty').hide(100)
})
$('#pass').mouseenter(function(){
    $('#alerting').hide(100)
    $('#empty').hide(100)
})
$('#nofetch').click(function(){
    $(this).hide(100)
})
function clear(){
    let admInput  = document.querySelector('#admin')
    let passInput = document.querySelector('#pass')

    admInput.value  = ''
    passInput.value = ''
}
