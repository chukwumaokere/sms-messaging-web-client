~~Sidebar search~~
~~New conversation modal (hook into vt to get list of contacts and filter?)~~
Add ability to return more than one and select a name
When conversation has no message show some message to get people started.
~~Add message image to text chat~~
Modal when a photo is clicked to view photo in full
Finish code here: https://gist.github.com/chukwumaokere/463317336735f0974f28677633453f8f
Implement automatic sidebar reload and chatwindow reload (if from number = curent phoneNumber);


# HOW TO SET UP:
1) Create production Twilio account
2) update API endpoint URLs in post/ and twilio/
3) update URL apache configs
4) update sms_incoming_message.php url to URL of update wbehook
5) run app in screen. 