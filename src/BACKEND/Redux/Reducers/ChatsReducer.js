import chats from "../../../Data/chats.json"

const ChatsReducer = (state = chats, action) => {
    switch(action.type) {
        default:
            return chats;
    }

}

export default ChatsReducer