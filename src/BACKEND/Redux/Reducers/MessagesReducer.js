import chats from "../../../Data/chats.json"

let chat = chats[0]

 const MessagesReducer = (state = chat, action) => {
     switch(action.type) {
         default:
             return chat;
     }

}

export default MessagesReducer;