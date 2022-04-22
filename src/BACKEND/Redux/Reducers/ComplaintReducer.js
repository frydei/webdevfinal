import complaints from "../../../Data/complaints.json";

const ComplaintReducer = (state = complaints, action) => {
    switch(action.type) {
        default:
            return complaints;
    }

}

export default ComplaintReducer;