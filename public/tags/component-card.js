riot.tag2('component-card', '<div class="component"> <b>{name}</b> <br> <button onclick="{addComponentToWebSite}">Add</button> </div>', '', '', function(opts) {
        this.addComponentToWebSite = function() {
            var self = this;
            console.log("lol");

            console.log(this.opts.restaurant._id);
            var site = fermata.json("")("subdomains")(opts.restaurant.slug)(['add-components']).post({
                originalId: this._id,
                restaurantId: self.opts.restaurant._id,
                name: self.name,
                data:{

                }
            },function (err, resp) {
                console.log("done");
            })
        }.bind(this)
}, '{ }');