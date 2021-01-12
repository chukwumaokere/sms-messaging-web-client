const axios = require('axios');
import swal from 'sweetalert';
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
    async sendSMSMessage(to_number, message_body, attachment){
        console.log('API: sending message', to_number, message_body);
        return axios.post('https://devl06.borugroup.com/cokere/twilio/send_sms.php', {
            to_number: to_number,
            message_body: message_body,
            media_array: attachment,
        }).then(function(response){
            console.log('response from send_sms.php', response);
            if (response.status == 200 && response.data.success == true && response.data.message_sent != 'FF'){
                console.log('Message sent successfully');
                return true;
            }else{
                console.log('Message failed to send');
                swal('Error', 'Something went wrong! Please try again', 'error')
                return false;
            }
        }).catch(err => {
            console.log(err);
            swal('Error', `Something went wrong! Please try again\n${err}`, 'error')
        })
    }
}