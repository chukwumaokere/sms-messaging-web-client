import twilioInfo from './Credentials';
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
        let accountSid = twilioInfo.accountSid;
        let authToken = twilioInfo.authToken;
        return{
            accountSid,
            authToken,
        }
    },
    async VTLogin(info){
        return info
    }
}