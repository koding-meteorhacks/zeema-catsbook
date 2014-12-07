ServiceConfiguration.configurations.remove({
  service: "twitter"
});

if(Meteor.settings.twitterConsumerKey && Meteor.settings.twitterSecret) {
  console.info("meteor login configured via Meteor.settings");
  var twitterConfig = {
    consumerKey: Meteor.settings.twitterConsumerKey,
    secret: Meteor.settings.twitterSecret
  };
  ServiceConfiguration.configurations.insert(twitterConfig);
} else {
  console.error("Meteor.settings.twitter configs now found ");
}

