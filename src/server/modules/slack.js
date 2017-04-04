import slack from 'slack-client';
import config from '../config';

const slackEvent = {
    slackMessage : (message, channel) => {

        const RtmClient = slack.RtmClient;

        let rtm = new RtmClient(config.slackToken, {logLevel: 'error'});
        rtm.start();

        rtm.sendMessage(message, channel);

        console.log(message, channel);
    }
};

export default slackEvent;