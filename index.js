


window.addEventListener('DOMContentLoaded', () => {
        
        // const Text = document.getElementsById('InText').innerText;
        // let Text = document.getElementById('InText').value;
        // let Key = document.getElementById('Key').value;
        let p = document.getElementById('OutText');

        
        let bnt = document.getElementById('Button');
        

    const Encrypt = (text) =>{

        var Key = document.getElementById('Key').value;
        Key = parseInt(Key);

        let m_Resoult = '';
        // return text.charAt(Resoult);
        for (let i = 0; i < text.length; i++){
            var m_ChangedCode = parseInt( text.charCodeAt(i) )* Key + Key;
            var m_ChangedLetter = String.fromCharCode(m_ChangedCode);
            
            m_Resoult = m_Resoult + m_ChangedLetter; 
        }
        return m_Resoult;
    }
    
    const Decrypt = (text) =>{
        var Key = document.getElementById('Key').value;
        Key = parseInt(Key);

        let m_Resoult = '';
        // return text.charAt(Resoult);
        for (let i = 0; i < text.length; i++){
            var m_ChangedCode = (text.charCodeAt(i) - Key) / Key;
            var m_ChangedLetter = String.fromCharCode(m_ChangedCode);
            m_Resoult = m_Resoult + m_ChangedLetter; 
        }
        return m_Resoult;
    }
    
    const DOIT = (event) =>{
        event.preventDefault()

        var Text = document.getElementById('InText').value;
        
        var encr = document.getElementById('Encrypt');

        

        if(encr.checked){

            
            p.innerHTML = Encrypt(Text);
        }
        else{
            
            p.innerHTML = Decrypt(Text);
        }

    }
    var encr = document.getElementById('Encrypt');
    encr.addEventListener('click', DOIT);

    bnt.addEventListener('click', DOIT);
})