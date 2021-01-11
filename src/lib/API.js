export default {
    async loadConversationData(conversationid){
        console.log('request received for', conversationid);
        if (conversationid > 0){
            let res = [];
            console.log('retrieving data for', conversationid);
            //fetch from twilio
            if(res.ok == 200){
                return {
                    success: true,
                }
            }
        }
        return {
            success: false,
        }
    },
    async authWithTwilio(){

    },
    async VTLogin(info){
        return info
    }
}