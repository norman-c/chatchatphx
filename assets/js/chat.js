function getUsername() {
    let txt;
    let name = prompt("Please enter your name to enter the chatroom:");
    while (name == "" || name == null) {
        name = prompt("Enter your name to start chatting:")
    }
    txt = name;
    // document.getElementById("User").innerHTML = txt;
    return txt;
}


let userName = getUsername();
let Chat = {
    init(socket) {
        let path = window.location.pathname.split('/')
        let room = path[path.length - 1]
        if (room.length < 1) {
            room = "Main"
        }
        let channel = socket.channel('chat:' + room, {})
        channel.join()

        this.listenForChats(channel)
    },

    listenForChats(channel) {
        function submitForm() {
            let userMsg = document.getElementById('user-msg').value
            let d = Date().toString();
            let date = d.split(' ').splice(0, 5).join(' ');
            channel.push('shout', { name: userName, body: userMsg, date: date })
            document.getElementById('user-msg').value = ''
        }
        document.getElementById('chat-form').addEventListener('submit', function(e) {
            e.preventDefault()
            submitForm();
        })
        document.getElementById('chat-form').addEventListener('keypress', function(e) {
            if (event.keyCode == 13) {
                e.preventDefault()
                submitForm();
            }
        })

        channel.on('shout', payload => {
            let chatBox = document.querySelector('#chat-box')
            let msgBlock = document.createElement('p')

            msgBlock.insertAdjacentHTML('beforeend', `${payload.date}: ${payload.name}: ${payload.body}`)
            chatBox.appendChild(msgBlock)
            chatBox.scrollTop = chatBox.scrollHeight;
        })
    }
}

export default Chat