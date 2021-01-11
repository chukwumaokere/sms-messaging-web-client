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
       
    },
    async VTLogin(info){
        return info
    },
    async sendSMSMessage(to_number, message_body){
        let accountSid = twilioInfo.accountSid;
        let authToken = twilioInfo.authToken;
        let fromNumber = twilioInfo.fromNumber;
        var twilio = require('twilio');
        var client = new twilio(accountSid, authToken);
        console.log('API: sending message', to_number, message_body)
        client.messages.create({
            body: message_body,
            to: to_number,
            from: fromNumber
        }).then((message) => {console.log(message.sid)});
    }
}