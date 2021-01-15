~~Sidebar search~~
~~New conversation modal (hook into vt to get list of contacts and filter?)~~
Add ability to return more than one and select a name
When conversation has no message show some message to get people started.
~~Add message image to text chat~~
Modal when a photo is clicked to view photo in full
Finish code here: https://gist.github.com/chukwumaokere/463317336735f0974f28677633453f8f
Implement automatic sidebar reload and chatwindow reload (if from number = curent phoneNumber);
Figure out how to save the numbers that were contacted: I think we should save them in localStorage? Just as an array/list of numbers. Then on load, we will fetch the conversations for each one API.loadConversations for each number to create a convo tile in sidebar. So each persons screen is different 
on chat window load, we should mark our own conversation as 'read' broadcast axios.post(localhost:13337, {type: 'mark_read', messageid: messageid}) so other people's get marked as read.
need to add a listneder for type 'mark_read', type: 'reload' make sure php sends type reload


# HOW TO SET UP:
1) Create production Twilio account
2) update API endpoint URLs in post/ and twilio/
3) update URL apache configs
4) Update API.js urls
5) update sms_incoming_message.php url to URL of update wbehook
6) run app in screen. 