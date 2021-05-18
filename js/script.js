var app = new Vue (
    {
        el: "#root",

        data: {
            images: [
                // 1
                "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                // 2
                "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                // 3
                "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
                // 4
                "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                // 5
                "https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ],
            imageIndex: 0,
        },

        methods: {

            prevImage: function () {
                this.imageIndex--

                if (this.imageIndex == -1) {
                    this.imageIndex = this.images.length - 1;
                }
            },

            nextImage: function () {
                this.imageIndex++

                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            }

        },

        // set interval
        created: function() {
            setInterval((this.nextImage),3000)
        }
    }
)