Template.registerHelper('appName', function () {
  return Meteor.settings.public.appName || "CatsBook";
})