const axios = require('axios');
import swal from 'sweetalert';
export default {
    /*deprecated method
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
    */
    async loadConversationData(phoneNumber, contactName){
        console.log('API: requesting conversations for', phoneNumber);
        return axios.post('https://devl06.borugroup.com/cokere/twilio/fetch_message_history.php',{
            contact_number: phoneNumber,
        }).then(function(response){
            console.log('responose from fetch_message_history.php', response);
            if(response.status == 200 && response.data.success == true && response.data.data.length > 0){
                return {
                    success: true,
                    convo: response.data.data,
                }
            }else{
                console.log('Something failed!');
                swal('Error', `Something went wrong when trying to fetch conversation for ${contactName} (${phoneNumber})! Please try refreshing`, 'error')
                return {
                    success: false,
                };
            }
        }).catch(err => {
            console.log(err);
            swal('Error', `Something went wrong! Please try again\n${err}`, 'error')
        })
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