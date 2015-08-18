ArtWorks = new Mongo.Collection('artWorks');

Meteor.startup(() => {
  if(Meteor.isClient) {
    trackCollection(ArtWorks, CollectionActions.artWorksChanged)
  }
})

if(Meteor.isServer) {
  Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
                    {fields: {'services.twitter': 1}});
  });
  Meteor.publish('artFeed', function(limit) {
    return ArtWorks.find({}, { limit: limit, sort: { created_at: -1 }})
  })
}

ArtWork = {
  create(attributes) {
    ArtWorks.insert(attributes)
  },

  findAll() {
    return ArtWorks.find({}, { limit: 5, sort: { created_at: -1 }})
  }
}
