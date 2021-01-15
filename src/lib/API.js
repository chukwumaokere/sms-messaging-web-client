const axios = require('axios');
import swal from 'sweetalert';
const endpoint_url = "https://devl06.borugroup.com/cokere/";

export default {
    async loadConversationData(phoneNumber, contactName){
        console.log('API: requesting conversations for', phoneNumber);
        return axios.post(endpoint_url + 'twilio/fetch_message_history.php',{
            contact_number: phoneNumber,
        }).then(function(response){
            console.log('responose from fetch_message_history.php', response);
            if(response.status == 200 && response.data.success == true && response.data.data.length > 0){
                return {
                    success: true,
                    convo: response.data.data,
                    contact_id: response.data.contact_id,
                }
            }else{
                console.log('Something failed!');
                swal('Error', `Something went wrong when trying to fetch conversation for ${contactName} (${phoneNumber})!\n\n Please try refreshing`, 'error')
                return {
                    success: false,
                };
            }
        }).catch(err => {
            console.log(err);
            swal('Error', `Something went wrong! Please try again\n${err}`, 'error')
        })
    },
    async loadLastMessage(phoneNumber){
        //this will get the last message for the Sidebar loading.  
        console.log(phoneNumber);
    },
    async VTLogin(info){
        return info
    },
    async sendSMSMessage(to_number, message_body, attachment){
        console.log('API: sending message', to_number, message_body, attachment);
        if (attachment === undefined){
            attachment = [];
        }
        console.log('attachment is', attachment);
        return axios.post(endpoint_url + 'twilio/send_sms.php', {
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
    },
    async uploadImageAndFetchURL(record_id, base64image){
        console.log('API: Sending Image to uploadPhoto endpoint', record_id, base64image);
        return axios.post(endpoint_url + 'post/postPhotos.php', {
            record_id: record_id,
            base64Image: base64image,
        }).then(function(response){
            console.log('response from postPhoto.php', response);
            if(response.status == 200 && response.data.success == true){
                return {
                    success: true,
                    return_url: response.data.return_url
                }
            }else{
                console.log("upload process failed ")
                swal('Error', 'Something went wrong! Please try again', 'error')
                return {
                    success: false,
                }
            }
        }).catch(err => {
            console.log(err)
            swal('Error', `Something went wrong! Please try again\n${err}`, 'error')
        })
    },
    fetchContactSearch(value){
        swal(`Searching for: ${value}`);
        axios.get(endpoint_url + `post/query.php?entity=Contacts&firstname=${value}&lastname=${value}&mobile=${value}&phone=${value}`)
        .then(function(response){ 
            console.log('response from fetch query', response);
            if (response.status == 200 && response.data != 'NORECORD'){
                let record = response.data;
                //swal('Success', `API Responded with: ${record.firstname} ${record.lastname} ${record.mobile}` , 'success')
                swal({
                    title: "Success",
                    icon: 'success',
                    text: `Retrieved contact: ${record.firstname} ${record.lastname} ${record.mobile}\n Would you like to start a conversation with them?`,
                    buttons: true,
                }).then((isConfirm) => {
                    if(isConfirm){
                        swal('Conversation initiated',`Starting conversation with ${record.firstname} ${record.lastname}...`, 'warning');
                        //Need some api to start a new conversation.
                    }else{
                        swal('Conversation cancelled', `Just search again if you want to start a conversation!`, 'info');
                    }
                })
            }else{
                console.log('failed to get response');
                swal('Error', `Could not find a contact that matched: ${value}`, 'error')
            }
        }).catch(err => {
            console.log(err);
            swal('Error', `Something went wrong!\n${err}`, 'error')
        })
    }
}