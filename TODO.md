* ~~Sidebar search~~  
* ~~New conversation modal (hook into vt to get list of contacts and filter?)~~  
* Add ability to return more than one and select a name  
* ~~When conversation has no message show some message to get people started.~~  
* ~~Add message image to text chat~~  
* ~~Modal when a photo is clicked to view photo in full or open in new tab~~   
* ~~Finish code here: https://gist.github.com/chukwumaokere/463317336735f0974f28677633453f8f~~  
* ~~Implement automatic sidebar reload and chatwindow reload (if from number = curent phoneNumber);~~  
* ~~Figure out how to save the numbers that were contacted: I think we should save them in localStorage Just as an array/list of numbers. Then on load, we will fetch the conversations for each one API.~~  
* ~~loadConversations for each number to create a convo tile in sidebar. So each persons screen is different~~  
* on chat window load, we should mark our own conversation as 'read' broadcast axios.post(localhost:13337, {type: 'mark_read', messageid: messageid}) so other people's get marked as read.  
* need to add a listneder for type 'mark_read', type: 'reload' make sure php sends type reload  
* switch placeholder images to load locally from vue project.  
* Add function to disable input box or blur it as message is sending, show text "Sending message..." with loading symbol?   
* Hover tooltip to open window in new tab?

# ISSUES: 
* ~~When sending message with picture it hits 500 error.~~
* ~~send sms seems to force big reload~~
* ~~receive SMS doesnt.~~
* ~~So SMS shouldnt force big reload with reload screen. it hits load Conversation data and it 500 errors on both fetch_message_history.php and fetch_sidebar_message_history.php~~
* ~~Now on reload chatwindow main doesnt show image but shows the message text standalone. gotta double check the response on fetch, and make sure it has the image in it and match sure chatwindow.vue or chatmessage.vue will reload the picture properly~~


# HOW TO SET UP:
pre) npm install to install all. Make sure axios, socket.io, socket.io-client, and express get installed.
1) Create production Twilio account and get auth info and api info
1.5) install composer in twilio/ directory and run `composer require twilio/sdk; composer install`
2) Update API endpoint URLs in post/ and twilio/
3) Update URL apache configs
4) Update API.js urls "endpoint_url" and "socket".
5) Run/build the project
6) Update twilio/sms_incoming_webhook.php’s $url value to the server.js path port 8081 and 
7) Update twilio/fetch_message_history.php and twilio/send_sms.php with production twilio api info
8) Run server.js and vue app and/or ngrok in linux screen session 