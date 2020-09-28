new Vue({
    el: '#app',
    data() {
        return {
            garbageImgList: [{
                    label: 1,
                    url: 'img/垃圾_slices/图层 1.png'
                },
                {
                    label: 2,
                    url: 'img/垃圾_slices/图层 2.png'
                },
                {
                    label: 3,
                    url: 'img/垃圾_slices/图层 3.png'
                },
                {
                    label: 4,
                    url: 'img/垃圾_slices/图层 4.png'
                },
                {
                    label: 2,
                    url: 'img/垃圾_slices/图层 5.png'
                },
                {
                    label: 1,
                    url: 'img/垃圾_slices/图层 6.png'
                },
                {
                    label: 2,
                    url: 'img/垃圾_slices/图层 7.png'
                },
                {
                    label: 3,
                    url: 'img/垃圾_slices/图层 8.png'
                },
                {
                    label: 4,
                    url: 'img/垃圾_slices/图层 8.png'
                },
                {
                    label: 3,
                    url: 'img/垃圾_slices/图层 10.png'
                }
            ],
            // label: this.garbageImgList[0].label
        }
    },
    methods: {
        goGamePage() {
            window.open('gamePage.html');
        },
        goGarbage(id) {
            let label = id.currentTarget.id
            console.log(label)
            let msg = this.garbageImgList[0].label
            if (msg == label) {
                console.log("恭喜你答对了")
            } else {
                console.log("很遗憾，打错了")
            }
            // this.garbageImgList.splice(0, 1);
            // console.log(this.garbageImgList)

        }
    },
    watch: {
        // label
    },
    mounted() {
        console.log(this.garbageImgList[0].url)
    }
})